import useHandleLinkClick from './function/handleLinkClick';

export default function Join() {
    const handleLinkClick = useHandleLinkClick();

    return (
        <div className="py-0 lg:p-20 bg-slate-100">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10 items-center bg-[#12372A] lg:rounded-3xl overflow-hidden">
                
                <div className="pt-20 pb-10 m-5 md:pl-20">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 md:mb-10 text-white">
                        Gabung Bersama Kami Tingkatkan Pertanian Anda
                    </h2>
                    <div className="flex flex-row gap-5">
                        <button className="bg-white text-[#12372A] font-bold px-6 py-3 rounded-xl hover:bg-[#318067] hover:scale-105 transition" onClick={() => handleLinkClick('/signup1')}>
                            Gabung Sekarang
                        </button>
                        <button 
                            className="text-white font-bold px-6 py-3 rounded-xl border border-white hover:bg-[#c9dad4] hover:scale-105 hover:text-black transition" 
                            onClick={() => handleLinkClick('/', 'Service-Section')}>
                            Pelajari Layanan
                        </button>
                    </div>
                </div>

                <div className="flex justify-evenly items-center lg:pt-20 lg:pr-10">
                    <div className="w-full h-80 lg:w-8/12 lg:h-72">
                        <img
                            src="/about.jpg"
                            alt="Pertanian"
                            className="object-cover w-full h-full lg:rounded-t-3xl"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
