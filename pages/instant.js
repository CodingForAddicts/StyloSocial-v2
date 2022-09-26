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
  return ( 
	

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


	<a href="https://www.stylo.social/francais" className={ styles.card }>
	<h2> Français </h2> 
	<p> Fiches et cours </p>
	</a>
	
	<a href="https://www.stylo.social/espagnol" className={ styles.card }>
	<h2> Espagnol </h2> 
	<p> fiches, cours, bilans </p>
	</a>
	
	<a href="https://www.stylo.social/es" className={ styles.card }>
	<h2> ES </h2> 
	<p> Cours et Bilans</p>
	</a>
	
	<a href="https://www.stylo.social/histoire" className={ styles.card }>
	<h2> Histoire </h2> 
	<p> Fiches et cours</p>
	</a>
	
	<a href="https://www.stylo.social/landing" className={ styles.card }>
	<h2> Physique-Chimie </h2> 
	<p> Fiches </p>
	</a>


	
	


	</SignedIn>

	</div>
	</main>

	</Layout>

	</div>

  );
}