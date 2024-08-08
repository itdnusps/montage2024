
import Navbar from "../ui/navbar";
import '@/app/main.css'
import Winners from "../ui/winners";


export default function Page() {
  return (
    <div className="mainbkgrd">
      <Navbar />
      Winners will be announced in due time!
      {/* Trivial change for test */}
      {/* <Winners /> */}
    </div>
  );}
