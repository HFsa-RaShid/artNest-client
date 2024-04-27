import { useEffect, useState } from 'react';
import ExhibitionCard from './ExhibitionCard';

const AllExhibitionCards = () => {
    const [arts, setArts] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        fetch("http://localhost:5000/exhibitions")
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
        <div className='container mx-auto mt-10 '>
            <h2 className='text-center text-2xl font-bold'>WORLDWIDE EXHIBITIONS</h2>
            <div className="  grid grid-cols-2 gap-10 mt-10">
            
            {arts.map((art) => (
                <ExhibitionCard key={art._id} art={art}></ExhibitionCard>
            ))}
          </div>
        </div>
        
    );
};

export default AllExhibitionCards;