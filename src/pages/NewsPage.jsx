import { useParams } from 'react-router-dom';
import Navbar from "../components/NavBar";
import newsItems from '../assets/data/DataNews';
import NewsHero from '../components/NewsHero';
import Footer from "../components/Footer";
import NewsQuotes from '../components/NewsQuotes';
import NewsAbout from '../components/NewsAbout';
import News from "../components/News";
import Join from '../components/Join';

export default function NewsPage() {
    const { id } = useParams();  
    const newsItem = newsItems.find(item => item.id === parseInt(id));

    if (!newsItem) {
        return <p>Berita tidak ditemukan!</p>;
    }

    return (
        <>
            <Navbar/>
            <NewsHero newsItem={newsItem} />
            <NewsQuotes newsItem={newsItem} />
            <NewsAbout  newsItem={newsItem} />
            <News
                title="Baca Berita Lainnya" 
                subtitle="Jelajahi berita menarik lainnya yang berkaitan dengan kami." 
                showDetailsLink={true} 
            />
            <Join />
            <Footer/>
        </>
    );
}
