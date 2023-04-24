import '@/styles/globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { GlobalStorage } from '@/components/context/GlobalContext';

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStorage>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </GlobalStorage>
    </>
  );
}
