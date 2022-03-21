import Payment from "components/Payment/Payment";
import Head from "next/head";

const index = () => {
    return (
        <>
            <Head>
                <title>Payment</title>
                <link rel="shortcut icon" href="favicon2.ico"></link>
            </Head>
            <Payment />
        </>
    );
}
export default index;