import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useEffect, useRef, useState } from "react";
import FOG from "vanta/dist/vanta.fog.min";
import * as THREE from "three";
import Image from 'next/image'
import Layout from '../components/Layout'
import { withServerSideAuth } from "@clerk/nextjs/ssr";
import Link from 'next/link'
import { ClerkProvider, SignedIn, SignedOut, UserButton, SignUpButton, SignInButton } from "@clerk/nextjs";

export const getServerSideProps = withServerSideAuth();

const apiSample = `
import { withAuth } from "@clerk/nextjs/api";

export default withAuth((req, res) => {
  const { sessionId } = req.auth;

  if (!sessionId) {
    return res.status(401).json({ id: null });
  }

  return res.status(200).json({ id: sessionId });
});
`.trim();


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
          minHeight: 400.00,
          minWidth: 400.00,
          highlightColor: 0xff0068,
          midtoneColor: 0x1c28e8,
          lowlightColor: 0x5342b1,
          baseColor: 0xae65d2,
          blurFactor: 1,
          speed: 1.5,
          zoom: 0.5,
        })
      );
    }

    return () => {
      if (vantaEffect) vantaEffect.destory();
    };
  }, [vantaEffect]);
  return ( 
    
    <div ref={ vantaRef }>
      <div className={ styles.container }>

        <Head>
          <title> StyloSocial </title>
    <link rel = "icon"
    href = "/favicon.ico"/>
    
    </Head> 
    <Layout >
    
    <main className = { styles.main } >
    <SignedOut >
    <h1 className={styles.title}>
      Bienvenue sur <a href="https://stylo.social">StyloSocial!</a>
    </h1>
    
    <p className={styles.description}>
      Pour commencer, <SignUpButton mode="modal">
        <button className={styles.btn}>
          créez un compte
        </button>
      </SignUpButton>
    </p>
    </SignedOut >
    <div className = { styles.grid } >
    <SignedIn >
  
    <a href="https://www.stylo.social/instant" className = { styles.card} >
    <h2 > Instant cloud &rarr;</h2> 
    <p> Les derniers cours avec téléchargment instantané </p> 
    </a>
    
    <a href="https://www.stylo.social/landing" className={ styles.card }>
    <h2> Sondages &rarr;</h2> 
    <p> Donnez votre avis !</p>
    </a>
    
  <a href="https://www.tutorat-fermat.fr" className = { styles.card} >
    <h2 > Tutorat &rarr;</h2> 
    <p> Aider ou être Aidé </p> 
    </a>
    
    <a href="https://www.stylo.social/landing" className = { styles.card} >
    <h2 > Projet FermatShare &rarr;</h2> 
    <p> L &apos; application est en version pré-alpha, infos ici ! 😀 </p> 
    </a>
 
  

    </SignedIn>

    </div>
    </main>

    </Layout>

    </div>
    </div>

  );
}