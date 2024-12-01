const methodData = [
    {
        id: 1,
        title: "Monitoring Kesehatan Lahan",
        imgSrc: "/dashboardlahan.png",
        description: "Fitur monitoring kesehatan lahan pada platform Smart Agriculture memungkinkan petani untuk memantau kondisi tanah secara real-time menggunakan sensor canggih dan data analitik.",
        reverse: false
    },
    {
        id: 2,
        title: "Managemen Bibit & Pupuk",
        imgSrc: "/managemenpupuk.png    ",
        description: "Fitur manajemen bibit dan pupuk pada platform Smart Agriculture dirancang untuk memudahkan petani dalam perencanaan dan pengelolaan bibit serta pupuk secara efisien.",
        reverse: true
    },
    {
        id: 3,
        title: "Tabel Produksi dan Penjualan",
        imgSrc: "/datapenjualan.png",
        description: "Tabel dashoard yang membantu para petani dalam memantau hasil produksi dan penjualan yang dihasilkan oleh petani",
        reverse: false
    }
];

export default function Method() {
    return (
        <section className="scroll-mt-20 py-1" id="Service-Section">
            <div className="max-w-6xl mx-auto text-center my-20 px-5">
            <h2 className="text-4xl md:text-5xl font-bold mb-16">Layanan Yang Ditawarkan</h2>
            {methodData.map((item) => (
                <div
                    key={item.id}
                    className="flex flex-col sm:flex-row gap-5 lg:gap-8 items-center my-16 shadow-lg sm:shadow-none sm:bg-transparent p-5 sm:p-0 rounded-lg"
                >
                    <div className={`flex ${item.reverse ? 'sm:order-2' : ''} justify-center w-full sm:w-[53%]`}>
                        <img src={item.imgSrc} alt={item.title} className="rounded-lg sm:rounded-lg shadow-lg w-full" />
                    </div>
                    <div className={`text-left ${item.reverse ? 'sm:order-1' : ''} w-full sm:w-[47%]`}>
                        <h2 className="text-2xl md:text-3xl font-bold mb-0 sm:mb-2">{item.title}</h2>
                        <p className=" text-justify">{item.description}</p>
                    </div>
                </div>
                ))}
            </div>
        </section>
    );
}
