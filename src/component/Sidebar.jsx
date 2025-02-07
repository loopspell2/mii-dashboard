

export default function Sidebar() {
    return (<>
        <div className="w-64 h-screen bg-black text-white flex flex-col p-4">
      <div className="flex items-center justify-center mb-6">
        <img src="./icons/logo.svg" alt="logo" />
      </div>
      <div className="space-y-2">
        <button className="w-full flex items-center space-x-3 p-3 bg-blue-600 rounded-lg">
        <img src="./icons/home.svg" alt="H" />
          <span>Startup</span>
        </button>
        <div className="pl-6 space-y-1 text-gray-400">
          <p className="hover:text-white cursor-pointer">Admin</p>
          <p className="hover:text-white cursor-pointer">Delete</p>
          <p className="hover:text-white cursor-pointer">Update</p>
        </div>
        <button className="w-full flex items-center space-x-3 p-3 hover:bg-gray-700 rounded-lg">
        <img src="./icons/incubationstatus.svg" alt="IS" />
          <span>Incubation Status</span>
        </button>
        <button className="w-full flex items-center space-x-3 p-3 hover:bg-gray-700 rounded-lg">
          <img src="./icons/milestone.svg" alt="MS" />
          <span>Milestone</span>
        </button>
      </div>
    </div>
    </>)
}