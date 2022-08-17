import styles from "../styles/Header.module.css";
import Image from "next/image";
import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";


// Header component using <SignedIn> & <SignedOut>.
//
// The SignedIn and SignedOut components are used to control rendering depending
// on whether or not a visitor is signed in.
//
// https://docs.clerk.dev/frontend/react/signedin-and-signedout
const Header = () => (
  <header className={styles.header}>
    <div className={styles.left}>
      <Link href="/">
        <a className={styles.logo}>
          <Image src="/logo.svg" width="40" height="40" alt="Logo" />
          <span className={styles.appName}>Stylo.Social</span>
        </a>
      </Link>
    </div>
    <div className={styles.right}>
      <SignedOut>
        <Link href="/sign-in">Se connecter</Link>
      </SignedOut>
      <SignedIn>
        <UserButton userProfileURL="/user" afterSignOutAll="/" afterSignOutOneUrl="/" />
      </SignedIn>
    </div>
  </header>
);

export default Header;
