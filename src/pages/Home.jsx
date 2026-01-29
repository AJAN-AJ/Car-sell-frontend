import Hero from '../components/Hero.jsx'
import ExploreCars from '../components/ExploreCars.jsx';
import HowToBuy from './HowToBuy.jsx';
import bg from '/BgHome.png'
import Footer from '../components/Footer.jsx'
import ContactUs from '../components/ContactUs.jsx';

function Home() {
  return (
    <>
        <Hero url={bg} title="Get The Best Used Cars From Us" description="We don’t disappoint, we have the best cars for you"/>
        <ExploreCars /> 
        <section id='contact-section' className='scroll-mt-20'>
            <ContactUs/>
        </section>   
        <Footer/>
    </>
   
  );
}

export default Home;
