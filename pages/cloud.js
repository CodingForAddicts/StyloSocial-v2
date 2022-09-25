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
	 <Layout>
	 
	  <main>
	  <h1 className={styles.title}>
		Cloud </a>
	  </h1>
		<div>
		  <iframe allowtransparency = "true" src="https://drive.google.com/embeddedfolderview?id=16PoamPSJeksQWkiuPtgHl9IKgZhvVPpe#grid" frameBorder="0"></iframe>  
		</div>
		
	
	  </main>
	  </Layout>
	</div>

  );
}