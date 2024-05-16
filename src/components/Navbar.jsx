import React, { useEffect, useState } from 'react';

import { Link, NavLink } from 'react-router-dom';
import useAuth from '../hook/useAuth';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false); // State to manage mobile menu visibility
    const [theme, setTheme] = useState("nord")

  useEffect(() =>{
      localStorage.setItem('theme', theme)
      const localTheme = localStorage.getItem("theme")
      document.querySelector('html').setAttribute("data-theme",localTheme)
  },[theme])
  
  
  
      const handleToggle = e =>{
          if (e.target.checked) {
              setTheme("luxury")
          }else{
              setTheme("retro")
          }
      }
      const { logOut, user } = useAuth();
      console.log(user);
    return (
        <div>
            <nav className="relative   ">
                {/* CSS styles embedded within JSX */}
                <style>
                    {`
                    .scroll-hidden::-webkit-scrollbar {
                        height: 0px;
                        background: transparent;
                        /* make scrollbar transparent */
                    }
                    `}
                </style>

                <div className="container   mx-auto">
                
                <div className="  py-4 bg-[#aa7446] text-white px-3 overflow-y-auto whitespace-nowrap scroll-hidden flex  justify-between ">

                <div className=''>
                    <h1>Call Us: ||+88012345678911||</h1>
                </div>
                 <div className='flex mx-3 '>
                 <a href="" className="mx-2 text-white transition-colors duration-300 transform dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Reddit">
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM6.807 10.543C6.20862 10.5433 5.67102 10.9088 5.45054 11.465C5.23006 12.0213 5.37133 12.6558 5.807 13.066C5.92217 13.1751 6.05463 13.2643 6.199 13.33C6.18644 13.4761 6.18644 13.6229 6.199 13.769C6.199 16.009 8.814 17.831 12.028 17.831C15.242 17.831 17.858 16.009 17.858 13.769C17.8696 13.6229 17.8696 13.4761 17.858 13.33C18.4649 13.0351 18.786 12.3585 18.6305 11.7019C18.475 11.0453 17.8847 10.5844 17.21 10.593H17.157C16.7988 10.6062 16.458 10.7512 16.2 11C15.0625 10.2265 13.7252 9.79927 12.35 9.77L13 6.65L15.138 7.1C15.1931 7.60706 15.621 7.99141 16.131 7.992C16.1674 7.99196 16.2038 7.98995 16.24 7.986C16.7702 7.93278 17.1655 7.47314 17.1389 6.94094C17.1122 6.40873 16.6729 5.991 16.14 5.991C16.1022 5.99191 16.0645 5.99491 16.027 6C15.71 6.03367 15.4281 6.21641 15.268 6.492L12.82 6C12.7983 5.99535 12.7762 5.993 12.754 5.993C12.6094 5.99472 12.4851 6.09583 12.454 6.237L11.706 9.71C10.3138 9.7297 8.95795 10.157 7.806 10.939C7.53601 10.6839 7.17843 10.5422 6.807 10.543ZM12.18 16.524C12.124 16.524 12.067 16.524 12.011 16.524C11.955 16.524 11.898 16.524 11.842 16.524C11.0121 16.5208 10.2054 16.2497 9.542 15.751C9.49626 15.6958 9.47445 15.6246 9.4814 15.5533C9.48834 15.482 9.52348 15.4163 9.579 15.371C9.62737 15.3318 9.68771 15.3102 9.75 15.31C9.81233 15.31 9.87275 15.3315 9.921 15.371C10.4816 15.7818 11.159 16.0022 11.854 16C11.9027 16 11.9513 16 12 16C12.059 16 12.119 16 12.178 16C12.864 16.0011 13.5329 15.7863 14.09 15.386C14.1427 15.3322 14.2147 15.302 14.29 15.302C14.3653 15.302 14.4373 15.3322 14.49 15.386C14.5985 15.4981 14.5962 15.6767 14.485 15.786V15.746C13.8213 16.2481 13.0123 16.5208 12.18 16.523V16.524ZM14.307 14.08H14.291L14.299 14.041C13.8591 14.011 13.4994 13.6789 13.4343 13.2429C13.3691 12.8068 13.6162 12.3842 14.028 12.2269C14.4399 12.0697 14.9058 12.2202 15.1478 12.5887C15.3899 12.9572 15.3429 13.4445 15.035 13.76C14.856 13.9554 14.6059 14.0707 14.341 14.08H14.306H14.307ZM9.67 14C9.11772 14 8.67 13.5523 8.67 13C8.67 12.4477 9.11772 12 9.67 12C10.2223 12 10.67 12.4477 10.67 13C10.67 13.5523 10.2223 14 9.67 14Z">
                            </path>
                        </svg>
                    </a>
        
                    <a href="#" className="mx-2 text-white transition-colors duration-300 transform dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Facebook">
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z">
                            </path>
                        </svg>
                    </a>
        
                    <a href="#" className="mx-2 text-white transition-colors duration-300 transform dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Github">
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z">
                            </path>
                        </svg>
                    </a>
                 </div>
                    </div>

                    <div className="navbar   px-3 py-2  ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <NavLink
  to='/'
  className={({ isActive }) => isActive ? 'p-0.5 px-5 py-2 border-black  font-bold  dark:text-white' : ' text-black'}
 
> Home
</NavLink>


  <NavLink
  to='/allcrafts'
  className={({ isActive }) => isActive ? 'p-0.5 px-5 py-2 border-black border-2 font-bold text-black' : ' text-black'}

> All Art & craft Items
</NavLink>



{/* <NavLink
  to='/addcraft'
  className={({ isActive }) => isActive ? 'p-0.5 px-5 py-2 border-[#2f7dfc] border-b-2 font-bold text-black' : ' text-black'}
 
> Add Craft Item
</NavLink>

<NavLink
  to='/mycraft'
  className={({ isActive }) => isActive ? 'p-0.5 px-5 py-2 border-[#2f7dfc] border-b-2 font-bold text-black' : ' text-black'}

> My List
</NavLink> */}
      

                        </ul>
                    </div>
                    <Link to='/' className=" font-bold normal-case text-xl text-black">                       
                     <a href="#_" className="relative px-2 py-2 font-medium text-white group">
<span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-black group-hover:bg-gray-900 group-hover:skew-x-12 "></span>
<span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-black group-hover:bg-gray-900 group-hover:-skew-x-12"></span>
<span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-black -rotate-12"></span>
<span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-black -rotate-12"></span>
<span className="relative text-center">ServeSync</span>
</a>
</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 justify-center text-center text-lg items-center gap-3">
                    <NavLink
  to='/'
  className={({ isActive }) => isActive ? 'p-0.5 px-5 py-2 border-gray-500 border-2 rounded-xl font-extrabold text-gray-500' : ' text-gray-500'}
 
> Home
</NavLink>


  <NavLink
  to='/allposts'
  className={({ isActive }) => isActive ? 'p-0.5 px-5 py-2 border-gray-500 border-b-2 font-bold text-gray-500' : ' text-gray-500'}

> Need Volunteer
</NavLink>



{/* <NavLink
  to='/addcraft'
  className={({ isActive }) => isActive ? 'p-0.5 px-5 py-2 border-[#2f7dfc] border-b-2 font-bold text-gray-500' : ' text-gray-500'}
 
> Add Craft Item
</NavLink>

<NavLink
  to='/mycraft'
  className={({ isActive }) => isActive ? 'p-0.5 px-5 py-2 border-[#2f7dfc] border-b-2 font-bold text-gray-500' : ' text-gray-500'}

> My List
</NavLink> */}
                    </ul>
                </div>



               


                <div className="navbar-end ">

{
    user? <div className="dropdown dropdown-end z-50">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
                <img src={user?.photoURL || "" } />
            </div>
        </label>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li>
                <button className="btn btn-sm  btn-ghost">Name: {user?.displayName||'user name not found'}</button>

            </li>
            <li>
            <Link to='/addpost'>
             <button className='btn btn-sm  btn-ghost font-thin '>Add Volunteer Post</button>
            </Link>
            <Link to='/mypost'>
             <button className='btn btn-sm  btn-ghost font-thin '>Manage My Post </button>
            </Link>
            <Link to='/postreq'>
             <button className='btn btn-sm  btn-ghost font-thin '>Post Request</button>
            </Link>
            <button onClick={logOut} className="btn btn-sm rounded-sm  bg-white text-black">

<span className="">LogOut</span>
</button>

            </li>
        </ul>
    </div>
        :
        <Link to='/login' className="btn bg-white text-black md:px-8 rounded-sm">

<spa>LogIn</spa>
</Link>
}
<label className="swap swap-rotate">
  

  <input onChange={handleToggle} type="checkbox" className="theme-controller md:py-8"  />
  
 
  <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
  
 
  <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
  
</label>
</div>


                
            </div>

                    
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
