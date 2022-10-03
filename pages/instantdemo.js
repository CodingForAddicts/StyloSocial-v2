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

	<h1 className={styles.title}>
	  Projet cloud de Antoine pour le CVL </a>
	</h1>

	<div className = { styles.grid } >

	<a href="https://www.stylo.social/espagnol" className={ styles.card }>
	<h2> Espagnol demo </h2> 
	<p> fiche numérique DEMO </p>
	</a>
	
	<a href="https://www.craft.do/s/cgv8JNd88z4hin" className={ styles.card }>
	<h2> Histoire </h2> 
	<p> cours DEMO</p>
	</a>
	
	<a className={ styles.card }>
	<h2> INFOS </h2> 
	<p> Si vous m&apos;élisez, toutes les matières seront disponibles ! que ce soit les spés (pour les 1ères ou les terminales) ou les options (Latin, grec...)</p>
	</a>

	

	</div>
	</main>

	</Layout>

	</div>

  );
}