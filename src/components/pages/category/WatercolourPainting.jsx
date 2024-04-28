import { useEffect, useState } from "react";
import WaterColorCard from "./waterColor/WaterColorCard";


const WatercolourPainting = () => {
    const [arts, setArts] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        fetch("http://localhost:5000/subcategory")
            .then((res) => res.json())
            .then((data) => {
               
                const cartoonDrawingArts = data.filter(item => item.subcategory_name === "Watercolour Painting");
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
                <WaterColorCard key={art._id} art={art}></WaterColorCard>
            ))}
          </div>
        </div>
    );
};

export default WatercolourPainting;