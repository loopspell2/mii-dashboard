import { Dashboard } from "./component/Dashboard";
import { Navbar } from "./component/Navbar";
import Sidebar from "./component/SideBar";


function App() {


  return (<>
    <div className="flex ">
      <div className="">
        <Sidebar />
      </div>
      <div className="w-full">
        <div>
          <Navbar />
        </div>
        <div className="h-full">
          <Dashboard />
        </div>
      </div>
    </div>
  </>);
}

export default App;
