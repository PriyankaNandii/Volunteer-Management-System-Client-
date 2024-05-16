import { useEffect, useState } from 'react';
import Post from "../components/Post";
import { IoMdGrid } from "react-icons/io";
import { MdTableRows } from "react-icons/md";

const AllPosts = () => {
    const [needposts, setNeedposts] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [isTableLayout, setIsTableLayout] = useState(false);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/needpost`)
            .then(response => response.json())
            .then(data => setNeedposts(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const toggleGridLayout = () => {
        setIsTableLayout(false);
    };

    const toggleTableLayout = () => {
        setIsTableLayout(true);
    };

    const filteredPosts = needposts.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div>
            <section className="">
                <div className="container px-6 py-10 mx-auto">
                    <div className="text-center md:mt-10 mb-5">
                        <h1 className="text-2xl font-semibold capitalize lg:text-3xl dark:text-white">All Volunteer Needs Post</h1>
                    </div>
                    <div className="join flex justify-between">
                        <input className="input input-bordered border-2 join-item" placeholder="Search by Post Title" value={searchQuery} onChange={handleSearchChange} />

                       <div>
                       <button className={`ml-2 bg-[#2c0a09] text-white font-bold py-2 px-4 rounded ${!isTableLayout ? 'opacity-50 cursor-not-allowed' : ''}`} onClick={toggleGridLayout} disabled={!isTableLayout}>
                        <IoMdGrid />
                        </button>
                        <button className={`ml-2  bg-[#2c0a09] text-white font-bold py-2 px-4 rounded ${isTableLayout ? 'opacity-50 cursor-not-allowed' : ''}`} onClick={toggleTableLayout} disabled={isTableLayout}>
                        <MdTableRows />
                        </button>
                       </div>
                    </div>
                    <hr className="my-8 border-gray-200 dark:border-gray-700" />
                    {isTableLayout ? (
                        <div className="overflow-x-auto">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Category</th>
                                        <th>Title</th>
                                        <th>Volunteer Need No</th>
                                        <th>Deadline</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredPosts.map(needpost => (
                                        <tr key={needpost._id} className="hover:bg-gray-100">
                                            <td>{needpost.category}</td>
                                            <td>{needpost.title}</td>
                                            <td>{needpost.volunteers_needed}</td>
                                            <td>{new Date(needpost.deadline).toLocaleDateString()}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
                            {filteredPosts.map(needpost => (
                                <Post key={needpost._id} needposts={needpost} />
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default AllPosts;
