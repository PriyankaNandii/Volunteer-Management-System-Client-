import {  useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import useAuth from '../hook/useAuth';
import BannerImage from './BannerImage';

const Banner = () => {
 


  return (
    <div>
      <section className="">
     

        <div className="container px-6 py-16 mx-auto text-center ">
          <div className="max-w-lg mx-auto  ">
          <h1 className="text-3xl font-semibold  dark:text-white lg:text-4xl">
  Empower Your Community 
</h1>
            <p className="mt-6 text-gray-500 dark:text-gray-300">
            Manage volunteers efficiently, organize events seamlessly, and create positive impact together.
            </p>
            <button className="px-5 py-2 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-[#2c0a09] rounded-sm hover:bg-blue-500 lg:mx-0 lg:w-auto focus:outline-none">
              Start 14-Day free trial
            </button>
            <p className="mt-3 text-sm text-gray-400 ">No credit card required</p>
          </div>

          <div className=" mt-10 rounded-2xl">
            {/* <img
              className="object-cover w-full h-96 rounded-xl lg:w-4/5"
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
              alt=""
            /> */}
            <BannerImage />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
