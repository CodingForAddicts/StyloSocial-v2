import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useEffect, useRef, useState } from "react";
import FOG from "vanta/dist/vanta.fog.min";
import * as THREE from "three";
import Image from 'next/image'

export default function Home() {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        FOG({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 300.00,
          highlightColor: 0xff0068,
          midtoneColor: 0x1c28e8,
          lowlightColor: 0x5342b1,
          baseColor: 0xae65d2,
          blurFactor: 0.90,
          speed: 1,
          zoom: 0.20
        })
      );
    }
    
    return () => {
      if (vantaEffect) vantaEffect.destory();
    };
  }, [vantaEffect]);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main} ref={vantaRef}>
        
      
        
      
        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Cloud &rarr;</h2>
            <p>Lorem ipsum dolor ipsi ratum </p>
          </a>
      
          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Sondages &rarr;</h2>
            <p>Lorem ipsum dolor ipsi ratum </p>
          </a>
      
          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Liens &rarr;</h2>
            <p>Lorem ipsum dolor ipsi ratum </p>
          </a>
      
          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Contact &rarr;</h2>
            <p>
              Lorem ipsum dolor ipsi ratum 
            </p>
          </a>
        </div>

      </main>
      
    </div>
    
    
    
  );
}
