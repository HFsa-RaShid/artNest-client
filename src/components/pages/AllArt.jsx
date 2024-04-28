
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

    const TableBox = () => {
        return (
            <div className=" border-gray-200 p-4 mt-6 min-h-[calc(100vh-40px)]">
                <Helmet>
                <title>All Art | ArtNest</title>
            </Helmet>
                <table className="table-auto  w-full">
                    <thead>
                        <tr className="box-border border-2 text-xl">
                            <th className="py-3">Serial Number</th>
                            <th>Item Name</th>
                            <th>Subcategory Name</th>
                            <th>Price</th>
                            <th>Rating</th>
                            <th>Stock Status</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Rows()}
                    </tbody>
                </table>
            </div>
        );
    };

    return (
        <div className="container mx-auto">
            {TableBox()}
        </div>
    );
};

export default AllArt;
