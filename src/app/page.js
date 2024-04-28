import Dasboard from "@/app/components/Dasboard";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { ApiProvider } from "./components/Context"; 
import Sidebar from "./components/Sidebar"
export default function Home() {
  return (
    <div>
    <ApiProvider>
       <Header />
       <Dasboard/>
       <Sidebar/>
       <Footer/>
    </ApiProvider>
      
    </div>
  );
}
