import "../styles/globals.css";
import { useEffect } from "react";
import Image from 'next/image'
import Layout from '../components/Layout'
import Head from 'next/head'
import Script from 'next/script'
import Link from 'next/link'
import { ClerkProvider } from '@clerk/nextjs';
import { useRouter } from 'next/router'

/**
 * List pages you want to be publicly accessible, or leave empty if
 * every page requires authentication. Use this naming strategy:
 *  "/"              for pages/index.js
 *  "/foo"           for pages/foo/index.js
 *  "/foo/bar"       for pages/foo/bar.js
 *  "/foo/[...bar]"  for pages/foo/[...bar].js
 */
const publicPages = ['/', '/sign-in/[[...index]]', '/sign-up/[[...index]]']


function MyApp({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
    const threeScript = document.createElement("script");
    threeScript.setAttribute("id", "threeScript");
    threeScript.setAttribute(
      "src",
      "https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"
    );
    document.getElementsByTagName("head")[0].appendChild(threeScript);
    return () => {
      if (threeScript) {
        threeScript.remove();
      }
    };
  }, []);
  return (
    <ClerkProvider {...pageProps} >
    <Head>
      <link
        href="https://cdn.jsdelivr.net/npm/prismjs@1/themes/prism.css"
        rel="stylesheet"
      />
    </Head>
    <Script src="https://cdn.jsdelivr.net/npm/prismjs@1/components/prism-core.min.js" />
    <Script src="https://cdn.jsdelivr.net/npm/prismjs@1/plugins/autoloader/prism-autoloader.min.js" />
    
      {publicPages.includes(router.pathname) ? (
        <Component {...pageProps} />
      ) : (
        <>
          <SignedIn>
            <Component {...pageProps} />
          </SignedIn>
          <SignedOut>
            <main>
              <p>
                Please{' '}
                <Link href="/sign-in">
                  <a>Connectez-vous</a>
                </Link>{' '}
                pour acceder à cette page.
              </p>
            </main>
          </SignedOut>
        </>
      )}
    
    </ClerkProvider>
    );
}

export default MyApp;