import Image from "next/image";
import Link from "next/link";
import Dasboard from "@/app/components/Dasboard";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { ApiProvider } from "./components/Apicontext"; 
import Sidenavbar from "./components/Sidenavbar"
export default function Home() {
  return (
    <div >
    <ApiProvider>
       <Navbar />
       <Dasboard/>
       <Sidenavbar/>
       <Footer/>
    </ApiProvider>
      
    </div>
  );
}
