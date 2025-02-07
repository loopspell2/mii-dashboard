import { FaUsers, FaBriefcase } from "react-icons/fa";
import { LineChart, BarChart } from "lucide-react";
import { PieChart } from "lucide-react";

export function Dashboard() {

    const data = [
        { icon: <FaUsers className="text-blue-500 text-xl" />, label: "Employees", value: "1,257" },
        { icon: <FaBriefcase className="text-blue-500 text-xl" />, label: "Projects", value: "45" },
        { icon: <FaBriefcase className="text-blue-500 text-xl" />, label: "Projects", value: "45" },
        { icon: <FaBriefcase className="text-blue-500 text-xl" />, label: "Projects", value: "45" },
        { icon: <FaBriefcase className="text-blue-500 text-xl" />, label: "Projects", value: "45" },
    ];

    return (<>
        <div>

            <div className="flex items-center justify-around p-6 bg-gray-800">
                {data.map((item, index) => (
                    <div key={index} className="bg-black p-4 rounded-lg w-40 text-white flex flex-col items-center">
                        {item.icon}
                        <p className="text-gray-400 text-sm">{item.label}</p>
                        <p className="text-xl font-bold">{item.value}</p>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-2 gap-4 px-4 bg-gray-800">
                {/* Revenue Updates Card */}
                <div className="bg-black p-4 rounded-2xl shadow-lg">
                    <h2 className="text-white font-semibold mb-4">Revenue Updates</h2>
                    <div className="flex justify-center items-center bg-gray-800 rounded-xl h-80">
                        <LineChart size={48} className="text-blue-500" />
                    </div>
                </div>

                {/* Weekly Stats Card */}
                <div className="bg-black p-4 rounded-2xl shadow-lg">
                    <h2 className="text-white font-semibold mb-4">Weekly Stats</h2>
                    <div className="flex justify-center items-center h-80 bg-gray-800 rounded-xl">
                        <BarChart size={48} className="text-blue-500" />
                    </div>
                </div>
            </div>

            <div className="flex gap-4 p-4 bg-gray-800 text-white">
                {/* Best Selling Products */}
                <div className="w-1/3 bg-black p-4 rounded-lg h-72">
                    <h2 className="font-semibold mb-4">Best Selling Products</h2>
                    <div className="flex items-center gap-2">
                        <div className="bg-gray-800 p-3 rounded-full">
                            <span className="text-blue-500">📦</span>
                        </div>
                        <div className="w-full">
                            <p>Product A</p>
                            <div className="w-full bg-gray-700 h-2 rounded-full mt-2">
                                <div className="bg-blue-500 h-2 rounded-full" style={{ width: "60%" }}></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Monthly Earnings */}
                <div className="w-1/3 bg-black p-4 rounded-lg flex items-center justify-center relative">
                    <h2 className="font-semibold mb-4 absolute top-4 left-4">Monthly Earnings</h2>
                    <div className="bg-gray-800 h-[80%] w-full rounded-md flex items-center justify-center">

                    <PieChart className="w-12 h-12 text-blue-500" />
                    </div>
                </div>

                {/* Yearly Breakup */}
                <div className="w-1/3 bg-black p-4 rounded-lg">
                    <h2 className="font-semibold mb-4">Yearly Breakup</h2>
                    <div className="grid grid-cols-2 gap-4 text-center">
                        <div>
                            <span className="text-blue-500 text-lg font-bold bg-gray-800 rounded-3xl px-4 py-2">75%</span>
                            <p className="text-gray-400 text-sm mt-4">Progress</p>
                        </div>
                        <div>
                            <span className="text-blue-500 text-lg font-bold bg-gray-800 rounded-3xl px-4 py-2">82%</span>
                            <p className="text-gray-400 text-sm mt-4">Success</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </>)
}
