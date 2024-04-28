
import { useEffect, useState } from "react";
import { CgDollar } from "react-icons/cg";
import { FcRating } from "react-icons/fc";
import { useParams } from "react-router-dom";


const SubCat_Details = () => {
    const {id} = useParams();
    console.log(id);
    const [art,setArt] = useState({});
    const ImageUrl = "https://i.ibb.co/Zx9JR3q/card.jpg"

    useEffect(() =>{
        fetch(`http://localhost:5000/subCategory/${id}`)
        .then(res => res.json())
        .then(data => {
            setArt(data)
            console.log(data);
        })
    },[id])
    return (
        <div className="container mx-auto">
            
            <div className="flex mt-10 h-[500px] gap-8 border p-10 text-white" style={{ backgroundImage: `url(${ImageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="w-[35%] h-full">
                    <img src={art.image} className="w-[90%] max-h-full mx-auto " />
                </div>
                <div className="w-[65%] ">
                    <h1 className="text-3xl font-bold mb-8">{art.item_name}</h1>
                    <p className="text-xl font-bold my-2">{art.subcategory_name}</p>
                    <p className=" my-6"><span className="text-[18px] font-bold ">Description:</span> {art.
                    short_description}</p>
                    
                    <div className="flex items-center">
                    
                        <p className="text-[18px] my-2 font-bold">Price: </p>
                        <CgDollar />
                        <p className="text-[18px] ">{art.price}</p>
                    </div>

                    <div className="flex items-center gap-2">
                        <p className="text-[18px] my-2 font-bold">Rating: </p>
                        <FcRating />
                        <p className="text-[18px]">{art.rating}</p>
                    </div>
                    <p className="text-[18px] "><span className="font-bold">Status:</span> {art.stockStatus}</p>
                    <p className="text-[18px] my-2"><span className="font-bold">Customization:</span> {art.customization}</p>
                    <p className="text-[18px] "><span className="font-bold">Processing Time:</span> {art.processing_time}</p>
                </div>

            </div>
           
            

        </div>
    );
};

export default SubCat_Details;

   
    