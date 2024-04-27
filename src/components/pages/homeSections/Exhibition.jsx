import { useEffect, useState } from "react";
import world from '../../../assets/image/w.jpg'
import ExhibitionCard from "./ExhibitionCard";
import { Link } from "react-router-dom";

const Exhibition = () => {
    const [arts, setArts] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        fetch("http://localhost:5000/exhibitions")
            .then((res) => res.json())
            .then((data) => {
                setArts(data);
                console.log(data)
            })
            .catch((error) => {
                console.error("Error fetching data: ", error);
            });
    }, []);

    

    const renderedArts = showAll ? arts : arts.slice(0, 3);
    return (
        <div className="mt-16 container mx-auto ">
            <h1 className="text-center font-bold text-3xl mb-7">DISCOVER EXHIBITIONS WORLDWIDE</h1>
            
            <div>
                    <div className="flex justify-end mb-5">
                        <Link to='/allExhibitionCard'>
                        <button className="border border-black px-4 py-2 font-bold">See More...</button>
                        </Link>
                    </div>


                    <div className="flex h-[500px]  gap-10">
                    
                        <div className="w-[60%]">
                            <img src={world} className="w-full h-full" />

                        </div>
                        <div className="w-[40%]  grid grid-cols-1 gap-5">
                        
                        {renderedArts.map((art) => (
                            <ExhibitionCard key={art._id} art={art}></ExhibitionCard>
                            ))}
                        </div>
            
                    </div>
            </div>
            
           
        </div>
    );
};

export default Exhibition;