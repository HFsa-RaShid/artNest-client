import { useEffect, useState } from "react";
import OilPaintingCard from "./oilPainting/OilPaintingCard";
import { Helmet } from "react-helmet";

const OilPainting = () => {
    const [arts, setArts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://art-nest-server.vercel.app/subcategory")
            .then((res) => res.json())
            .then((data) => {
                const oilPaintingArts = data.filter(item => item.subcategory_name === "Oil Painting");
                setArts(oilPaintingArts);
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
                <title>Oil Painting | ArtNest</title>
            </Helmet>
            <h1 className=" mt-10 mb-5 text-3xl text-center font-bold">OIL PAINTING</h1>
            {loading ? ( 
                <div className="flex justify-center items-center h-screen">
                    <span className="loading loading-spinner loading-lg"></span> 
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
                    {arts.map((art) => (
                        <OilPaintingCard key={art._id} art={art}></OilPaintingCard>
                    ))}
                </div>
            )}
        </div>
    );
};

export default OilPainting;
