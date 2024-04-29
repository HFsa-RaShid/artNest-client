import { useEffect, useState } from "react";
import PortraitCard from "./portrait/PortraitCard";
import { Helmet } from "react-helmet";

const PortraitDrawing = () => {
    const [arts, setArts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:5000/subcategory")
            .then((res) => res.json())
            .then((data) => {
                const portraitDrawingArts = data.filter(item => item.subcategory_name === "Portrait Drawing");
                setArts(portraitDrawingArts);
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
                <title>Portrait Drawing | ArtNest</title>
            </Helmet>
            <h1 className=" mt-10 mb-5 text-3xl text-center font-bold">PORTRAIT DRAWING</h1>
            {loading ? ( 
                <div className="flex justify-center items-center h-screen">
                    <span className="loading loading-spinner loading-lg"></span> 
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
                    {arts.map((art) => (
                        <PortraitCard key={art._id} art={art}></PortraitCard>
                    ))}
                </div>
            )}
        </div>
    );
};

export default PortraitDrawing;
