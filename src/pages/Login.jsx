
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import useAuth from "../hook/useAuth";
import { useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import SocialLogin from '../pages/SocialLogin';



const Login = () => {

	const { signInUser } = useAuth();
	const navigate = useNavigate();
    const location = useLocation();
	const from = location.state?.from.pathname || '/'

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

	

	const onSubmit = (data) => {
		const { email, password } = data;
		signInUser(email, password)
		.then((result) => {
			if (result.user) {
				toast.success('Successfully LogIn', { autoClose: 2000 });
				setTimeout(() => {
					navigate(from, { replace: true });
				}, 300);
			} else {
				toast.error('Invalid email or password');
			}
		});
	};
	
	


    return (
        <div className="items-center justify-center w-full flex p-6  min-h-screen">
      <div className="w-full max-w-xl p-8 space-y-3 rounded-sm shadow-xl dark:text-gray-800">
      <div className="flex items-center  space-x-1">
		<div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
		<p className="px-3 text-base text-gray-500">Login with social accounts</p>
		<div className="flex-1 h-px sm:w-16 dark:bg-gray-300"> </div>
	</div>
	<SocialLogin />
	<h1 className="text-2xl font-bold text-center">Login</h1>
	<form onSubmit={handleSubmit(onSubmit)} className="space-y-8 md:px-20">
		<div className="space-y-1 text-sm">
			<label htmlFor="username" className="block text-gray-500">Username</label>
			<input type="text" name="username" id="username" placeholder="Username" className="w-full px-4 py-3 rounded-md border-gray-200 border bg-gray-100 text-gray-800 focus:dark:border-violet-600" {...register("email", { required: true })} />
			{errors.email && <span className="text-red-700">This field is required</span>}
		</div>
		<div className="space-y-1 text-sm">
			<label htmlFor="password" className="block text-gray-500">Password</label>
			<input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border-gray-200 border bg-gray-100 text-gray-800 focus:dark:border-violet-600" {...register("password", { required: true })} />
			{errors.password && <span className="text-red-700">This field is required</span>}
			{/* <div className="flex justify-end text-xs dark:text-gray-600">
				<a rel="noopener noreferrer" href="#">Forgot Password?</a>
			</div> */}
		</div>
		<button className="block  p-3 text-center rounded-md text-white bg-[#2c0a09]">Log in</button>
	</form>
	
	<p className="text-base text-center sm:px-6 text-gray-500">Don't have an account?
		<Link to='/register' className=" text-gray-500">Register</Link>
	</p>
</div>
        </div>
    );
};


export default Login;



