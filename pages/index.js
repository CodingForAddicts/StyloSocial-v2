import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useEffect, useRef, useState } from "react";
import FOG from "vanta/dist/vanta.fog.min";
import * as THREE from "three";
import Image from 'next/image'
import Layout from '../components/Layout'

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
          minWidth: 200.00,
          highlightColor: 0xff0068,
          midtoneColor: 0x1c28e8,
          lowlightColor: 0x5342b1,
          baseColor: 0xae65d2,
          blurFactor: 0.90,
          speed: 1.5,
          zoom: 0.4,
        })
      );
    }
    
    return () => {
      if (vantaEffect) vantaEffect.destory();
    };
  }, [vantaEffect]);
  return (
    <div ref={vantaRef}>
    <div className={styles.container} >
      <Head>
        <title>StyloSocial</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout >
      <main className={styles.main}  >
      
        
      
        
      
        <div className={styles.grid}>
          <a href="..." className={styles.card}>
            <h2>Cloud &rarr;</h2>
            <p>Lorem ipsum dolor ipsi ratum </p>
          </a>
      
          <a href="..."  className={styles.card}>
            <h2>Sondages &rarr;</h2>
            <p>Lorem ipsum dolor ipsi ratum </p>
          </a>
      
          <a
            href="..." 
            className={styles.card}
          >
            <h2>Liens &rarr;</h2>
            <p>Lorem ipsum dolor ipsi ratum </p>
          </a>
      
          <a
            href="..." 
            className={styles.card}
          >
            <h2>Contact &rarr;</h2>
            <p>
              Lorem ipsum dolor ipsi ratum 
            </p>
          </a>
        </div>
        
      </main>
      
      </Layout>
      
    </div>
    
    </div>
    
    
    
    
  );
}
