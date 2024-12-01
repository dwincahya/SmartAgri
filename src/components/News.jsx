import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import newsItems from '../assets/data/DataNews';

const imageFiles = import.meta.glob('../assets/image/news/*.{jpg,png}', { eager: true });
const images = Object.fromEntries(
    Object.entries(imageFiles).map(([key, value]) => [key.replace('../assets/image/news/', ''), value])
);

export default function NewsSection({ title, subtitle, showDetailsLink }) {
    const scrollRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!isDragging) return;
            const x = e.pageX - scrollRef.current.offsetLeft;
            const walk = (x - startX); 
            scrollRef.current.scrollLeft = scrollLeft - walk;
        };

        const handleMouseUp = () => {
            if (!isDragging) return;
            setIsDragging(false);
            document.body.style.userSelect = 'auto';
            scrollRef.current.style.pointerEvents = 'auto';

            scrollRef.current.style.scrollBehavior = 'smooth';
        };

        if (isDragging) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleMouseUp);
        } else {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging, startX, scrollLeft]);

    const onMouseDown = (e) => {
        if (e.target.tagName === 'A') return;
        setIsDragging(true);
        setStartX(e.pageX - scrollRef.current.offsetLeft);
        setScrollLeft(scrollRef.current.scrollLeft);

        scrollRef.current.style.scrollBehavior = 'auto';
        
        document.body.style.userSelect = 'none';
        scrollRef.current.style.pointerEvents = 'none';
    };

    const scroll = (direction) => {
        const scrollAmount = 500;
        const container = scrollRef.current;
        if (direction === 'left') {
            container.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth',
            });
        } else if (direction === 'right') {
            container.scrollBy({
                left: scrollAmount,
                behavior: 'smooth',
            });
        }
    };

    return (
        <section className="scroll-mt-20" id="News-Section">
            <div className="bg-greenDark py-10 text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-2 ml-5 lg:ml-10">{title}</h2>
                <p className="text-md md:text-xl mb-6 ml-5 lg:ml-10">{subtitle}</p>
                <div className="relative">
                    <div
                        ref={scrollRef}
                        className="scroll-container flex overflow-x-auto space-x-6 cursor-pointer"
                        onMouseDown={onMouseDown}
                    >
                        {newsItems.map(item => (
                            <div className="flex-shrink-0 bg-white text-black rounded-lg overflow-hidden shadow-lg w-72 sm:w-80 lg:w-96 xl:w-[28rem] custom-lg:w-[32rem] flex flex-col justify-between">
                            <img
                                src={images[item.imgSrc].default}
                                alt={item.imgSrc}
                                className="h-48 lg:h-52 w-full object-cover"
                            />
                            <div className="px-4 pt-4 flex-grow">
                                <span className="block text-greenDark text-sm mb-2">{item.location}</span>
                                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                            </div>
                            <div className="px-4 pb-4">
                                <Link to={`/news/${item.id}`} className="text-blue-500 hover:underline">
                                    Baca Selengkapnya disini
                                </Link>
                            </div>
                        </div>
                        
                        ))}
                    </div>

                    <button
                        onClick={() => scroll('left')}
                        className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-greenDark bg-opacity-40 hover:bg-opacity-75 text-white p-2 text-7xl rounded-full h-3/4"
                    >
                        &#8249;
                    </button>
                    <button
                        onClick={() => scroll('right')}
                        className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-greenDark bg-opacity-40 hover:bg-opacity-75 text-white p-2 text-7xl rounded-full h-3/4"
                    >
                        &#8250;
                    </button>
                </div>
            </div>

            <style jsx>{`
                .scroll-container {
                    scrollbar-width: thin;
                    scrollbar-color: rgba(0, 0, 0, 0.0) transparent;
                    scroll-behavior: smooth; 
                    padding-left: 2rem; 
                    padding-right: 2rem; 
                }
            `}</style>
        </section>
    );
}
