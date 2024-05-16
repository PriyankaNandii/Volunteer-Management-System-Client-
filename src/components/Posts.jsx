import { useEffect, useState } from 'react';
import Post from "./Post";
import { useLoaderData } from 'react-router-dom';


const Posts = () => {
   
    const [needposts, setNeedposts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:9000/needpost')
            .then(response => response.json())
            .then(data => setNeedposts(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <section className="">
                <div className="container px-6 py-10 mx-auto">
                    <div className="text-center md:mt-10">
                        <h1 className="text-2xl font-semibold  capitalize lg:text-3xl dark:text-white">Volunteer Needs Now</h1>
                        <p className="max-w-lg mx-auto mt-4 text-gray-500">
                        By joining our platform, you become part of a global network of like-minded individuals committed to making the world a better place
                        </p>
                    </div>
                    <hr className="my-8 border-gray-200 dark:border-gray-700" />
                    <div className="grid grid-cols-1 md:gap-12 gap-8 md:grid-cols-2 xl:grid-cols-3 ">
                        {needposts.map(needpost => (
                            <Post key={needpost._id} needposts={needpost} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Posts;
