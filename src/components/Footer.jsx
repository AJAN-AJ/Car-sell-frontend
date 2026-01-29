import { Link } from "react-router-dom";
import WhatsAppButton from "./WhatsAppButton";


function Footer(){
    return(
        <>
            <div >
                <div className="flex flex-col gap-5 mx-auto bg-[#303030] text-white px-6">
                    <img src="" alt="" />
                <div>
                    <h1 className="text-3xl font-bold">Car Sale</h1>
                    <p className="text-gray-400">Your number one car dealer</p>
                </div>
                <div className="flex gap-2">
                    <WhatsAppButton phone="265999988511" message={`i am interested in buying a car from you`}>
                     <img src="/icon/whatsApp.png" alt="WhatsApp" className="w-12 h-12" />
                    </WhatsAppButton>
                    <img src="/icon/faceBook.png" alt="fb" className="w-12 h-12"/>
                    <img src="/icon/x.png" alt="x" className="w-12 h-12"/>
                    <img src="/icon/Email.png" alt="email" className="w-12 h-12"/>
                    <img src="/icon/LinkedIN.png" alt="IN" className="w-12 h-12"/>
                </div>
                <Link to='/how'>How to buy / order cars</Link>
                <Link to='/cars'>Browse cars</Link>
                <Link to='/how'>Contact us</Link>
                </div>
                <footer className="text-center text-gray-400">&copy;2026 Car Sale</footer>
            </div>
        </>
    )
}

export default Footer;