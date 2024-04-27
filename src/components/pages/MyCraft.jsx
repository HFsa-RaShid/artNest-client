import { useContext, useEffect } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useState } from "react";
import MyArtCard from "./artCard/MyArtCard";


const MyCraft = () => {
    const {user}= useContext(AuthContext) || {};
    const [items,setItem] = useState([])
    useEffect(() =>{
        fetch(`http://localhost:5000/myArt/${user?.email}`)
        .then((res) => res.json())
        .then(data =>  
            // console.log(data)
           { setItem(data)}
        )
    },[user]);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 fonts container mx-auto">
            
            {
                items.map((item) => (
                     <MyArtCard key={item._id} item={item} />
                  
                ))
            }
        </div>
    );
};

export default MyCraft;