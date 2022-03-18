import { StylesProvider } from "@mui/styles";
import Footer from "components/Shared/Footer";
import Navbar from "components/Shared/Navbar";
import AuthProvider from "Context/AuthProvider";
import { wrapper } from "Redux/store";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <StylesProvider injectFirst>
                <AuthProvider>
                    <Navbar />
                    <Component {...pageProps} />
                    <Footer />
                </AuthProvider>
            </StylesProvider>
        </>
    );
}

export default wrapper.withRedux(MyApp);
