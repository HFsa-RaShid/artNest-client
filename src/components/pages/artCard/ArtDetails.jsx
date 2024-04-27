import { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";


const ArtDetails = () => {
    const {id} = useParams();
    console.log(id);
    const [art,setArt] = useState({});

    useEffect(() =>{
        fetch(`http://localhost:5000/arts/${id}`)
        .then(res => res.json())
        .then(data => {
            setArt(data)
            console.log(data);
        })
    },[id])
    
    return (
        <div>
            
           
            <h1>{art._id}</h1>
        </div>
    );
};

export default ArtDetails;