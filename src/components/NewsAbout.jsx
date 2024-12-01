export default function NewsAbout({ newsItem }) {
    if (!newsItem || !newsItem.about) return null;

    return (
        <div className="max-w-6xl mx-auto text-center my-20 px-5">
            <h2 className="text-4xl md:text-5xl font-bold mb-16">Tentang Perusahaan</h2>
            {newsItem.about.map((item, index) => (
                <div
                    key={index}
                    className={`flex flex-col md:flex-row gap-5 lg:gap-10 items-center my-20 p-2 sm:p-0 rounded-lg ${
                        item.reverse ? 'sm:order-2' : ''
                    }`}
                >
                    <div className={`flex ${item.reverse ? 'sm:order-2' : ''} justify-center w-full sm:w-[50%]`}>
                        <img
                            src={item.imgSrc}
                            alt={item.title}
                            className="rounded-t-lg sm:rounded-lg shadow-lg w-full"
                        />
                    </div>
                    <div className={`text-left ${item.reverse ? 'sm:order-1' : ''} w-full sm:w-[50%]`}>
                        <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                        <p className="font-Roboto text-justify">{item.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
