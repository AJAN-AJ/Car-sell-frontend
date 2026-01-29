import Hero from '../components/Hero.jsx'
import Bg2 from '/Bg2.png'
import ExploreCars from '../components/ExploreCars.jsx';
import Footer from '../components/Footer.jsx'

function Cars(){
    return(
        <>
            <Hero url={Bg2} title="Appreciate Car Listing In Our Keep" description="Begin your car owner's journey by buying one"/>
            <ExploreCars/>
            <Footer/>
        </>
    )
}

export default Cars;