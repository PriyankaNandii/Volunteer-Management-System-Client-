
import { useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Outlet} from 'react-router-dom'
import { useLocation } from 'react-router-dom';


const Root = () => {
    const location = useLocation();
    console.log(location);
   
    useEffect(() =>{
       if (location.pathname === '/'){
           document.title = `SeveSync - Home`
       }else{
           document.title= `ServeSync ${location.pathname.replace("/", "- ")}`
       }if (location.state){
           document.title = location.state
       }
       
    },[location.pathname, location.state])
    return (
        <div className="font-sedan">
             <Navbar />
           
             <div className="min-h-screen">
           <Outlet/>
           </div>
           <Footer />
        </div>
    );
};

export default Root;