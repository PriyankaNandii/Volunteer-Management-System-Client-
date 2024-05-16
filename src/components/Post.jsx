import { Link } from 'react-router-dom';

const Post = ({ needposts }) => {
    const { _id, thumbnail, title, category, deadline,volunteers_needed} = needposts;
    return (
        <div>
            <div>
                <img className="object-cover object-center w-full h-64 rounded-lg lg:h-80" src={thumbnail} alt="" />

                <div className="mt-8">
                    <span className="uppercase ">category: {category}</span>

                    <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
                        {title}
                    </h1>
                    <h1 className="mt-4 text-base text-gray-800 dark:text-white">
                    Volunteers Needed: {volunteers_needed}
                    </h1>

                    <p className="mt-2 text-gray-500 dark:text-gray-400"></p>

                    <div className="flex items-center justify-between mt-4">
                        <div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Deadline: {new Date(deadline).toLocaleDateString()}</p>
                        </div>

                        <Link to={`/needposts/${_id}`}>
                            <button className="btn inline-block black">See Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;
