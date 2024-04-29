import { Link } from "react-router-dom";

import { CgDollar } from "react-icons/cg";
import { FaStar } from 'react-icons/fa';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Art = ({art}) => {
    const {_id,image_url,item_name,subcategory_name,price,rating} = art
    const ImageUrl = "https://i.ibb.co/Zx9JR3q/card.jpg"
    useEffect(() => {
        AOS.init({duration: 2000});
    }, []);
    return (
        <div className="card text-white  shadow-xl bg-slate-200" style={{ backgroundImage: `url(${ImageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }} data-aos = "fade-up">
            
                <figure className="px-6 pt-6 w-full h-[280px]">
                    <img src={image_url} className="rounded-xl border h-full w-full" />
                </figure>
                <div className="card-body ">
                    <h2 className="card-title">{item_name}</h2>
                    
                        <p>Category: {subcategory_name}</p>
                        
                    

                    <div className="flex justify-between">

                        <div className="flex gap-1 items-center">
                        <CgDollar />
                        <p>{price}</p>


                        </div>
                        <div className="flex gap-1 items-center">
                        <FaStar color="gold" />
                        <p>{rating}</p>

                        </div>

                    </div>
                    
                    <Link to={`/art/${_id}`}><button className="w-full bg-slate-500 hover:bg-slate-700 text-white py-2 rounded-xl">View Details</button>
                    </Link> 
                </div>
            </div>
    );
};

export default Art;