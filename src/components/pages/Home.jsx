

import { Helmet } from 'react-helmet';
import Banner from '../banner/Banner';
import Exhibition from './homeSections/Exhibition';
import HomeCards from './homeSections/HomeCards';


const Home = () => {
    
    return (
        <div>
            <Helmet>
                <title>Home | ArtNest</title>
            </Helmet>
            <Banner></Banner>
        <HomeCards></HomeCards>
        <Exhibition></Exhibition>
        </div>
    );
};

export default Home;