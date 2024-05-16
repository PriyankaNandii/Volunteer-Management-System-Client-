
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Outlet} from 'react-router-dom'


const Root = () => {
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