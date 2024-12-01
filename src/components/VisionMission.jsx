export default function VisionMission() {
    return (
        <div className="max-w-6xl mx-auto text-center my-20 px-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 sm:px-4 md:px-8 lg:px-16">
                <div className="flex flex-col items-center text-justify bg-greenDark p-10 lg:p-10 rounded-3xl shadow-lg shadow-green-900">
                    <h3 className="text-3xl text-white font-semibold mb-1">VISI</h3>
                    <p className="text-white text-justify">
                        Menjadi platform teknologi pertanian terdepan yang mendukung keberlanjutan dan efisiensi dalam pertanian melalui inovasi digital.
                    </p>
                </div>
                <div className="flex flex-col items-center text-justify bg-greenDark p-10 lg:p-10 rounded-3xl shadow-lg shadow-green-900">
                    <h3 className="text-3xl text-white font-semibold mb-1">MISI</h3>
                    <p className="text-white text-justify">
                        Meningkatkan produktivitas hasil pertanian,
                        Meningkatkan kinerja petani,
                        Membantu para petani dengan menyediakan pertanian yang canggih.
                    </p>
                </div>
            </div>
        </div>
    );
}
