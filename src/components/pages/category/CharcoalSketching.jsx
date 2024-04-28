import { useEffect, useState } from "react";
import CharcoalCard from "./Charcoalcard/CharcoalCard";
import { Helmet } from "react-helmet";

const CharcoalSketching = () => {
    const [arts, setArts] = useState([]);
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        fetch("http://localhost:5000/subcategory")
            .then((res) => res.json())
            .then((data) => {
                const charcoalSketchingArts = data.filter(item => item.subcategory_name === "Charcoal Sketching");
                setArts(charcoalSketchingArts);
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
                <title>Charcoal Sketching | ArtNest</title>
            </Helmet>
            <h1 className=" mt-10 mb-5 text-3xl text-center font-bold">CHARCOAL SKETCHING</h1>
            {loading ? ( 
                <div className="flex justify-center items-center h-screen">
                    <span className="loading loading-spinner loading-lg"></span> 
                </div>
            ) : (
                <div className="grid grid-cols-3 gap-10 mt-10">
                    {arts.map((art) => (
                        <CharcoalCard key={art._id} art={art}></CharcoalCard>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CharcoalSketching;
