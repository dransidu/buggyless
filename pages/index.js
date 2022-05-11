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
            <Navbar />
            <Welcome />
            <About />
            <DevProcess />
            <Services />
            <ContactUs />
            <Gurantee />
            <Newsletter/>
            <Footer/>
        </div>
    );
}
