import { useLoaderData } from 'react-router-dom';
import useAuth from '../hook/useAuth';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from 'react';
import  Swal  from 'sweetalert2';
import { toast } from 'react-hot-toast';

const PostDetails = () => {
    const [startDate, setStartDate] = useState(new Date());
    const {user} = useAuth() || {};
    const needposts = useLoaderData()
    const {_id,thumbnail,title,category,deadline,description,volunteers_needed,location,status,organizer} = needposts;

  // Check if volunteers are needed
  const volunteersNeeded = parseInt(volunteers_needed);
  const isVolunteersNeeded = volunteersNeeded > 0;

    const handleReq = async event => {
        event.preventDefault();
        if (user?.email === organizer?.email) {
            return toast.error('Action not permitted');
          }
       console.log(user);
        const form = event.target;
        const name = form.name.value;
        const title = form.title.value;
        const thumbnail = form.thumbnail.value;
        const category = form.category.value;
        const description = form.description.value;
        const location = form.location.value;
        const volunteers_needed = form.volunteers_needed.value;
        const deadline = startDate 
        const status = form.status.value
        const email = user.email;
        // const organizerName = user.displayName;
        // const organizerEmail = user.email;
        const suggestion = form.suggestion.value;

        const postId = _id; // Assuming _id is the post ID    
        const req = {postId, name,title, thumbnail, category, description, email,organizer_email:organizer?.email, status,volunteers_needed, location,suggestion,deadline,organizer};
        console.table(req);
        try {
            const response = await fetch('http://localhost:9000/req', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(req)
            });

            const data = await response.json();

            if (response.ok) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Request send Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                });
            } else {
                throw new Error(data.message || 'Failed to add request');
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
            <section className="min-h-screen items-center flex justify-center">
                <div className="container flex flex-col items-center px-4 py-12 mx-auto xl:flex-row">
                    <div className="flex justify-center xl:w-1/2">
                        <img className="h-80 w-80 sm:w-[28rem] sm:h-[28rem] flex-shrink-0 object-cover rounded-lg" src={thumbnail} alt="" />
                    </div>

                    <div className="flex flex-col items-center mt-6 xl:items-start xl:w-2/3 xl:mt-0">
                        <h2 className="text-2xl font-semibold tracking-tight xl:text-4xl dark:text-white">
                            {title}
                        </h2>

                        <p className="block max-w-2xl mt-4 text-gray-500 dark:text-gray-300 text-2xl">{description}</p>

                        <div className="mt-6 sm:-mx-2">
                            <h1 href="" className="inline-flex items-center justify-center w-full px-4 text-xl py-2.5 overflow-hidden text-gray-500 transition-colors duration-300   sm:w-auto sm:mx-2focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                                <svg className="w-5 h-5 mx-2 fill-current" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve">
                                <svg className="w-5 h-5 mx-2 fill-current" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve">
                        <g>
                            <g>
                                <path d="M407,0H105C47.103,0,0,47.103,0,105v302c0,57.897,47.103,105,105,105h302c57.897,0,105-47.103,105-105V105C512,47.103,464.897,0,407,0z M482,407c0,41.355-33.645,75-75,75H105c-41.355,0-75-33.645-75-75V105c0-41.355,33.645-75,75-75h302c41.355,0,75,33.645,75,75V407z"></path>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path d="M305.646,123.531c-1.729-6.45-5.865-11.842-11.648-15.18c-11.936-6.892-27.256-2.789-34.15,9.151L256,124.166l-3.848-6.665c-6.893-11.937-22.212-16.042-34.15-9.151h-0.001c-11.938,6.893-16.042,22.212-9.15,34.151l18.281,31.664L159.678,291H110.5c-13.785,0-25,11.215-25,25c0,13.785,11.215,25,25,25h189.86l-28.868-50h-54.079l85.735-148.498C306.487,136.719,307.375,129.981,305.646,123.531z"></path>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path d="M401.5,291h-49.178l-55.907-96.834l-28.867,50l86.804,150.348c3.339,5.784,8.729,9.921,15.181,11.65c2.154,0.577,4.339,0.863,6.511,0.863c4.332,0,8.608-1.136,12.461-3.361c11.938-6.893,16.042-22.213,9.149-34.15L381.189,341H401.5c13.785,0,25-11.215,25-25C426.5,302.215,415.285,291,401.5,291z"></path>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path d="M119.264,361l-4.917,8.516c-6.892,11.938-2.787,27.258,9.151,34.15c3.927,2.267,8.219,3.345,12.458,3.344c8.646,0,17.067-4.484,21.693-12.495L176.999,361H119.264z"></path>
                            </g>
                        </g>
                    </svg>
                                </svg>

                                <span className="mx-2">
                                    Location: {location}
                                </span>
                            </h1>

                            <h1 href="" className="inline-flex items-center justify-center w-full px-4 text-xl py-2.5 overflow-hidden text-gray-500 transition-colors duration-300   sm:w-auto sm:mx-2focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                                <svg className="w-5 h-5 mx-2 fill-current" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve">
                                <svg className="w-5 h-5 mx-2 fill-current" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve">
                        <g>
                            <g>
                                <path d="M407,0H105C47.103,0,0,47.103,0,105v302c0,57.897,47.103,105,105,105h302c57.897,0,105-47.103,105-105V105C512,47.103,464.897,0,407,0z M482,407c0,41.355-33.645,75-75,75H105c-41.355,0-75-33.645-75-75V105c0-41.355,33.645-75,75-75h302c41.355,0,75,33.645,75,75V407z"></path>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path d="M305.646,123.531c-1.729-6.45-5.865-11.842-11.648-15.18c-11.936-6.892-27.256-2.789-34.15,9.151L256,124.166l-3.848-6.665c-6.893-11.937-22.212-16.042-34.15-9.151h-0.001c-11.938,6.893-16.042,22.212-9.15,34.151l18.281,31.664L159.678,291H110.5c-13.785,0-25,11.215-25,25c0,13.785,11.215,25,25,25h189.86l-28.868-50h-54.079l85.735-148.498C306.487,136.719,307.375,129.981,305.646,123.531z"></path>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path d="M401.5,291h-49.178l-55.907-96.834l-28.867,50l86.804,150.348c3.339,5.784,8.729,9.921,15.181,11.65c2.154,0.577,4.339,0.863,6.511,0.863c4.332,0,8.608-1.136,12.461-3.361c11.938-6.893,16.042-22.213,9.149-34.15L381.189,341H401.5c13.785,0,25-11.215,25-25C426.5,302.215,415.285,291,401.5,291z"></path>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path d="M119.264,361l-4.917,8.516c-6.892,11.938-2.787,27.258,9.151,34.15c3.927,2.267,8.219,3.345,12.458,3.344c8.646,0,17.067-4.484,21.693-12.495L176.999,361H119.264z"></path>
                            </g>
                        </g>
                    </svg>
                                </svg>

                                <span className="mx-2">
                                    Volunteers Needed: {volunteers_needed}
                                </span>
                            </h1>
                        </div>
                        <div className=" sm:-mx-2">
                        <h1 href="" className="inline-flex items-center justify-center w-full px-4 text-xl py-2.5 overflow-hidden text-gray-500 transition-colors duration-300   sm:w-auto sm:mx-2focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                                <svg className="w-5 h-5 mx-2 fill-current" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve">
                                <svg className="w-5 h-5 mx-2 fill-current" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve">
                        <g>
                            <g>
                                <path d="M407,0H105C47.103,0,0,47.103,0,105v302c0,57.897,47.103,105,105,105h302c57.897,0,105-47.103,105-105V105C512,47.103,464.897,0,407,0z M482,407c0,41.355-33.645,75-75,75H105c-41.355,0-75-33.645-75-75V105c0-41.355,33.645-75,75-75h302c41.355,0,75,33.645,75,75V407z"></path>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path d="M305.646,123.531c-1.729-6.45-5.865-11.842-11.648-15.18c-11.936-6.892-27.256-2.789-34.15,9.151L256,124.166l-3.848-6.665c-6.893-11.937-22.212-16.042-34.15-9.151h-0.001c-11.938,6.893-16.042,22.212-9.15,34.151l18.281,31.664L159.678,291H110.5c-13.785,0-25,11.215-25,25c0,13.785,11.215,25,25,25h189.86l-28.868-50h-54.079l85.735-148.498C306.487,136.719,307.375,129.981,305.646,123.531z"></path>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path d="M401.5,291h-49.178l-55.907-96.834l-28.867,50l86.804,150.348c3.339,5.784,8.729,9.921,15.181,11.65c2.154,0.577,4.339,0.863,6.511,0.863c4.332,0,8.608-1.136,12.461-3.361c11.938-6.893,16.042-22.213,9.149-34.15L381.189,341H401.5c13.785,0,25-11.215,25-25C426.5,302.215,415.285,291,401.5,291z"></path>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path d="M119.264,361l-4.917,8.516c-6.892,11.938-2.787,27.258,9.151,34.15c3.927,2.267,8.219,3.345,12.458,3.344c8.646,0,17.067-4.484,21.693-12.495L176.999,361H119.264z"></path>
                            </g>
                        </g>
                    </svg>
                                </svg>

                                <span className="mx-2">
                                    Category: {category}
                                </span>
                            </h1>
                            <h1 href="" className="inline-flex items-center justify-center w-full px-4 text-xl py-2.5 overflow-hidden text-gray-500 transition-colors duration-300   sm:w-auto sm:mx-2focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                                <svg className="w-5 h-5 mx-2 fill-current" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve">
                                   <svg className="w-5 h-5 mx-2 fill-current" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve">
                        <g>
                            <g>
                                <path d="M407,0H105C47.103,0,0,47.103,0,105v302c0,57.897,47.103,105,105,105h302c57.897,0,105-47.103,105-105V105C512,47.103,464.897,0,407,0z M482,407c0,41.355-33.645,75-75,75H105c-41.355,0-75-33.645-75-75V105c0-41.355,33.645-75,75-75h302c41.355,0,75,33.645,75,75V407z"></path>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path d="M305.646,123.531c-1.729-6.45-5.865-11.842-11.648-15.18c-11.936-6.892-27.256-2.789-34.15,9.151L256,124.166l-3.848-6.665c-6.893-11.937-22.212-16.042-34.15-9.151h-0.001c-11.938,6.893-16.042,22.212-9.15,34.151l18.281,31.664L159.678,291H110.5c-13.785,0-25,11.215-25,25c0,13.785,11.215,25,25,25h189.86l-28.868-50h-54.079l85.735-148.498C306.487,136.719,307.375,129.981,305.646,123.531z"></path>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path d="M401.5,291h-49.178l-55.907-96.834l-28.867,50l86.804,150.348c3.339,5.784,8.729,9.921,15.181,11.65c2.154,0.577,4.339,0.863,6.511,0.863c4.332,0,8.608-1.136,12.461-3.361c11.938-6.893,16.042-22.213,9.149-34.15L381.189,341H401.5c13.785,0,25-11.215,25-25C426.5,302.215,415.285,291,401.5,291z"></path>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path d="M119.264,361l-4.917,8.516c-6.892,11.938-2.787,27.258,9.151,34.15c3.927,2.267,8.219,3.345,12.458,3.344c8.646,0,17.067-4.484,21.693-12.495L176.999,361H119.264z"></path>
                            </g>
                        </g>
                    </svg>
                                </svg>

                                <span className="mx-2">
                                Deadline: {new Date(deadline).toLocaleDateString()}
                                </span>
                            </h1>
                        </div>
                        {isVolunteersNeeded ? (
                            <button className="btn py-2 my-5 bg-[#2c0a09] text-white" onClick={() => document.getElementById('my_modal_1').showModal()}>Be a Volunteer</button>
                        ) : (
                            <p>No volunteers needed at the moment.</p>
                        )}
                        <dialog id="my_modal_1" className="modal">
                            <div className="modal-box">
                                <h3 className="font-bold text-lg">Be a Volunteer</h3>

                                <div className="modal-action">
    <form onSubmit={handleReq}>
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
        <div>
    <label className="text-gray-700 dark:text-gray-200" htmlFor="">pictureUrl</label>
    <input id="emailAddress" type="text" name='thumbnail' disabled defaultValue={thumbnail}  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
</div>
<div>
    <label className="text-gray-700 dark:text-gray-200" htmlFor="">Your Name</label>
    <input id="emailAddress" type="text" name='name' disabled defaultValue={user?.displayName} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
</div>
<div>
    <label className="text-gray-700 dark:text-gray-200" htmlFor="">Suggestion</label>
    <input id="" type="text" name='suggestion' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
</div>

<div>
    <label className="text-gray-700 dark:text-gray-200" htmlFor="">Your Email Address</label>
    <input id="emailAddress" type="email" name='email' disabled defaultValue={user?.email} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
</div>
<div>
    <label className="text-gray-700 dark:text-gray-200" htmlFor="">Title</label>
    <input id="emailAddress" type="text" name='title' disabled defaultValue={title} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
</div>
<div>
    <label className="text-gray-700 dark:text-gray-200" htmlFor="">Description</label>
    <input id="emailAddress" type="text" name='description' disabled defaultValue={description} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
</div>

<div>
    <label className="text-gray-700 dark:text-gray-200" htmlFor="">Category</label>
    <input id="emailAddress" type="text" name='category' disabled defaultValue={category} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
</div>
<div>
    <label className="text-gray-700 dark:text-gray-200" htmlFor="">Location</label>
    <input id="emailAddress" type="text" name='location' disabled defaultValue={location} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
</div>
<div>
    <label className="text-gray-700 dark:text-gray-200" htmlFor="">No. of volunteers needed</label>
    <input id="emailAddress" type="number" name='volunteers_needed' disabled defaultValue={volunteers_needed} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
</div>
<div>
    <label className="text-gray-700 dark:text-gray-200" htmlFor="">Deadline</label>
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
<div>
    <label className="text-gray-700 dark:text-gray-200" htmlFor="emailAddress">Status</label>
    <input id="emailAddress" type="text" name='status' disabled defaultValue="Requested" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>

</div>
          
        </div>

   <div className='flex justify-between'>
   <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>

        <div className="flex justify-end mt-6">
            <button className="block  p-3 text-center rounded-md text-white bg-[#2c0a09]">Request</button>
        </div>
   </div>
    </form>
    </div>
  </div>
</dialog>
        </div>
    </div>
</section>
        </div>
    );
};

export default PostDetails;
