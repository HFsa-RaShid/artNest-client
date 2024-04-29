import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import { Link } from "react-router-dom";

const Review = () => {
    const [arts, setArts] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        fetch("https://art-nest-server.vercel.app/review")
            .then((res) => res.json())
            .then((data) => {
                setArts(data);
                console.log(data)
            })
            .catch((error) => {
                console.error("Error fetching data: ", error);
            });
    }, []);

    

    const renderedArts = showAll ? arts : arts.slice(0, 3);
    return (
        <div className="container mx-auto mt-10 mb-16">
            <div className='App my-8'>
            <h1 className="mt-16 mb-8 text-center text-3xl font-bold" style={{ paddingTop: '2rem', margin: 'auto 0', fontWeight: 'bold' }}>
            {'RE'}
        <span style={{  fontWeight: 'bold' }}>
          
          <Typewriter
            words={['VIEWS...']}
            loop={true}
            cursor
            cursorStyle='|'
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1000}
           
          />
        </span>
      </h1>
    </div>
    <div className="flex justify-end mb-5 px-4 ">
                        <Link to='/allReview'>
                        <button className="border text-black border-black px-4 py-2 font-bold bg-slate-100">See More...</button>
                        </Link>
                    </div>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 px-4">
                        
                        {renderedArts.map((art) => (
                            <ReviewCard key={art._id} art={art}></ReviewCard>
                            ))}
                        </div>

            
        </div>
    );
};

export default Review;

