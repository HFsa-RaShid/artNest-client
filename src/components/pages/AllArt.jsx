
import { Helmet } from "react-helmet";
import { Link, useLoaderData } from "react-router-dom";

const AllArt = () => {
    const arts = useLoaderData();
  
    const Rows = () => {
        return arts.map((art, index) => (
            <tr key={index} className="text-center">
                <td className="box-border border-2 py-2">{index + 1}</td>
                <td className="box-border border-2">{art.item_name}</td> 
                <td className="box-border border-2">{art.subcategory_name}</td> 
                <td className="box-border border-2">{art.price}</td>
                <td className="box-border border-2">{art.rating}</td> 
                <td className="box-border border-2">{art.stock_status}</td>
                <td className="box-border border-2">
                    <Link to={`/art/${art._id}`}>
                    <button className="text-blue-400 hover:underline font-bold">View Details</button>
                   </Link>
                </td> 
            </tr>
        ));
    };


    return (
        <div className="container mx-auto">
            
            <div className=" border-gray-200 p-4 mt-6 min-h-[calc(100vh-40px)]">
                <Helmet>
                <title>All Art | ArtNest</title>
            </Helmet>
                <table className=" px-4 w-full">
                    <thead>
                        <tr className="box-border border-2 text-[10px] md:text-xl">
                            <th className="py-3">Serial Number</th>
                            <th>Item Name</th>
                            <th>Subcategory Name</th>
                            <th>Price</th>
                            <th>Rating</th>
                            <th>Stock Status</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody className="text-[12px] md:text-[18px]">
                        {Rows()}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllArt;
