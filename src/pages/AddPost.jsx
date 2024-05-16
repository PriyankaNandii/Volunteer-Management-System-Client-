import { useState, useEffect } from "react";
import useAuth from "../hook/useAuth";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from 'sweetalert2'; // Correct import statement

const AddPost = () => {
    const [startDate, setStartDate] = useState(new Date());
    const { user } = useAuth() || {};

    const handleAdd = async (event) => {
        event.preventDefault();
        const form = event.target;
        const thumbnail = form.thumbnail.value;
        const category = form.category.value;
        const description = form.description.value;
        const location = form.location.value;
        const volunteers_needed = form.volunteers_needed.value;
        const deadline = startDate;
        // const status = form.status.value;
        const title = form.title.value;
        const suggestion = form.suggestion.value;

        const addData = {
            thumbnail,
            title,
            category,
            description,
            location,
            volunteers_needed,
            deadline,
            // status,
            suggestion,
            organizer: {
                email: user?.email,
                name: user?.displayName,
            },
        };

        try {
            const response = await fetch('http://localhost:9000/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(addData),
            });

            const data = await response.json();

            if (response.ok) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool',
                });
            } else {
                throw new Error(data.message || 'Failed to add');
            }
        } catch (error) {
            console.error('Error:', error);
            Swal.fire({
                title: 'Error!',
                text: error.message || 'An error occurred while adding the product',
                icon: 'error',
                confirmButtonText: 'Ok',
            });
        }
    };

    return (
        <div>
            <div className="text-center md:mt-8">
                        <h1 className="text-2xl font-semibold  capitalize lg:text-3xl dark:text-white">Add Post for Volunteer</h1>
                        
                    </div>
            <form onSubmit={handleAdd} className=" min-h-screen  flex justify-center items-center ">
                <div className="grid grid-cols-1 gap-6  sm:grid-cols-2 md:px-16  px-4  rounded-sm shadow-xl ">
                    <div>
                        <label className="text-gray-500 dark:text-gray-200" htmlFor="thumbnail">Picture URL</label>
                        <input id="thumbnail" type="text" name='thumbnail' className="block w-full px-4 py-2 mt-2 text-gray-500 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                    </div>
                    <div>
                        <label className="text-gray-500 dark:text-gray-200" htmlFor="suggestion">Suggestion</label>
                        <input id="suggestion" type="text" name='suggestion' className="block w-full px-4 py-2 mt-2 text-gray-500 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                    </div>
                    <div>
                        <label className="text-gray-500 dark:text-gray-200" htmlFor="title">Title</label>
                        <input id="title" type="text" name='title' className="block w-full px-4 py-2 mt-2 text-gray-500 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                    </div>
                    <div>
                        <label className="text-gray-500 dark:text-gray-200" htmlFor="description">Description</label>
                        <input id="description" type="text" name='description' className="block w-full px-4 py-2 mt-2 text-gray-500 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                    </div>
                    <div>
                        <label className="text-gray-500 dark:text-gray-200" htmlFor="category">Category: </label> <br />
                        <select name="category" id="category" className="border p-2 rounded-md">
                            <option value="Healthcare">Healthcare</option>
                            <option value="Education">Education</option>
                            <option value="Social Service">Social Service</option>
                            <option value="Animal Welfare">Animal Welfare</option>
                            <option value="Community Outreach">Community Outreach</option>
                            <option value="Environmental Conservation">Environmental Conservation</option>
                        </select>
                    </div>
                    <div>
                        <label className="text-gray-500 dark:text-gray-200" htmlFor="location">Location</label>
                        <input id="location" type="text" name='location' className="block w-full px-4 py-2 mt-2 text-gray-500 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                    </div>
                    <div>
                        <label className="text-gray-500 dark:text-gray-200" htmlFor="volunteers_needed">No. of volunteers needed</label>
                        <input id="volunteers_needed" type="number" name='volunteers_needed' className="block w-full px-4 py-2 mt-2 text-gray-500 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                    </div>
                    <div>
                        <label className="text-gray-500 dark:text-gray-200" htmlFor="deadline">Deadline:</label> <br />
                        <DatePicker className='border p-2 rounded-md' selected={startDate} onChange={(date) => setStartDate(date)} />
                    </div>
                    <div>
                        <label className="text-gray-500 dark:text-gray-200" htmlFor="organizerName">Organizer Name</label>
                        <input id="organizerName" type="text" name='organizerName' defaultValue={user?.displayName} className="block w-full px-4 py-2 mt-2 text-gray-500 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                    </div>
                    <div>
                        <label className="text-gray-500 dark:text-gray-200" htmlFor="organizerEmail">Organizer Email</label>
                        <input id="organizerEmail" type="email" name='organizerEmail' defaultValue={user?.email} className="block w-full px-4 py-2 mt-2 text-gray-500 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                    </div>
                    {/* <div>
                        <label className="text-gray-700 dark:text-gray-200" htmlFor="status">Status</label>
                        <input id="status" type="text" name='status' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                    </div> */}
                    <div className="flex p-4">
                    <button className="block px-6  py-2 text-center rounded-md text-white bg-[#2c0a09]">Post</button>
                </div>
                </div>


      
                
            </form>
        </div>
    );
};

export default AddPost;
