import { useContext, useEffect } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useState } from "react";
import Swal from "sweetalert2";
import { CgDollar } from "react-icons/cg";
import { FcRating } from "react-icons/fc";
import { Link } from "react-router-dom";

const MyCraft = () => {
    const {user}= useContext(AuthContext);
    const [items,setItem] = useState([]);
    const [control,setControl] = useState(false)
   
    

    const [customizationFilter, setCustomizationFilter] = useState('');
    useEffect(() =>{
        fetch(`http://localhost:5000/myArt/${user?.email}`)
        .then((res) => res.json())
        .then(data =>  
            // console.log(data)
           { setItem(data)}
        )
    },[user,control]);



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

    const handleDelete = _id =>{
        // console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {

            if (result.isConfirmed) {
             
              fetch(`http://localhost:5000/art/${_id}`,{
                method: 'DELETE'

              })
              .then( res => res.json())
              .then(data =>{
                console.log(data);
                if(data.deletedCount > 0){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your Art has been deleted.",
                        icon: "success"
                      })
                      setControl(!control);
                }
              })
            }
          });
    }


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
                   
                    <div key={item._id} className="card  shadow-xl bg-slate-200">
                        
                    <figure className="px-8 pt-10 h-[280px] w-full">
                        <img src={item.image_url} alt="Shoes" className="rounded-xl h-full w-full" />
                    </figure>
                   
                    <div className="card-body">
                        <h2 className="card-title">{item.item_name}</h2>
        
                        <div className="flex justify-between">
                            <div className="flex gap-1 items-center">
                            <CgDollar />
                            <p>{item.price}</p>
        
        
                            </div>
                            <div className="flex gap-1 items-center">
                            <FcRating />
                            <p>{item.rating}</p>
        
                            </div>
        
                        </div>
        
                        <div className="flex justify-between mb-3">
                            <div>
                            <p>Customization: {item.customization}</p>
                            </div>
                            <div>
                            <p>Stock: {item.stock_status}</p>
                            </div>
        
                        </div>
                        <Link to={`/updateArt/${item._id}`}><button className="w-full bg-slate-500 hover:bg-slate-700 text-white py-2 rounded-xl">Update</button>
                            </Link>
                        <button onClick={() => handleDelete(item._id)} className="w-full bg-slate-500 hover:bg-slate-700 text-white py-2 rounded-xl">Delete</button>
                            
                            
                    </div>
                </div>
                    
                ))}
            </div>
            
        </div>
    );
};

export default MyCraft;