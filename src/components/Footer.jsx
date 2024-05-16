const Footer = () => {
    return (
        <div>
            <footer className="bg-[#aa7446] text-white ">
                <div className="container px-6 py-12 mx-auto">
                    <div className="md:flex md:-mx-3 md:items-center md:justify-between">
                        <h1 className="text-xl font-semibold tracking-tight md:mx-3 xl:text-2xl dark:text-white">Subscribe our newsletter to get update.</h1>

                        <div className="mt-6 md:mx-3 shrink-0 md:mt-0 md:w-auto">
                            <a href="#" className="inline-flex items-center justify-center w-full px-4 py-2 text-sm text-black duration-300 rounded-lg gap-x-3 bg-white hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                                <span>Sign Up Now</span>

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700" />

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        <div>
                            <p className="font-semibold  dark:text-white">Quick Link</p>

                            <div className="flex flex-col items-start mt-5 space-y-2">
                                <a href="#" className=" transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Home</a>
                                <a href="#" className=" transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Add Volunteer</a>
                              
                            </div>
                        </div>

                        <div>
                            <p className="font-semibold  dark:text-white">Be Member</p>

                            <div className="flex flex-col items-start mt-5 space-y-2">
                                <a href="#" className=" transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Login</a>
                                <a href="#" className=" transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Register</a>
                              
                            </div>
                        </div>

                        <div>
                            <p className="font-semibold  dark:text-white">Services</p>

                            <div className="flex flex-col items-start mt-5 space-y-2">
                                <a href="#" className=" transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Healthcare</a>
                                <a href="#" className=" transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">ENVIRONMENTAL CONSERVATION</a>
                                <a href="#" className=" transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Content Creation</a>
                            </div>
                        </div>
                        {/* <div>
                            <p className="font-semibold  dark:text-white">Services</p>

                            <div className="flex flex-col items-start mt-5 space-y-2">
                                <a href="#" className=" transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Healthcare</a>
                               
                                
                            </div>
                        </div> */}

                        <div>
                            <p className="font-semibold  dark:text-white">Contact Us</p>

                            <div className="flex flex-col items-start mt-5 space-y-2">
                                <a href="#" className=" transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">+880 768 473 4978</a>
                                <a href="#" className=" transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">info@merakiui.com</a>
                            </div>
                        </div>
                    </div>

                    <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700" />

                    <div className="flex flex-col items-center justify-between sm:flex-row text-3xl">
                        
                        <a href="#_" className="relative px-5 py-2 font-medium text-white group">
<span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-black group-hover:bg-gray-900 group-hover:skew-x-12"></span>
<span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-black group-hover:bg-gray-900 group-hover:-skew-x-12"></span>
<span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-black -rotate-12"></span>
<span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-black -rotate-12"></span>
<span className="relative">ServeSync</span>
</a>
                        
                     

                        <p className="mt-4 text-sm  sm:mt-0 dark:text-gray-300">© Copyright 2021. All Rights Reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
