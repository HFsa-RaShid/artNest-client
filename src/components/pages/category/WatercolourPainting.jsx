import { useEffect, useState } from "react";
import WaterColorCard from "./waterColor/WaterColorCard";
import { Helmet } from "react-helmet";

const WatercolourPainting = () => {
    const [arts, setArts] = useState([]);
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        fetch("http://localhost:5000/subcategory")
            .then((res) => res.json())
            .then((data) => {
            
                const watercolorPaintingArts = data.filter(item => item.subcategory_name === "Watercolour Painting");
                setArts(watercolorPaintingArts);
                setLoading(false); 
            })
            .catch((error) => {
                console.error("Error fetching data: ", error);
                setLoading(false); 
            });
    }, []);

    return (
        <div className="container mx-auto min-h-screen">
            <Helmet>
                <title> Watercolour Painting | ArtNest</title>
            </Helmet>
            <h1 className=" mt-10 mb-5 text-3xl text-center font-bold">WATERCOLOR PAINTING</h1>
            {loading ? ( 
                <div className="flex justify-center items-center h-screen">
                    <span className="loading loading-spinner loading-lg"></span> 
                </div>
            ) : (
                <div className="grid grid-cols-3 gap-10 mt-10">
                    {arts.map((art) => (
                        <WaterColorCard key={art._id} art={art}></WaterColorCard>
                    ))}
                </div>
            )}
        </div>
    );
};

export default WatercolourPainting;
