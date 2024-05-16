import AboutUs from "./AboutUs";
import Banner from "./Banner";
import Feature from "./Feature";
import {useLoaderData} from "react-router-dom"
import Posts from "./Posts";



const Home = () => {
    const needpost = useLoaderData()
    console.log(needpost);
    return (
        <div>
            <Banner />
            <AboutUs />
            <Feature />
            <Posts needpost={needpost} />
            
           
            
            
            
        </div>
    );
};

export default Home;