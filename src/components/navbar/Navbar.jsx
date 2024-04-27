import { useContext} from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { RiHomeHeartFill } from "react-icons/ri";
import 'animate.css';
import { AuthContext } from "../../Provider/AuthProvider";


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

    
    return (
        <div className="sticky top-0 z-50  shadow-2xl bg-black">
            <div className="navbar container mx-auto text-white">
            <div className="navbar-start ">
              <div className="dropdown ">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>

                <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-semibold text-[18px] animate__animated animate__fadeInDown text-black">
              <li><NavLink to='/'>Home</NavLink></li>
              <li><NavLink to='/allArt'>All Art & Craft</NavLink></li>
              <li><NavLink to='/addCraft'>Add Art</NavLink></li>
              <li><NavLink to='/myCraft'>My Art</NavLink></li>
              <li>
              <details>
                <summary>Category</summary>
                <ul className="p-2  text-black">
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
              <h1 className=" font-bold text-[18px] "><span className="text-4xl font-bold bg-white text-black">Art</span>Nest</h1>

              </div>
            </div>
            <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1  flex flex-col lg:flex-row font-semibold text-[18px] animate__animated animate__fadeInDown">
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/allArt'>All Art & Craft</NavLink></li>
            <li><NavLink to='/addCraft'>Add Art</NavLink></li>
            <li><NavLink to='/myCraft'>My Art</NavLink></li>
            <li>
              <details>
                <summary>Category</summary>
                <ul className="p-2 w-[250px] text-black">
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
              {/* <ul className="menu menu-horizontal px-1  flex flex-col lg:flex-row font-semibold text-[18px] animate__animated animate__fadeInDown">
                
                  {links}
              </ul> */}
            </div>
            <div className="navbar-end">
              {
                user ?
                    <div className="flex gap-3 animate__animated animate__fadeInRight">
                        <div className="tooltip tooltip-hover tooltip-bottom" data-tip={user.displayName}>
                          <div className="w-10 h-10 rounded-full border border-black">
                        
                            <img  src={user.photoURL ? user.photoURL : photoLink}  className="h-full w-full mx-auto rounded-full" />
                          </div>
    
                        </div>
                  
                  
                        <button onClick={handleSignOut} className="py-2 px-4  rounded-xl font-bold border border-white">Sign Out</button>

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