import { Link } from "react-router-dom";
import { FaStar } from 'react-icons/fa';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ReviewCard = ({art}) => {
    const {_id,username,rating,comment,image_url} = art;
 
    useEffect(() => {
        AOS.init({duration: 2000});
    }, []);
   
    return (
        <div className="card card-compact  bg-base-100 shadow-xl" data-aos = "fade-up">
            <figure className="h-[300px]"><img src={image_url} className="w-full" /></figure>
            <div className="card-body">
                <h2 className="card-title">{username}</h2>
                {
                    comment.length > 100 ? 
                    <p>{comment.slice(0,100)}
                    <Link to={`/review/${_id}`} className="text-blue-800 font-bold ml-1">Read More....</Link>
                    </p>
                    :
                    <p>{comment}</p>
                   

                }
                <div className="flex mx-auto my-4">
                <FaStar color="gold" />
                <FaStar color="gold" />
                <FaStar color="gold" />
                <FaStar color="gold" />
                <FaStar color="gold" />

                </div>
                
            </div>
        </div>
        
       
    );
};

export default ReviewCard;