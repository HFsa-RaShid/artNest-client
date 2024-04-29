import { useState, useEffect } from "react";
import Art from "../artCard/Art";
import { Link } from "react-router-dom";
import { Typewriter } from 'react-simple-typewriter'

const HomeCards = () => {
    const [arts, setArts] = useState([]);
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        fetch("http://localhost:5000/art")
            .then((res) => res.json())
            .then((data) => {
                setArts(data);
                setLoading(false); 
            })
            .catch((error) => {
                console.error("Error fetching data: ", error);
                setLoading(false); 
            });
    }, []);

    const renderedArts = arts.slice(0, 6);

    return (
        <div className="container mx-auto">
            <div className='App my-8'>
                <h1 className="mt-16 mb-8 text-center text-xl md:text-3xl font-bold" style={{ paddingTop: '2rem', margin: 'auto 0', fontWeight: 'bold' }}>
                    {'PAINTING '}
                    <span style={{ fontWeight: 'bold' }}>
                        <Typewriter
                            words={[' & DRAWING LIST']}
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

            {loading ? ( 
                <div className="text-center">
                    <span className="loading loading-spinner loading-lg"></span>
                </div>
            ) : (
                <div data-aos="fade-up"
                data-aos-duration="3000">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 px-4">
                        {renderedArts.map((art) => (
                            <Art key={art._id} art={art} />
                        ))}
                    </div>
                    <div className="mt-10">
                        <Link to='/allArt'>
                            <button className="flex mx-auto text-white font-bold py-2 rounded mt-4 bg-slate-600 hover:bg-slate-700 px-8">
                                See More..
                            </button>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default HomeCards;
