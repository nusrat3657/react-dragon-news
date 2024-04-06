/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const NewsCard = ({ news }) => {
    const { title, image_url, details, _id, author } = news
    return (
        <div className="mb-6 border-2 rounded-xl">
            <div className="flex bg-gray-200 px-3 pt-2 gap-4  rounded-t-lg">
                <div className="avatar">
                    <div className="w-10 h-[85%] rounded-full">
                        <img src={author.img} />
                    </div>
                </div>
                <div>
                    <h4 className="font bold">{author.name}</h4>
                    <p>{author.published_date}</p>
                </div>
            </div>
            <div className="card ">
                <h2 className="card-title p-5">{title}</h2>
                <figure className="px-5"><img src={image_url} alt="Shoes" /></figure>
                <div className="card-body">
                    
                    {
                        details.length > 200 
                        ? <p>{details.slice(0,200)}... <Link
                        to={`/news/${_id}`} 
                        className="font-semibold text-orange-400">Read More</Link></p>
                        : <p>{details}</p>
                    }
                    <hr />

                </div>
            </div>
        </div>
    );
};

export default NewsCard;