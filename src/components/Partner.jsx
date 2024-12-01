import React, { useEffect, useRef, useState } from "react";
import partnerItems from "../assets/data/DataPartner";

const imageFiles = import.meta.glob('../assets/image/partner/*.{jpg,png}', { eager: true });
const images = Object.fromEntries(
    Object.entries(imageFiles).map(([key, value]) => [key.replace('../assets/image/partner/', ''), value])
);

export default function Partner() {
    const scrollerRef = useRef(null);
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        if (scrollerRef.current && !isReady) {
            const scrollerContent = scrollerRef.current.innerHTML;
            scrollerRef.current.innerHTML += scrollerContent;
            setIsReady(true);
        }
    }, [isReady]);

    return (
        <div className="py-24 text-center overflow-hidden">
            <h2 className="text-4xl md:text-5xl font-bold mb-20">Mitra Kerja Sama Kami</h2>
            <div className="relative w-full overflow-hidden">
                <div className={`flex space-x-10 ${isReady ? 'animate-scroll' : ''} w-max`} ref={scrollerRef}>
                    {partnerItems.map((item, i) => (
                        <div key={i} className="flex flex-col items-center justify-center p-4 md:p-5 rounded-lg sm:w-96">
                            <div className="w-24 md:w-32 lg:w-40 h-auto mb-4">
                                {item.image && <img src={images[item.image].default} alt={`Partner ${i}`} className="w-full h-full object-cover" />}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50.47%);
                    }
                }
                .animate-scroll {
                    animation: scroll 15s linear infinite;
                }
            `}</style>
        </div>
    );
}
