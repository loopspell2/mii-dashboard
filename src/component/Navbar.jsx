import { useState } from "react";
import { FaBell } from "react-icons/fa";

export function Navbar() {

    const [activeTab, setActiveTab] = useState("Startup");
    const tabs = [
        "Startup", "Mentor", "Facility", "Office", "Finance & Funding",
        "Event", "Learning & Development", "Report & Analytics"
    ];

    return (<>
        <div className="w-full h-16 bg-gray-900 text-white flex items-center justify-between px-6 py-3">
            <div className="flex space-x-6">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        className={`text-lg ${activeTab === tab ? "text-blue-500 border-b-2 border-blue-500" : "text-gray-400"}`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>
            <div className="flex items-center space-x-4">
                <img src="./icons/bell.svg" alt="B" />
                <img
                    src="https://via.placeholder.com/30"
                    alt="User Avatar"
                    className="w-8 h-8 rounded-full"
                />
            </div>
        </div>
    </>)
}