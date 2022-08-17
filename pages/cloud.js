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
	
	<div>
	<div>
	
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
	<div  >
	<SignedIn >

	

	
	<iframe src="https://cloud.stylo.social/index.php/s/RCrzWD6DdKY63kC" frameBorder="0" height="440px" width="100%"></iframe> 
	

	</SignedIn>

	</div>
	</main>

	</Layout>

	</div>
	</div>

  );
}