import { icons } from '../assets/icons';

const serviceData = [
    {
        Icon: icons.LuMonitorCheck,
        title: "Sistem Monitoring",
        description: "Membantu memantau kesehatan lahan dan perkembangan tanaman secara digital",
    },
    {
        Icon: icons.FaChartBar,
        title: "Statistik Hasil",
        description: "Membantu memantau statistik penjualan dan statistik hasil panen yang sudah ada",
    },
    {
        Icon: icons.BsHouseGearFill,
        title: "Management",
        description: "Membantu memanagemen penggunaan pupuk dan bibit",
    }
];

export default function Why() {
    return (
        <div className="max-w-7xl mx-auto text-center my-20 px-5">
            <h2 className="text-4xl md:text-5xl font-bold mb-16">Mengapa Harus Smart Agriculture?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 place-items-center">
                {serviceData.map((service, index) => (
                    <div key={index} className="flex flex-col items-center text-center p-10 max-w-sm mx-auto rounded-lg shadow-lg">
                        <service.Icon className="w-auto h-16 mb-4 text-green-600" />
                        <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                        <p className="text-gray-600">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
