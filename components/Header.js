import styles from "../styles/Header.module.css";
import Image from "next/image";
import Link from "next/link";
import {
  ClerkProvider,
  RedirectToSignIn,
  SignedIn,
  SignedOut,
  UserProfile
} from "@clerk/nextjs";


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
      <UserProfile />
    </div>
  </header>
);

export default Header;
