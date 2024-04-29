import { useEffect, useState } from "react";
import CartoonDrawCard from "./CartoonDrawingCard/CartoonDrawCard";
import { Helmet } from "react-helmet";

const CartoonDrawing = () => {
    const [arts, setArts] = useState([]);
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        fetch("http://localhost:5000/subcategory")
            .then((res) => res.json())
            .then((data) => {
                const cartoonDrawingArts = data.filter(item => item.subcategory_name === "Cartoon Drawing");
                setArts(cartoonDrawingArts);
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
                <title>Cartoon Drawing | ArtNest</title>
            </Helmet>
            <h1 className=" mt-10 mb-5 text-3xl text-center font-bold">CARTOON DRAWING</h1>
            {loading ? ( 
                <div className="flex justify-center items-center h-screen">
                    <span className="loading loading-spinner loading-lg"></span>
                </div>
            ) : (
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
                    
                    {arts.map((art) => (
                        <CartoonDrawCard key={art._id} art={art}></CartoonDrawCard>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CartoonDrawing;
