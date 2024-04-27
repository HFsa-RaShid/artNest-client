import { createBrowserRouter } from "react-router-dom";
import Root from "../components/root/Root";
import ErrorPage from "../components/errorPage/ErrorPage";
import Home from "../components/pages/Home";
import LogIn from "../components/authentication/LogIn";
import Register from "../components/authentication/Register";
import AllArt from "../components/pages/AllArt";
import MyCraft from "../components/pages/MyCraft";
import AddCraft from "../components/pages/AddCraft";
import LandscapePainting from "../components/pages/category/LandscapePainting";
import PortraitDrawing from "../components/pages/category/PortraitDrawing";
import WatercolourPainting from "../components/pages/category/WatercolourPainting";
import OilPainting from "../components/pages/category/OilPainting";
import CharcoalSketching from "../components/pages/category/CharcoalSketching";
import CartoonDrawing from "../components/pages/category/CartoonDrawing";
import ArtDetails from "../components/pages/artCard/ArtDetails";
import UpdateMyArt from "../components/pages/artCard/UpdateMyArt";

import AllExhibitionCards from "../components/pages/homeSections/AllExhibitionCards";




export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      
      children: [
        {
          path: "/",
          element: <Home></Home>,
          
        },
        {
            path: "/login",
            element: <LogIn></LogIn>,
            
        },
        {
            path: "/register",
            element: <Register></Register>,
            
        },
        {
            path: "/allArt",
            element: <AllArt></AllArt>,
            loader: () => fetch('http://localhost:5000/art')
        },
        
        {
            path: "/addCraft",
            element: <AddCraft></AddCraft>,
            
        },
        {
            path: "/myCraft",
            element: <MyCraft></MyCraft>,
            
        },
        {
          path: "/landscapePainting",
          element: <LandscapePainting></LandscapePainting>,
          
        },
        {
          path: "/portraitDrawing",
          element: <PortraitDrawing></PortraitDrawing>,
          
        },
        {
            path: "/watercolourPainting",
            element: <WatercolourPainting></WatercolourPainting>,
            
        },
        {
            path: "/oilPainting",
            element: <OilPainting></OilPainting>,
            
        },
        {
          path: "/charcoalSketching",
          element: <CharcoalSketching></CharcoalSketching>,
          
        },
        {
          path: "/cartoonDrawing",
          element: <CartoonDrawing></CartoonDrawing>,
          
        },
        {
          path: "/art/:id",
          element: <ArtDetails></ArtDetails>,
        },
        {
          path: "/updateArt/:id",
          element: <UpdateMyArt></UpdateMyArt>,
          
        },
        {
          path: "/allExhibitionCard",
          element: <AllExhibitionCards></AllExhibitionCards>
        },
          
        
      ],
    },
  ]);