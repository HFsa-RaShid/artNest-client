import { useLoaderData } from "react-router-dom";
import Art from "./artCard/Art";


const AllArt = () => {
    const arts = useLoaderData();
    return (
        <div className="grid grid-cols-3 container mx-auto gap-14">
            {
                arts.map(art => <Art key={art._id} art={art}></Art>)
            }
            
        </div>
    );
};

export default AllArt;