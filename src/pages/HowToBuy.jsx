import Hero from '../components/Hero.jsx'
import Steps from '../components/Steps.jsx';
import Footer from '../components/Footer.jsx'
import { Link } from 'react-router-dom';



function HowToBuy(){
    return(
        <>
            <Hero url="/bg3.png" title="Step By Step Guide On How To Buy Cars" description="follow through these steps on how to buy cars"/>
            <Steps num={1} title="Choose The Car Of Your Choice" description="Browse our website on the car listing page. Select the car thst has caught your eyes and click add to choose it"/>
            <Steps num={2} title="Get In Touch With The Seller" description="click on the contact to reach out to us via email or call or whatsApp"/>
            <Steps num={3} title="Text Us A Message On Whatsapp" description="click on the whatsapp symbol and will be directed to whatsapp with the details of the car you are interested in "/>
            <Steps num={4} title="Agreement Reached And You" description="Your free to say your free time to have a look at the car, cheeck all the valid papers and even negotiate and we can agree on the amount "/>
            <Steps num={5} title="Congrats The Car Is Yours Now!!" description="After payment the car is all yours"/>
           <Link to='/cars'>
           <button className="bg-[#270AA8] flex mx-auto mb-10 items-center gap-2 py-5 text-white px-6 py-3 rounded-full text-sm">
                 <p>Buy The Car of Your Choice</p> 
            <img src="/call_made(1).png" alt="" className="w-3 h-3"/>
            </button>
           
           </Link>
            
            <Footer/>
        </>
    )
}

export default HowToBuy;