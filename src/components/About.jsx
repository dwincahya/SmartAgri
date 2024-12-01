export default function About() {
    return (
        <div className=" px-6 py-40 md:px-10 ">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-8 items-center lg:items-start">
                <div>
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4">Tentang Kami</h2>
                    <p className="text-base md:text-lg lg:text-xl font-Roboto text-justify">
                        Smart Agriculture adalah platform inovatif yang dirancang untuk membantu petani meningkatkan produktivitas dan efisiensi pertanian mereka.
                        Dengan teknologi canggih, platform ini menyediakan data real-time mengenai kondisi tanah, cuaca, dan tanaman, sehingga petani dapat mengambil
                        keputusan yang lebih tepat dan akurat.
                    </p>
                </div>
                <div className="flex justify-center lg:justify-end ">
                    <img
                        src="tentang.jpg"
                        alt="Pertanian"
                        className="w-full max-w- md:max-w-sm lg:max-w-md rounded-2xl shadow-lg"
                    />
                </div>
            </div>
        </div>
    );
}
