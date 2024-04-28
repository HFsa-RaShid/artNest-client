import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import 'react-tooltip/dist/react-tooltip.css'

const Root = () => {
    return (
        <div className="fonts">
           
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
           
        </div>
    );
};

export default Root;