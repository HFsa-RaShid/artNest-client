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
import SubCat_Details from "../components/pages/category/subCategoryDetails/SubCat_Details";
import PrivateRoute from "./PrivateRoute";
import ReviewDetails from "../components/pages/homeSections/review/ReviewDetails";
import AllReviews from "../components/pages/homeSections/review/AllReviews";
import UserProfile from "../components/navbar/my profile/UserProfile";
import UpdateProfile from "../components/navbar/my profile/update profile/UpdateProfile";




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
            loader: () => fetch('https://art-nest-server.vercel.app/art')
        },
        
        {
            path: "/addCraft",
            element: <PrivateRoute><AddCraft></AddCraft></PrivateRoute>,
            
        },
        {
            path: "/myCraft",
            element: <PrivateRoute><MyCraft></MyCraft> </PrivateRoute>,
            
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
          element: <PrivateRoute><ArtDetails></ArtDetails></PrivateRoute>,
        },
        {
          path: "/updateArt/:id",
          element: <PrivateRoute><UpdateMyArt></UpdateMyArt></PrivateRoute>,
          
        },
        {
          path: "/allExhibitionCard",
          element: <AllExhibitionCards></AllExhibitionCards>
        },
        {
          path: "/subCategory/:id",
          element: <SubCat_Details></SubCat_Details>,
        },
        {
          path: "/review/:id",
          element: <PrivateRoute><ReviewDetails></ReviewDetails></PrivateRoute>
        },
        {
          path: "/allReview",
          element: <AllReviews></AllReviews>
        },
        {
          path: "/userProfile",
          element: <UserProfile></UserProfile>
        },
        {
          path: "/updateProfile",
          element: <UpdateProfile></UpdateProfile>
        },
        
      ],
    },
  ]);