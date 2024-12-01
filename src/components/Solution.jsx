import { icons } from '../assets/icons';

const SolutionData = [
    {
        Icon: icons.RiDashboardFill,
        title: "Dashboard Intuitif",
        description: "Dashboard yang memudahkan dalam memonitoring beberapa lahan dalam dashboard yang simpel",
    },
    {
        Icon: icons.LiaLayerGroupSolid,
        title: "Land Grouping",
        description: "Kelompokkan lahan anda menjadi sebuah kelompok yang memudahkan anda dalam memantau",
    },
    {
        Icon: icons.LuBrainCircuit,
        title: "IoT Integration",
        description: "Pantau kesehatan lahan dan kebun anda secara real-time tanpa ada jeda",
    },
];

export default function Solution() {
    return (
        <div className="px-4 md:px-8 lg:px-10 py-4 mt-16 bg-greenDark text-white">
            <div className="max-w-7xl mx-auto text-center my-20">
                <h1 className="mb-16 text-4xl md:text-5xl font-bold">
                    Solusi cerdas yang kami tawarkan
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 xl:gap-20 place-items-center">
                    {SolutionData.map((solution, index) => (
                        <div key={index} className="flex flex-col items-start text-center lg:p-10 max-w-md lg:max-w-sm">
                            <solution.Icon className="w-auto h-16 mb-4" />
                            <h3 className="text-2xl font-semibold mb-4 text-start">{solution.title}</h3>
                            <p className="text-white text-justify">{solution.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
