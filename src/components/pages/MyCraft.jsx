import { useContext, useEffect } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useState } from "react";
import MyArtCard from "./artCard/MyArtCard";


const MyCraft = () => {
    const {user}= useContext(AuthContext);
    const [items,setItem] = useState([])

    const [customizationFilter, setCustomizationFilter] = useState('');
    useEffect(() =>{
        fetch(`http://localhost:5000/myArt/${user?.email}`)
        .then((res) => res.json())
        .then(data =>  
            // console.log(data)
           { setItem(data)}
        )
    },[user]);



    const handleCustomizationFilterChange = (e) => {
        setCustomizationFilter(e.target.value);
    };

    // Filter items based on customization
    const filteredItems = items.filter(item => {
        if (customizationFilter === '') {
            return true; 
        } else {
            return item.customization === customizationFilter; 
        }
    });
    return (
        <div className=" container mx-auto min-h-screen">
            <div className="   mt-10 mb-5">
                <label className="block text-gray-700 text-3xl text-center font-bold mb-2" htmlFor="customizationFilter">
                    Filter by Customization
                </label>
                <select
                    className="flex w-[15%] mx-auto shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="customizationFilter"
                    value={customizationFilter}
                    onChange={handleCustomizationFilterChange}
                >
                    <option value="">All</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 fonts container mx-auto">
                {filteredItems.map(item => (
                     <MyArtCard key={item._id} item={item} />
                ))}
            </div>
            
        </div>
    );
};

export default MyCraft;