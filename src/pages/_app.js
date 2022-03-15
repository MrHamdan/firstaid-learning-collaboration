import Navbar from 'components/Shared/Navbar';
import AuthProvider from 'Context/AuthProvider';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AuthProvider>
        <Navbar />
        <Component {...pageProps} />
      </AuthProvider>
    </>
  );
}

export default MyApp
