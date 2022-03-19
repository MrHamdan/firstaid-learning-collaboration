import { StylesProvider } from "@mui/styles";
import Footer from "components/Shared/Footer";
import Navbar from "components/Shared/Navbar";
import AuthProvider from "Context/AuthProvider";
import { wrapper } from "Redux/store";
import "../styles/globals.css";
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

function MyApp({ Component, pageProps }) {
    const stripePromise = loadStripe('pk_test_51KVpuCIKMgAbdTMPUw8kiLqO37bzqZ6cQmmERtdlFqeDNmD8ddI93NfZ2rrdIvY5qdmKedq83vagoJKpIXZovuzv00Mf8M56uZ');
    return (
        <>
            <StylesProvider injectFirst>
                <AuthProvider>
                    <Elements stripe={stripePromise}>
                        <Navbar />
                        <Component {...pageProps} />
                        <Footer />
                    </Elements>
                </AuthProvider>
            </StylesProvider>
        </>
    );
}

export default wrapper.withRedux(MyApp);
