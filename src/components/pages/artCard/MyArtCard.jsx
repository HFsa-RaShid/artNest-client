import { Link } from "react-router-dom";
import { CgDollar } from "react-icons/cg";
import { FcRating } from "react-icons/fc";
const MyArtCard = ({item}) => {
    const {_id,image_url,item_name,price,rating,customization,stock_status} = item;
    return (
        <div className="card  shadow-xl bg-slate-200">
            <figure className="px-8 pt-10 h-[280px] w-full">
                <img src={image_url} alt="Shoes" className="rounded-xl h-full w-full" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{item_name}</h2>

                <div className="flex justify-between">
                    <div className="flex gap-1 items-center">
                    <CgDollar />
                    <p>{price}</p>


                    </div>
                    <div className="flex gap-1 items-center">
                    <FcRating />
                    <p>{rating}</p>

                    </div>

                </div>

                <div className="flex justify-between mb-3">
                    <div>
                    <p>Customization: {customization}</p>
                    </div>
                    <div>
                    <p>Stock: {stock_status}</p>
                    </div>

                </div>
                <Link to={`/art/${_id}`}><button className="w-full bg-slate-500 hover:bg-slate-700 text-white py-2 rounded-xl">Update</button>
                    </Link>
                    <Link to={`/art/${_id}`}><button className="w-full bg-slate-500 hover:bg-slate-700 text-white py-2 rounded-xl">Delete</button>
                    </Link>
                    
            </div>
        </div>
    );
};

export default MyArtCard;