
import About from '../components/home/About';
import Contact from '../components/home/Contact';
import Hero from '../components/home/Hero';
import Navbar from '../components/shared/Navbar';

const Home = () => {
    return (
        <div id='home'>
            <Navbar />
            <Hero />
            <About/>
            <Contact/>
        </div>
    );
};

export default Home;