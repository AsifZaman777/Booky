
import About from '../components/home/About';
import Hero from '../components/home/Hero';
import Navbar from '../components/shared/Navbar';

const Home = () => {
    return (
        <div id='home'>
            <Navbar />
            <Hero />
            <About/>
        </div>
    );
};

export default Home;