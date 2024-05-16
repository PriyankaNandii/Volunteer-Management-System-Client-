


import { Link, useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../hook/useAuth";
import { IoEyeSharp } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import { useState } from "react";
import { toast } from 'react-hot-toast';

const Register = () => {
    const { createUser, updateUserProfile } = useAuth();
    const [showPassword, setShowPassword] = useState(false)


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate();
    const location = useLocation();

    const onSubmit = (data) => {
        const { email, password, name, photoUrl } = data; 
        createUser(email, password, photoUrl, name)
        .then(() => { 
            toast.success("Registration successful!", { autoClose: 2000 }); 
            setTimeout(() => {
                updateUserProfile(name, photoUrl).then(() => {
                    navigate('/');
                });
            }, 3000); 
        });
    };
    
    
    return (
        <div className="items-center justify-center w-full flex p-6 min-h-screen">
            <div className="w-full max-w-xl p-4 rounded-sm shadow-xl sm:p-8 dark:text-gray-800">
                <h2 className="mb-3 text-3xl font-semibold text-center">Create a new account</h2>
                <p className="text-sm text-center text-gray-500">
                    Have account? <Link to='/login' rel="noopener noreferrer" className="focus:underline hover:underline">Log In here</Link>
                </p>
               
                <div className="flex items-center w-full my-4">
                    <hr className="w-full dark:text-gray-600" />
                    <p className="px-3 dark:text-gray-600">OR</p>
                    <hr className="w-full dark:text-gray-600" />
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 md:px-20">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label htmlFor="name" className="block text-sm text-gray-500">Name</label>
                            <input type="text" placeholder="your name" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 text-gray-500 focus:dark:border-violet-600" {...register("name", { required: true })}/>
                            {errors.name && <span className="text-red-700">This field is required</span>}
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-sm text-gray-500">Email address</label>
                            <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 text-gray-500 focus:dark:border-violet-600" {...register("email", { required: true })} />
                            {errors.email && <span className="text-red-700">This field is required</span>}
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="photoUrl" className="block text-sm text-gray-500">Photo Url</label>
                            <input type="text" placeholder="your photo url" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 text-gray-500 focus:dark:border-violet-600" {...register("photoUrl", { required: true })}/>
                            {errors.photoUrl && <span className="text-red-700">This field is required</span>}
                        </div>
                       
                        <div className="flex justify-between space-y-2">
    <label htmlFor="password" className="text-sm text-gray-500">Password</label>
</div>
<label className="input flex items-center">
    <input
        type={showPassword ? "text" : "password"}
        name="password"
        id="password"
        placeholder="*****"
        className="w-full px-4 py-2 border grow rounded-md dark:border-gray-300 dark:bg-gray-50 text-gray-500  focus:dark:border-violet-600"
        {...register("password", {
            required: "This field is required",
            minLength: {
                value: 8,
                message: "Password must be at least 8 characters long"
            },
            pattern: {
                value: /^(?=.*[A-Z])/,
                message: "Password must contain at least one uppercase letter"
            }
        })}
    />
    <span onClick={() => setShowPassword(!showPassword)}>
        {showPassword ? <IoMdEyeOff /> : <IoEyeSharp />}
    </span>
</label>
{errors.password && <span className="text-red-700">{errors.password.message}</span>}

                           
                       
                    </div>
                    <button type="submit" className=" px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50 bg-[#2c0a09] text-white">Register</button>
                </form>
            </div>
        </div>
    );
};

export default Register;
;