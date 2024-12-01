export default function About() {
    return (
        <div className="px-4 md:px-8 lg:px-10 py-6 md:py-12 lg:py-40 mt-16 bg-[#12372A]">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 items-center">
                <div className="text-center md:text-left">
                    <h2 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 text-white">
                        Smart Agriculture
                    </h2>
                    <p className="text-sm md:text-base lg:text-lg xl:text-xl font-Roboto text-white">
                        Kami hadir membantu para petani untuk
                        lebih inovatif dan produktif.
                    </p>
                </div>
                <div className="flex justify-center md:justify-end">
                    <img
                        src="/about.jpg"
                        alt="Pertanian"
                        className="w-full max-w-xs md:max-w-sm lg:max-w-lg rounded shadow-lg"
                    />
                </div>
            </div>
        </div>
    );
}
