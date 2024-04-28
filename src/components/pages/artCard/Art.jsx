import { Link } from "react-router-dom";


const Art = ({art}) => {
    const {_id,image_url,item_name,subcategory_name,price,rating} = art
    const ImageUrl = "https://i.ibb.co/Zx9JR3q/card.jpg"
    return (
        <div className="card text-white  shadow-xl bg-slate-200" style={{ backgroundImage: `url(${ImageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <figure className="px-6 pt-6 w-full h-[280px]">
                    <img src={image_url} className="rounded-xl border h-full w-full" />
                </figure>
                <div className="card-body ">
                    <h2 className="card-title">{item_name}</h2>
                    <div className="flex justify-between">
                        <p>Category: {subcategory_name}</p>
                        <p>Rating: {rating}</p>
                    </div>
                    <p>{price}</p>
                    
                    <Link to={`/art/${_id}`}><button className="w-full bg-slate-500 hover:bg-slate-700 text-white py-2 rounded-xl">View Details</button>
                    </Link> 
                </div>
            </div>
    );
};

export default Art;