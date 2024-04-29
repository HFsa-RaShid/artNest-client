import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


const ExhibitionCard = ({art}) => {
    const {id,museum_name,location,date,image_url} = art;
    const ImageUrl = "https://i.ibb.co/Zx9JR3q/card.jpg"

    useEffect(() => {
        AOS.init({duration: 2000});
    }, []);

    return (
        
            <div className="flex text-white" style={{ backgroundImage: `url(${ImageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }} data-aos = "fade-up">
            
            <div className="w-[40%]">
                <img src={image_url} className="w-full h-full"/>
            </div>
            
            <div className="w-[60%] flex flex-col items-center justify-evenly">
                <h1 className="text-xl text-center font-bold">{museum_name}</h1>
                <p className="text-[18px] text-center">{location}</p>
                <p className=" text-center">Date: {date}</p>
            </div>
        </div>
       
    );
};

export default ExhibitionCard;