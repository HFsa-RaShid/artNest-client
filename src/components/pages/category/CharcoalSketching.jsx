import { useEffect, useState } from "react";
import CharcoalCard from "./Charcoalcard/CharcoalCard";


const CharcoalSketching = () => {
    const [arts, setArts] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        fetch("http://localhost:5000/subcategory")
            .then((res) => res.json())
            .then((data) => {
                // Filter data for the "Cartoon Drawing" subcategory
                const cartoonDrawingArts = data.filter(item => item.subcategory_name === "Charcoal Sketching");
                setArts(cartoonDrawingArts);
                console.log(cartoonDrawingArts);
            })
            .catch((error) => {
                console.error("Error fetching data: ", error);
            });
    }, []);
    return (
        <div>
            <div className="  grid grid-cols-3 gap-10 mt-10">
            
            {arts.map((art) => (
                <CharcoalCard key={art._id} art={art}></CharcoalCard>
            ))}
          </div>
        </div>
    );
};

export default CharcoalSketching;