import { useEffect, useState } from "react";
import PortraitCard from "./portrait/PortraitCard";


const PortraitDrawing = () => {
    const [arts, setArts] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        fetch("http://localhost:5000/subcategory")
            .then((res) => res.json())
            .then((data) => {
                // Filter data for the "Cartoon Drawing" subcategory
                const cartoonDrawingArts = data.filter(item => item.subcategory_name === "Portrait Drawing");
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
                <PortraitCard key={art._id} art={art}></PortraitCard>
            ))}
          </div>
        </div>
    );
};

export default PortraitDrawing;