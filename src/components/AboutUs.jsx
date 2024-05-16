import aboutus from '../assets/pexels-photo-6348129.webp'

const AboutUs = () => {
    return (
        <div>
           <section className=" md:py-10 py-4">
    <div className="max-w-full px-2 py-2 mx-auto">
        <p className="text-2xl font-medium dark:text-white text-center">About Us</p>

        <h1 className="mt-2 text-4xl font-semibold  capitalize lg:text-3xl text-gray-500 text-center">
            What We saying
        </h1>

        <main className="relative z-20 w-full mt-5 md:flex md:items-center xl:mt-8">
            <div className="absolute w-full border border-yellow-600 -z-10 md:h-96 rounded-2xl"></div>
            
            <div className="w-full p-6  md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-6 md:justify-evenly">
                <img className="h-24 w-24 md:mx-6 rounded-sm object-cover shadow-md md:h-[12rem] md:w-40 lg:h-[36rem] lg:w-[26rem] md:rounded-2xl" src={aboutus} />
                
                <div className="mt-2 md:mx-6">
                    {/* <div>
                        <p className="text-xl font-medium tracking-tight text-white">Ema Watson</p>
                        <p className="text-blue-200 ">Marketing Manager at Stech</p>
                    </div> */}

                    <p className=" text-lg leading-relaxed text-gray-500 md:text-2xl"> Our mission is to connect volunteers with causes they are passionate about, creating positive change in communities worldwide. By joining our platform, you become part of a global network of like-minded individuals committed to making the world a better place.</p>
                    
  
                </div>
            </div>
        </main>
    </div>
</section>
        </div>
    );
};

export default AboutUs;