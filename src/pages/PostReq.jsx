import { useEffect, useState } from "react";
import useAuth from "../hook/useAuth";
import  Swal  from 'sweetalert2';
import { toast } from 'react-hot-toast';





const PostReq = () => {
    const { user } = useAuth();
  const [req, setReq] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`${import.meta.env.VITE_API_URL}/postreq/${user?.email}`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to fetch posts');
          }
          return response.json();
        })
        .then(data => setReq(data))
        .catch(error => console.error('Error fetching data:', error));
    }
  }, [user?.email]);

  const handleStatus = async (id, preStatus, status) => {
    // console.log(id, preStatus, status);
    if(preStatus === status) return toast.error("Already Progressing")
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/updatereq/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ status })
      });

      const data = await response.json();

      if (response.ok) {
        setReq(prevReq => {
          return prevReq.map(req => {
            if (req._id === id) {
              return { ...req, status }; 
            }
            return req;
          });
        });

        Swal.fire({
          title: 'Success!',
          text: ' Updated Successfully',
          icon: 'success',
          confirmButtonText: 'Cool'
        });
      } else {
        throw new Error(data.message || 'Failed to update product');
      }
    } catch (error) {
      console.error('Error:', error);
      Swal.fire({
        title: 'Error!',
        text: error.message || 'An error occurred while updating the product',
        icon: 'error',
        confirmButtonText: 'Ok'
      });
    }
  };
  const handleCancelRequest = async (id, title) => {
    const confirmed = await Swal.fire({
      title: 'Are you sure?',
      text: `Do you want to cancel your volunteer request for '${title}'?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, cancel it!',
      cancelButtonText: 'No, keep it'
    });
  
    if (confirmed.isConfirmed) {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/postreq/${id}`, {
          method: 'DELETE',
        });
  
        if (response.ok) {
          setReq(prevReq => prevReq.filter(req => req._id !== id));
          toast.success('Volunteer request cancelled successfully!');
        } else {
          throw new Error('Failed to cancel volunteer request');
        }
      } catch (error) {
        console.error('Error:', error);
        toast.error(error.message || 'Failed to cancel volunteer request');
      }
    }
  };
  
  
    return (
        <section className='container px-4 mx-auto pt-12'>
        <div className='flex items-center gap-x-3'>
          <h2 className='text-lg font-medium text-gray-800 '>Post Requests</h2>
  
          <span className='px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full '>
            {req.length} Requests
          </span>
        </div>
  
        <div className='flex flex-col mt-6'>
          <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
            <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
              <div className='overflow-hidden border border-gray-200  md:rounded-lg'>
                <table className='min-w-full divide-y divide-gray-200'>
                  <thead className='bg-gray-50'>
                    <tr>
                      <th
                        scope='col'
                        className='py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500'
                      >
                        <div className='flex items-center gap-x-3'>
                          <span>Title</span>
                        </div>
                      </th>
                     
  
                      <th
                        scope='col'
                        className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                      >
                        <span>Location</span>
                      </th>
  
                      <th
                        scope='col'
                        className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                      >
                        <button className='flex items-center gap-x-2'>
                          <span>Category</span>
                        </button>
                      </th>
  
                      <th
                        scope='col'
                        className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                      >
                        Status
                      </th>
  
                     
  
                      <th className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'>
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className='bg-white divide-y divide-gray-200 '>
  {req.map((reqs, index) => (
    <tr key={index}> {/* Adding a unique key prop */}
      <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
        {reqs.title} {/* Assuming you have a 'title' property in each 'reqs' object */}
      </td>
      <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
        {reqs.location}
      </td>
      {/* <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
        {reqs.price}
      </td> */}
      <td className='px-4 py-4 text-sm whitespace-nowrap'>
        <div className='flex items-center gap-x-2'>
          <p
            className='px-3 py-1 rounded-full text-blue-500 bg-blue-100/60
                           text-xs'
          >
            {reqs.category}
          </p>
        </div>
      </td>
      <td className='px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap'>
        <div className='inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-yellow-100/60 text-yellow-500'>
          <span className='h-1.5 w-1.5 rounded-full bg-yellow-500'></span>
          <h2 className='text-sm font-normal'>{reqs.status}</h2>
        </div>
      </td>
      <td className='px-4 py-4 text-sm whitespace-nowrap'>
                      <div className='flex items-center gap-x-6'>
                      <button
  onClick={() => handleStatus(reqs._id, reqs.status, "In Progress")}
  disabled={reqs.status === 'Complete'} 
  title='Mark Complete'
  className='text-gray-500 transition-colors duration-200 hover:text-red-500 focus:outline-none'
>
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    strokeWidth='1.5'
    stroke='currentColor'
    className='w-5 h-5'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='m4.5 12.75 6 6 9-13.5'
    />
  </svg>
</button>


<button
disabled={reqs.status === 'Complete'} 
  onClick={() => handleCancelRequest(reqs._id, reqs.title)}
  className='text-gray-500 transition-colors duration-200 hover:text-red-500 focus:outline-none'
>
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    strokeWidth='1.5'
    stroke='currentColor'
    className='w-5 h-5'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636'
    />
  </svg>
</button>




                      </div>
                    </td>


      
    </tr>
  ))}
</tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  };

export default PostReq;