
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from 'react';
import useAuth from '../hook/useAuth';
import { useLoaderData } from 'react-router-dom';
import  Swal  from 'sweetalert2';

const Update = () => {
    const [startDate, setStartDate] = useState(new Date());
    const {user} = useAuth() || {};
    const needposts = useLoaderData()
    const {_id,thumbnail,title,category,deadline,description,volunteers_needed,location,status,organizer} = needposts;

    const handleSubmit = async event => {
        event.preventDefault();
        // if (user?.email === organizer?.email) {
        //     return toast.error('Action not permitted');
        //   }
      
        const form = event.target;
        const name = form.name.value;
        const title = form.title.value;
        const thumbnail = form.thumbnail.value;
        const category = form.category.value;
        const description = form.description.value;
        const location = form.location.value;
        const volunteers_needed = form.volunteers_needed.value;
        const deadline = startDate 
        // const status = form.status.value
        const email = user.email;
        // const organizerName = user.displayName;
        // const organizerEmail = user.email;
        // const suggestion = form.suggestion.value;
         
        const postData = { name,title, thumbnail, category, description, email,organizer_email:organizer?.email,volunteers_needed, location,deadline,organizer};
       
        try {
            const response = await fetch(`http://localhost:9000/post/${_id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(postData)
            });

  
            const data = await response.json();

            if (response.ok) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Product Updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                });
            } else {
                throw new Error(data.message || 'Failed to add product');
            }
        } catch (error) {
            console.error('Error:', error);
            Swal.fire({
                title: 'Error!',
                text: error.message || 'An error occurred while adding the product',
                icon: 'error',
                confirmButtonText: 'Ok'
            });
        }
    };
    return (
        <div>
         <div className="text-center md:mt-8">
                        <h1 className="text-xl font-semibold p-2 capitalize lg:text-3xl dark:text-white">Update Post for Volunteer: <br /> {title}</h1>
                        
                    </div>
        <form onSubmit={handleSubmit} className=" min-h-screen flex justify-center items-center   ">
        <div className="grid grid-cols-1 gap-6  sm:grid-cols-3 md:px-16  px-4  rounded-sm shadow-xl ">
        <div>
    <label className="text-gray-700 dark:text-gray-200" htmlFor="">pictureUrl</label>
    <input id="emailAddress" type="text" name='thumbnail'  defaultValue={thumbnail}  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
</div>
{/* <div>
    <label className="text-gray-700 dark:text-gray-200" htmlFor="">Your Name</label>
    <input id="emailAddress" type="text" name='name'  defaultValue={user?.displayName} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
</div> */}
{/* <div>
    <label className="text-gray-700 dark:text-gray-200" htmlFor="">Suggestion</label>
    <input id="" type="text" name='suggestion' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
</div> */}

{/* <div>
    <label className="text-gray-700 dark:text-gray-200" htmlFor="">Your Email Address</label>
    <input id="emailAddress" type="email" name='email' disabled defaultValue={user?.email} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
</div> */}
<div>
    <label className="text-gray-700 dark:text-gray-200" htmlFor="">Title</label>
    <input id="emailAddress" type="text" name='title'  defaultValue={title} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
</div>
<div>
    <label className="text-gray-700 dark:text-gray-200" htmlFor="">Description</label>
    <input id="emailAddress" type="text" name='description'  defaultValue={description} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
</div>

<div>
    <label className="text-gray-700 dark:text-gray-200" htmlFor="">Category</label>
    <input id="emailAddress" type="text" name='category' defaultValue={category} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
</div>
<div>
    <label className="text-gray-700 dark:text-gray-200" htmlFor="">Location</label>
    <input id="emailAddress" type="text" name='location' defaultValue={location} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
</div>
<div>
    <label className="text-gray-700 dark:text-gray-200" htmlFor="">No. of volunteers needed</label>
    <input id="emailAddress" type="number" name='volunteers_needed'  defaultValue={volunteers_needed} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
</div>
<div>
    <label className="text-gray-700 dark:text-gray-200" htmlFor="">Deadline: </label> <br />
    <DatePicker className='border p-2 rounded-md' selected={startDate} onChange={(date) => setStartDate(date)} />
</div>
<div>
    <label className="text-gray-700 dark:text-gray-200" htmlFor="emailAddress">Organizer Name</label>
    <input id="emailAddress" type="text" name='organizerName' disabled  defaultValue={organizer?.name} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
</div>
<div>
    <label className="text-gray-700 dark:text-gray-200" htmlFor="emailAddress">Organizer Email</label>
    <input id="emailAddress" type="email" name='organizerEmail' disabled defaultValue={organizer?.email}  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
</div>
{/* <div>
    <label className="text-gray-700 dark:text-gray-200" htmlFor="emailAddress">Status</label>
    <input id="emailAddress" type="text" name='status' disabled defaultValue="Requested" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>

</div> */}
<div className="flex p-4 ">
            <button className="block px-6 py-2 text-center rounded-md text-white bg-[#2c0a09]">Update</button>
        </div>
        </div>

   <div className='flex justify-between'>
   

      
   </div>

    </form>
        </div>
    );
};

export default Update;