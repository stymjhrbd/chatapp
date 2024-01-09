import ChatBox from "./components/ui/Chatbox";
import Sidebar from "./components/ui/sideBar";

export default function Home() {
  return (<div className="flex mt-18 w h-auto bg-[#26A69A]">

    <Sidebar />
    <ChatBox />
  </div>

  )
}