import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useAuth from '../hook/useAuth';
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import Swal from 'sweetalert2';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from 'react-router-dom';
import MyReq from './MyReq';

const ManageMyPostPage = () => {
    
    const [mypost, setMyPost] = useState([]);

  
    const { user } = useAuth();
  

    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:9000/mypost/${user.email}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Failed to fetch posts');
                    }
                    return response.json();
                })
                .then(data => setMyPost(data))
                .catch(error => console.error('Error fetching data:', error));
        }
    }, [user?.email]);

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:9000/post/${id}`, { method: "DELETE" })
                    .then((res) => {
                        if (!res.ok) {
                            throw new Error("Failed to delete post");
                        }
                        return res.json();
                    })
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your post has been deleted.",
                                icon: "success",
                            });
                            const remaining = mypost.filter(post => post._id !== id);
                            setMyPost(remaining);
                        } else {
                            throw new Error("No post was deleted");
                        }
                    })
                    .catch((error) => {
                        console.error("Error:", error);
                        Swal.fire({
                            title: "Error!",
                            text: error.message || "An error occurred while deleting the post",
                            icon: "error",
                        });
                    });
            }
        });
    };

  

    // const handleSubmit = async (event) => {
    //     event.preventDefault();
    //     const form = event.target;
    //     const name = form.name.value;
    //     const title = form.title.value;
    //     const thumbnail = form.thumbnail.value;
    //     const category = form.category.value;
    //     const description = form.description.value;
    //     const location = form.location.value;
    //     const volunteers_needed = form.volunteers_needed.value;
    //     const deadline = startDate 
    //     const status = form.status.value
    //     const email = user.email;
    //     // const organizerName = user.displayName;
    //     // const organizerEmail = user.email;
    //     const suggestion = form.suggestion.value;
         
    //     const postData = {  name,title, thumbnail, category, description, email,organizer_email:organizer?.email, status,volunteers_needed, location,suggestion,deadline,organizer};
    //     console.table(postData);
    //     try {
    //         const response = await fetch('http://localhost:9000/post/${id}', {
    //             method: 'PUT',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify(postData)
    //         });

    //         const data = await response.json();

    //         if (response.ok) {
    //             Swal.fire({
    //                 title: 'Success!',
    //                 text: 'Request send Successfully',
    //                 icon: 'success',
    //                 confirmButtonText: 'Cool'
    //             });
    //         } else {
    //             throw new Error(data.message || 'Failed to add request');
    //         }
    //     } catch (error) {
    //         console.error('Error:', error);
    //         Swal.fire({
    //             title: 'Error!',
    //             text: error.message || 'An error occurred while adding the product',
    //             icon: 'error',
    //             confirmButtonText: 'Ok'
    //         });
    //     }
    // };

    return (
        <div className='md:mx-20 mx-4 mt-3'>
            <Tabs>
                <TabList>
                    <Tab>My Need Volunteer Post : {mypost.length}</Tab>
                    <Tab>Title 2</Tab>
                </TabList>

                <TabPanel>
                    <div className="grid grid-cols-1 md:gap-12 gap-8 md:grid-cols-2 xl:grid-cols-3">
                        {mypost.length === 0 ? (
                            <p>No posts available.</p>
                        ) : (
                            mypost.map(post => (
                                <div key={post._id} className="flex flex-col items-center justify-center w-full max-w-sm mx-auto mb-4">
                                    <div
                                        className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
                                        style={{ backgroundImage: `url(${post.thumbnail})` }}
                                    ></div>

                                    <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-80 dark:bg-gray-800">
                                        <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">{post.title}</h3>
                                        <p className="px-3 py-2 text-sm text-gray-600 dark:text-gray-400">{post.description}</p>
                                        <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                                            <span className="px-2 py-1 text-sm font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">{post.category}</span>

                                          <Link to={`/update/${post._id}`}>
                                          <button
                                                className="px-2 py-1 text-3xl font-semibold text-black uppercase transition-colors duration-300 transform rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none"
                                            >
                                                <FiEdit />
                                            </button>
                                          </Link>
                                          
                                            <button
                                                onClick={() => handleDelete(post._id)}
                                                className="px-2 py-1 text-3xl font-semibold text-black uppercase transition-colors duration-300 transform rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">
                                                <MdDelete />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </TabPanel>

                <TabPanel>
                    <MyReq />
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ManageMyPostPage;