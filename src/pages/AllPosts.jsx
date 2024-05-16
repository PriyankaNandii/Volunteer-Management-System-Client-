import { useEffect, useState } from 'react';
import Post from "../components/Post";

const AllPosts = () => {
    const [needposts, setNeedposts] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        fetch('http://localhost:9000/needpost')
            .then(response => response.json())
            .then(data => setNeedposts(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredPosts = needposts.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div>
            <section className="">
                <div className="container px-6 py-10 mx-auto">
                    <div className="text-center md:mt-10">
                        <h1 className="text-2xl font-semibold capitalize lg:text-3xl dark:text-white">All Volunteer Needs Post</h1>
                    </div>
                    <div className="join ">
                        <input className="input input-bordered border-2 join-item" placeholder="Search by Post Title" value={searchQuery} onChange={handleSearchChange} />
                    </div>
                    <hr className="my-8 border-gray-200 dark:border-gray-700" />
                    <div className="grid grid-cols-1 md:gap-12 gap-8 md:grid-cols-2 xl:grid-cols-3">
                        {filteredPosts.map(needpost => (
                            <Post key={needpost._id} needposts={needpost} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AllPosts;
