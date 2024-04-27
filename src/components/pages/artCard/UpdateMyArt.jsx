
import {  useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';


const UpdateMyArt = () => {
    const {id} = useParams();
    console.log(id);
    const [art,setArt] = useState({});
    const [control,setControl] =useState(false);

    useEffect(() =>{
        fetch(`http://localhost:5000/arts/${id}`)
        .then(res => res.json())
        .then(data => {
            setArt(data);
            setControl(data);
            // console.log(data);
        })
    },[id,control])

    const formRef = useRef(null);

    const handleUpdateArt = e =>{
        e.preventDefault();
        const form = e.target;
        const image_url = form.image_url.value;
        const item_name = form.item_name.value;
        const subcategory_name = form.subcategory_name.value;
        const description = form.description.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const stock_status = form.stock_status.value;
        const customization = form.customization.value;
        const processing_time = form.processing_time.value;
        const updatedArt = {image_url,item_name,subcategory_name,description,price,rating,customization,processing_time,stock_status}
        console.log(updatedArt);

        // send data to the server
        fetch(`http://localhost:5000/arts/${art._id}`,{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'

            },
            body: JSON.stringify(updatedArt)
        })
        .then(res => res.json())
        .then(data =>{
            // console.log(data);
            if(data.modifiedCount > 0){
                setControl(!control)
                Swal.fire({
                    title: "Success!",
                    text: "Art Updated Successfully",
                    icon: "success"
                  })
                  formRef.current.reset();
            }
            else{
                Swal.fire({
                    title: "Sorry!",
                    text: "Please Try Again",
                    icon: "error"
                  })
            }
           

        })
    }

    
    return (
        <div className="w-[80%] mx-auto mt-10">
                    <Helmet>
                <title>Update Art | ArtNest</title>
            </Helmet>

            <h1 className="text-center mb-5 text-3xl font-bold">UPDATE YOUR ART: {art.item_name}</h1>
        
                  <form  className="bg-slate-200 shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleUpdateArt} ref={formRef}>
                    <div className="grid grid-cols-2 gap-6 ">
                    <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image_url">
                        Image URL
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        name="image_url"
                        type="text"
                        required
                        placeholder="Image URL"
                        defaultValue={art.image_url}
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="item_name">
                        Item Name
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        name="item_name"
                        type="text"
                        placeholder="Item Name"
                        defaultValue={art.item_name}
                        required
                      />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subcategory_name">
                            Subcategory Name
                        </label>
                        <select
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name="subcategory_name"
                            
                            required
                        >
                            <option value="">{art.subcategory_name}</option>
                            <option value="Landscape Painting">Landscape Painting</option>
                            <option value="Portrait Drawing">Portrait Drawing</option>
                            <option value="Watercolour Painting">Watercolour Painting</option>
                            <option value="Oil Painting">Oil Painting</option>
                            <option value="Charcoal Sketching">Charcoal Sketching</option>
                            <option value="Cartoon Drawing">Cartoon Drawing</option>
                        </select>
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="short_description">
                        Short Description
                      </label>
                      <textarea
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        name="description"
                        placeholder="Short Description"
                        defaultValue={art.description}
                        required
                      ></textarea>
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
                        Price
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        name="price"
                        type="text"
                        placeholder="Price"
                        defaultValue={art.price}
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="rating">
                        Rating
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        name="rating"
                        type="text"
                        placeholder="Rating"
                        defaultValue={art.rating}
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="customization">
                        Customization
                      </label>
                      <select
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        name="customization"
                        defaultValue={art.customization}
                        required
                      >
                        <option>Yes</option>
                        <option>No</option>
                      </select>
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="processing_time">
                        Processing Time
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        name="processing_time"
                        type="text"
                        placeholder="Processing Time"
                        defaultValue={art.processing_time}
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="stock_status">
                        Stock Status
                      </label>
                      <select
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        name="stock_status"
                        defaultValue={art.stock_status}
                        required
                      >
                        <option>In stock</option>
                        <option>Made to Order</option>
                      </select>
                    </div>
                    
                    
                    
                    </div>
                    <div className="flex items-center justify-between ">
                      <button
                        className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                        type="submit"
                      >
                        UPDATE
                      </button>
                    </div>
                  </form>
                </div>
    );
};

export default UpdateMyArt;