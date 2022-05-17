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
import Techstack from "../components/Techstack";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Welcome to buggyless!</title>
                <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
                <meta name="Description" content="Buggyless is Srilanka's leading digital solutions company. We value quality, creativity and problem-solving to grow your business. Our specialized services answer your most demanding requirements with precision and innovative solutions that deliver relentless growth to your brand." />
            </Head>
            <Navbar />
            <Welcome />
            <About />
            <DevProcess />
            <Services />
            <Techstack />
            <ContactUs />
            <Gurantee />
            <Newsletter />
            <Footer />
        </div>
    );
}
