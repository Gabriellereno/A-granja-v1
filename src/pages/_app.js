import '@/styles/globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { GlobalStorage } from '@/components/context/GlobalContext';
import { CartStorage } from '@/components/context/CartContext';

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStorage>
        <CartStorage>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </CartStorage>
      </GlobalStorage>
    </>
  );
}
