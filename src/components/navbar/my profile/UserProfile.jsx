import { useContext, useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../../Provider/AuthProvider";

const UserProfile = () => {
    const {user} = useContext(AuthContext);

    useEffect(() => {
        AOS.init({duration: 2000});
    }, []);

    return (
        <div data-aos = "fade-up " className="mt-12">
            <Helmet>
                <title>User Profile | ArtNest</title>
            </Helmet>
            <div className="flex container mx-auto w-[90%] md:w-[80%] lg:w-[65%] border h-[250px] md:h-[300px] mt-5 mb-10 gap-5 md:gap-10">
                
                <div className="w-[50%] md:w-[35%] pb-5">
                    <img src={user.photoURL} className="w-full h-[90%]" />
                    <NavLink to='/updateProfile'><button className="underline rounded-xl text-blue-500 py-2 px-4 ">Change Photo</button></NavLink>
                </div>
                <div className="flex flex-col items-center mt-[25%] md:mt-16 w-[50%] md:w-[65%]">
                    <h1 className="text-[22px] md:text-[35px] font-bold text-[#388385] "><span className="text-blue-500 "> Hey!!   </span>{user.displayName}</h1>
                    <p className="text-[10px] my-3 md:text-[20px] font-semibold mb-3">Email: {user.email}</p>
                    

                </div>
            </div>
            
            
        </div>
    );
};

export default UserProfile;