import { useContext, useEffect, useState} from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import 'animate.css';
import { AuthContext } from "../../Provider/AuthProvider";
import { Tooltip } from 'react-tooltip'
import { BsThreeDotsVertical } from "react-icons/bs";

const Navbar = () => {
  const navigate = useNavigate()
    const {logOut,user,photoLink}= useContext(AuthContext)
  console.log(user);
 
  
  const handleSignOut = () =>{
    logOut()
    .then(() =>{
      navigate('/')
    })
    .catch()

  }

  // theme
 const [theme,setTheme] =useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");
  const handleToggle = e =>{
    if(e.target.checked){
      setTheme("dark");

    }
    else{
      setTheme("light");
    }
  }
 useEffect(() =>{
  localStorage.setItem("theme",theme);
  const localTheme = localStorage.getItem("theme");
  document.querySelector("html").setAttribute("data-theme",localTheme);

 },[theme])




    return (
        <div className="sticky top-0 z-50  shadow-2xl bg-black">
            <div className="navbar container mx-auto text-white">
            <div className="navbar-start ">
              <div className="dropdown ">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden ">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>

                <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52 font-semibold text-[18px] animate__animated animate__fadeInDown text-black bg-white">
                <li><NavLink className={({ isActive }) =>
                            isActive ? 'text-black bg-white ' : ' '
                        } to='/'>Home</NavLink></li>
            <li><NavLink className={({ isActive }) =>
                            isActive ? 'text-black bg-white ' : ' '
                        } to='/allArt'>All Art & Craft</NavLink></li>
            <li><NavLink className={({ isActive }) =>
                            isActive ? 'text-black bg-white ' : ' '
                        } to='/addCraft'>Add Art</NavLink></li>
            <li><NavLink className={({ isActive }) =>
                            isActive ? 'text-black bg-white ' : ' '
                        } to='/myCraft'>My Art</NavLink></li>
            <li>
              <details className="shadow-lg ">
                <summary>Category</summary>
                <ul className="p-2  text-white bg-black">
                  <li><NavLink to='/landscapePainting'>Landscape Painting</NavLink></li>
                  <li><NavLink to='/portraitDrawing'>Portrait Drawing</NavLink></li>
                  <li><NavLink to='/watercolourPainting'>Watercolour Painting</NavLink></li>
                  <li><NavLink to='/oilPainting'>Oil Painting</NavLink></li>
                  <li><NavLink to='/charcoalSketching'>Charcoal Sketching</NavLink></li>
                  <li><NavLink to='/cartoonDrawing'>Cartoon Drawing</NavLink></li>
                  
                </ul>
              </details>
            </li>
            </ul>

              </div>
              <div className=" animate__animated animate__fadeInLeft">
              <h1 className=" font-bold text-[18px] "><span className="text-3xl font-bold bg-white text-black">Art</span>Nest</h1>

              </div>
            </div>
            <div className="navbar-center hidden lg:flex shadow-lg ">
            <ul className="menu menu-horizontal px-1  flex flex-col lg:flex-row font-semibold text-[18px] animate__animated animate__fadeInDown">
            <li><NavLink className={({ isActive }) =>
                            isActive ? 'text-black bg-white ' : ' '
                        } to='/'>Home</NavLink></li>
            <li><NavLink className={({ isActive }) =>
                            isActive ? 'text-black bg-white ' : ' '
                        } to='/allArt'>All Art & Craft</NavLink></li>
            <li><NavLink className={({ isActive }) =>
                            isActive ? 'text-black bg-white ' : ' '
                        } to='/addCraft'>Add Art</NavLink></li>
            <li><NavLink className={({ isActive }) =>
                            isActive ? 'text-black bg-white ' : ' '
                        } to='/myCraft'>My Art</NavLink></li>
            <li>
              <details>
                <summary>Category</summary>
                <ul className="p-2 w-[250px] text-black bg-white ">
                  <li><NavLink to='/landscapePainting'>Landscape Painting</NavLink></li>
                  <li><NavLink to='/portraitDrawing'>Portrait Drawing</NavLink></li>
                  <li><NavLink to='/watercolourPainting'>Watercolour Painting</NavLink></li>
                  <li><NavLink to='/oilPainting'>Oil Painting</NavLink></li>
                  <li><NavLink to='/charcoalSketching'>Charcoal Sketching</NavLink></li>
                  <li><NavLink to='/cartoonDrawing'>Cartoon Drawing</NavLink></li>
                  
                </ul>
              </details>
            </li>
          </ul>
              
            </div>
            <div className="navbar-end">
            <label className="swap swap-rotate">

                <input type="checkbox" onChange={handleToggle} checked={theme === "light" ? false : true}
                className="theme-controller" value="synthwave" />
              
                <svg className="swap-off fill-current w-9 h-9 pr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
                
                
                <svg className="swap-on fill-current w-9 h-9 pr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
                
              </label>
           

              {
                user ?
                    <div className="flex gap-3 animate__animated animate__fadeInRight">
   
                        <div >
                          <div className="  w-10 h-10 rounded-full border border-black">
                        
                            <img  src={user.photoURL ? user.photoURL : photoLink}  className=" my-anchor-element h-full w-full mx-auto rounded-full " />

                            <Tooltip anchorSelect=".my-anchor-element" >
                            {user.displayName}
                            </Tooltip>
                  
                          </div>
                         
    
                        </div>
                        
                  
                        <button onClick={handleSignOut} className="py-2 px-4  rounded-xl font-bold border border-white text-[12px] lg:text-[18px]">Sign Out</button>

                        <div className="relative inline-block group ">
                  <button className="mt-2 text-[18px] md:text-2xl" ><BsThreeDotsVertical /></button>
                    <ul className="menu bg-gray-200 w-56 rounded-lg absolute hidden top-0 right-0 mt-6 group-hover:block text-black">
                      
                        <li><Link to='/userProfile' className="block px-4 py-2 text-gray-800 hover:bg-gray-400">
                        My Profile
                        </Link></li>
                        <li><Link to='' className="block px-4 py-2 text-gray-800 hover:bg-gray-400">
                          Settings
                        </Link></li>
                        
                    </ul>
                </div>

                    </div>

                    
                

                :
                    <div className="flex gap-2 animate__animated animate__fadeInRight ">
                      <Link to='/login'><button className="py-2 px-4 bg-black text-white rounded-xl  border border-white ">Sign In</button></Link>
                    
                    </div>

              }

                




              
              
            </div>
            </div>
           
        </div>
    );
};

export default Navbar;