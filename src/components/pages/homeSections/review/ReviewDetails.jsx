import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
const ReviewDetails = () => {
    const {id} = useParams();
    console.log(id);
    const [art,setArt] = useState({});
    const ImageUrl = "https://i.ibb.co/Zx9JR3q/card.jpg"

    useEffect(() =>{
        fetch(`https://art-nest-server.vercel.app/review/${id}`)
        .then(res => res.json())
        .then(data => {
            setArt(data)
            console.log(data);
        })
    },[id])
    return (
        <div className="container mx-auto my-10">
            <Helmet>
                <title>Review Details | ArtNest</title>
            </Helmet>
            <div className="flex h-[500px] gap-8 border p-10 text-white" style={{ backgroundImage: `url(${ImageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="w-[35%] h-full">
                    <img src={art.image_url} className="w-[90%] max-h-full mx-auto " />
                </div>
                <div className="w-[65%] mt-10">
                    <h1 className="text-3xl font-bold">{art.username}</h1>
                    <p className="text-xl font-bold my-5">{art.subcategory_name}</p>
                    <p className=" my-2"><span className="text-[18px] font-bold">Comment:</span> {art.comment}</p>
                    
                    <div className="flex items-center gap-2">
                        <p className="text-[18px] my-2 font-bold">Rating: </p>
                        <FaStar color="gold" />
                        <p className="text-[18px]">{art.rating}</p>
                    </div>
                    
                </div>

            </div>
           
            

        </div>
    );
};

export default ReviewDetails;