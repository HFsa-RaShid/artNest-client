import React, { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard';
import { Helmet } from 'react-helmet';

const AllReviews = () => {
    const [arts, setArts] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        fetch("http://localhost:5000/review")
            .then((res) => res.json())
            .then((data) => {
                setArts(data);
                console.log(data)
            })
            .catch((error) => {
                console.error("Error fetching data: ", error);
            });
    }, []);
    return (
        <div className='container mx-auto my-10 px-4 '>
            <Helmet>
                <title>Reviews | ArtNest</title>
            </Helmet>
            <h2 className='text-center text-2xl font-bold'>ALL REVIEWS</h2>
            <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
            
            {arts.map((art) => (
                <ReviewCard key={art._id} art={art}></ReviewCard>
            ))}
          </div>
        </div>
    );
};

export default AllReviews;