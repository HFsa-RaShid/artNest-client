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
        <div className="mt-16 container mx-auto px-4">
            <h1 className="text-center font-bold text-xl md:text-3xl mb-7">DISCOVER EXHIBITIONS WORLDWIDE</h1>
            
            <div>
                    <div className="flex justify-end mb-5">
                        <Link to='/allExhibitionCard'>
                        <button className="border text-black border-black px-4 py-2 font-bold bg-slate-100">See More...</button>
                        </Link>
                    </div>


                    <div className="md:flex md:h-[500px]  gap-4 lg:gap-10">
                    
                        <div className="md:w-[60%]">
                            <img src={world} className="w-full h-full" />

                        </div>
                        <div className="md:w-[40%] my-2  grid md:grid-cols-1 gap-5">
                        
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