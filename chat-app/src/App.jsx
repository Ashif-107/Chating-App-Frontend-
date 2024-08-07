import Messagearea from "./components/Messagearea"
import Sidebar from "./components/Sidebar"
import Topbar from "./components/Topbar"

function App() {

  return (
    <>
       <div className="flex h-screen overflow-hidden">
            <Sidebar />
            <div className="flex-1 flex flex-col justify-between bg-[#F4F4F4]">
                <Topbar />
                <Messagearea />
            </div>
        </div>
    </>
  )
}

export default App
