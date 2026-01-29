import Footer from './Footer.jsx'

function Steps({num, title, description}){

    return(
        <>
            <div className="bg-[#303030] py-10 gap-7 items-center w-[95%] mx-auto rounded-3xl pr-3 flex text-white my-10">
                <div className="bg-white w-20 h-30 rounded-tr-3xl rounded-br-3xl flex text-[#270AA8] items-center"><p className="text-8xl">{num}</p></div>
                <div>
                     <h2 className="font-black text-2xl">{title} </h2>
                     <p>{description}</p>
                </div>
               
            </div>
        </>
    )

}

export default Steps;