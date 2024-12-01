import { icons } from '../assets/icons';

const imageFiles = import.meta.glob('../assets/image/news/*.{jpg,png}', { eager: true });
const images = Object.fromEntries(
    Object.entries(imageFiles).map(([key, value]) => [key.replace('../assets/image/news/', ''), value])
);

export default function NewsHero({ newsItem }) {
    if (!newsItem) return null;

    return (
        <div className="px-4 md:px-8 lg:px-10 py-6 md:py-12 lg:py-24 mt-16 bg-greenDark text-white">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center">
                <div className="text-center md:text-left">
                    <p className="text-sm md:text-base lg:text-lg xl:text-xl mb-3">Berita Kami</p>
                    <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-5xl font-bold mb-3 text-white">
                        {newsItem.title}
                    </h2>
                    <div className="flex items-center justify-center md:justify-start mb-">
                        <icons.CiLocationOn className="mr-2 text-lg md:text-xl lg:text-2xl" />
                        <p className="text-sm md:text-base lg:text-lg xl:text-xl font-Roboto text-white">
                            Lokasi
                        </p>
                    </div>
                    <p className="text-sm md:text-base lg:text-lg xl:text-md font-Roboto pl-7 text-white">
                        {newsItem.location}
                    </p>
                </div>
                <div className="flex justify-center md:justify-end">
                    <img
                        src={images[newsItem.imgSrc].default}
                        alt="Pertanian"
                        className="w-full max-w-xs md:max-w-sm lg:max-w-lg rounded-2xl shadow-lg"
                    />
                </div>
            </div>
        </div>
    );
}
