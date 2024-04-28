import { useEffect, useState } from "react";
import LandScapeCard from "./landScape/LandScapeCard";
import { Helmet } from "react-helmet";

const LandscapePainting = () => {
    const [arts, setArts] = useState([]);
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        fetch("http://localhost:5000/subcategory")
            .then((res) => res.json())
            .then((data) => {
                const landscapePaintingArts = data.filter(item => item.subcategory_name === "Landscape Painting");
                setArts(landscapePaintingArts);
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
                <title>Landscape Painting | ArtNest</title>
            </Helmet>
            <h1 className=" mt-10 mb-5 text-3xl text-center font-bold">LANDSCAPE PAINTING</h1>
            {loading ? ( 
                <div className="flex justify-center items-center h-screen">
                    <span className="loading loading-spinner loading-lg"></span> 
                </div>
            ) : (
                <div className="grid grid-cols-3 gap-10 mt-10">
                    {arts.map((art) => (
                        <LandScapeCard key={art._id} art={art}></LandScapeCard>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LandscapePainting;
