import useHandleLinkClick from './function/handleLinkClick';

export default function Hero() {
    const handleLinkClick = useHandleLinkClick();
    return (
        <header className="relative h-[730px] md:h-[865px] mt-16 xl:mt-20 flex flex-col justify-center md:justify-start overflow-hidden" id="Hero">
            <div className="fixed inset-0 -z-10">
                <img
                src="/hero.jpg"
                alt="Background"
                className="w-full h-full object-cover"
            />
            </div>
            
            <div className="vignette"></div>

            <div className="relative z-20 bg-white bg-opacity-80 p-8 rounded-md max-w-3xl mt- mx-4 m-12 md:m-36  lg:m-52 mb-10">
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-black mb-4">
                    Smart Agriculture
                </h1>
                <p className="text-sm sm:text-base md:text-2xl text-gray-700 mb-10 max-w-2xl">
                    Pantau alat IoT, analisis data penjualan, dan kelola aktivitas panen dalam satu platform terintegrasi.
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                    <button className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition" onClick={() => handleLinkClick('/signup1')}>
                        Gabung Sekarang
                    </button>
                    <button className="text-green-600 px-6 py-3 rounded-md border border-green-600 hover:bg-green-100 transition" onClick={() => handleLinkClick('/about')}>
                        Pelajari Selengkapnya →
                    </button>
                </div>
            </div>
            <style jsx>{`
                .vignette {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(to top, white, rgba(0,0,0,0.1)40%);
                    z-index: 10;
                }
            `}</style>
        </header>
    );
}
