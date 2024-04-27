
import { useState, useEffect } from "react";
import Art from "../artCard/Art";
import { Link } from "react-router-dom";


const HomeCards = () => {
    const [arts, setArts] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        fetch("http://localhost:5000/art")
            .then((res) => res.json())
            .then((data) => {
                setArts(data);
            })
            .catch((error) => {
                console.error("Error fetching data: ", error);
            });
    }, []);

    

    const renderedArts = showAll ? arts : arts.slice(0, 6);

    return (
        <div className="container mx-auto ">
            <h1 className="mt-16 mb-8 text-center text-3xl font-bold">PAINTING & DRAWING</h1>
            <div className="grid grid-cols-3 gap-14">
                {renderedArts.map((art) => (
                    <Art key={art._id} art={art} />
                ))}
            </div>
            
            <div className="mt-10">
                <Link to='/allArt'>
                <button
                    className=" flex mx-auto text-white font-bold py-2 rounded mt-4 bg-slate-600 hover:bg-slate-700 px-8">
                    See More..
                </button>
                </Link>
            </div>
            
        </div>
    );
};

export default HomeCards;
