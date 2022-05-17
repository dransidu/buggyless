import Head from "next/head";
import Navbar from "../components/Navbar";
import Welcome from "../components/Welcome";
import About from "../components/About";
import DevProcess from "../components/DevProcess";
import Gurantee from "../components/Gurantee";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import Services from "../components/Services";
import ContactUs from "../components/ContactUs";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Welcome to buggyless!</title>
                <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
                <meta name="Description" content="Buggyless is a top web design agency and software development company with a large pool of software developers available for dedicated and fixed time/cost projects." />
            </Head>
            <Navbar />
            <Welcome />
            <About />
            <DevProcess />
            <Services />
            <ContactUs />
            <Gurantee />
            <Newsletter />
            <Footer />
        </div>
    );
}
