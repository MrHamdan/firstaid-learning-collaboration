import Footer from "components/Shared/Footer";
import Navbar from "components/Shared/Navbar";
import AuthProvider from "Context/AuthProvider";
import { wrapper } from "Redux/store";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
 return (
  <>
   <AuthProvider>
    <Navbar />
    <Component {...pageProps} />
    <Footer />
   </AuthProvider>
  </>
 );
}

export default wrapper.withRedux(MyApp);
