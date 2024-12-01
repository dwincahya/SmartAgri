import Navbar from "../components/NavBar";
import Hero from "../components/Hero"
import Slogan from "../components/Slogan"
import VisionMission from "../components/VisionMission";
import Why from "../components/Why";
import Method from "../components/Method";
import News from "../components/News";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Solution from "../components/Solution";
import Partner from "../components/Partner";
import Review from "../components/Review";


export default function HomePage() {
    return (
        <>
            <Navbar />
            <Hero />
            <div className="bg-white py-10">
                <Slogan />
                <VisionMission />
                <Why />
                <Method />
                <Solution />
                <Partner />
                <Review />
                <News
                    title="Berita Tentang Kami"
                    subtitle="Temukan berbagai macam berita menarik tentang kami dalam membantu petani."
                    showDetailsLink={false}
                />
                <Contact />
                <Footer />
            </div>
        </>
    );
}
