import WhatsAppButton from "./WhatsAppButton";

function ContactUs(){
    return(
        <>
        <div className="my-7">
            <div className="bg-[#303030] flex gap-5 flex-col text-white w-[94%] rounded-3xl mx-auto px-6 py-10">
                <h1 className="text-3xl ">Contact Us</h1>
                <p>Call Us On These Numbers To Enquire <br />More About Business With Us</p>
                <div className="bg-white flex text-black items-center px-2 py-3 rounded-full gap-2">
                    <img src="/icon/Email.png" alt="email" className="w-12 h-12 "/>
                    <p>Carsale@Sales.Com</p>
                </div>

               <a href="tel:+265881478149">
                <div className="bg-white flex text-black items-center px-2 py-3 rounded-full gap-2">
                    <img src="/icon/call.png" alt="email" className="w-12 h-12 "/>
                    <p>+265 (0) 881 47 81 49</p>
                </div>
               </a> 

                <WhatsAppButton phone={+265999988511} message="Wanted us talk about the cars you are selling">
                <div className="bg-white flex text-black items-center px-2 py-3 rounded-full gap-2">
                    <img src="/icon/whatsApp.png" alt="email" className="w-12 h-12 "/>
                    <p>+265 (0) 881 47 81 49</p>
                </div>
                </WhatsAppButton>
                

            </div>
        </div>    
        </>
    )
}

export default ContactUs;