// pages/_app.tsx
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // Check if the current URL starts with '/auth' 
  // (This handles /auth/login, /auth/register, etc.)
  const isAuthPage = router.pathname.startsWith('/auth');

  return (
    <>
      {/* Only show Header if the user is NOT on an auth page */}
      {!isAuthPage && <Header />}
      
      <main>
        <Component {...pageProps} />
      </main>
      
      {/* Only show Footer if the user is NOT on an auth page */}
      {!isAuthPage && <Footer />}
    </>
  );
}
