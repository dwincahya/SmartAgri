import React from 'react';
import Navbar from '../components/NavBar';
import About from '../components/About';
import News from "../components/News";
import Footer from "../components/Footer";
import AboutHero from '../components/AboutHero';
import Join from '../components/Join';
import Contact from '../components/Contact';

export default function AboutPage() {
    return (
        <>
            <Navbar />
            <AboutHero />
            <About />
            <News 
                title="Berita Tentang Kami" 
                subtitle="Temukan berbagai macam berita menarik tentang kami dalam membantu petani." 
                showDetailsLink={false} 
            />
            <Join />
            <Contact />
            <Footer />
        </>
    );
}
