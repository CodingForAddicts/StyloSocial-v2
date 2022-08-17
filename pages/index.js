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
    
    <div ref = { vantaRef } >
    <div className = { styles.container } >
    
    <Head >
    <title > StyloSocial < /title> 
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
    <Link href="/cloud">
    <a  className={styles.card}>
    <h2> Cloud ☁️ &rarr; </h2> <p>Cours & fiches</p> 
    </a>
    </Link>

    <Link href="/polls">
    <a className={ styles.card }>
    <h2> Sondages 📊 &rarr;</h2> 
    <p> Donnez votre avis !</p>
    </a>
    </Link>

    <Link href="/links">
    <a className = { styles.cardB } >
    <h2 > Liens 🔗 &rarr;</h2> 
    <p> Manuels corrigés, manuels sans se connecter, contacts...</p> 
    </a>
    </Link>

    </SignedIn>

    </div>
    </main>

    </Layout>

    </div>
    </div>

  );
}