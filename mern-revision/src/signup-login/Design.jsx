// import { useEffect, useState } from "react";
import LeafImage from '../assets/Leaf_multi.jpg';
import bellflower from '../assets/bellflower.jpg';
import flower_dune from '../assets/flower_dune.jpg';

// import white_flowers from '../assets/white-flowers.jpg';

// import AOS from "aos";

const Design = () => {

    // useEffect(() =>{
    //    AOS.init()
    // },[])
    return (
        <>
        
            <div className="flex-row scroll-m-1.5">
                <div className="relative w-full h-screen">
                    {/* Background Image */}
                    <img className="absolute inset-0 w-full h-full object-cover opacity-100 blur-xs" src={LeafImage} alt="Background" />

                    {/* Content Over Image */}
                    <div className="relative z-0 flex flex-col items-center justify-center h-full text-white text-center  p-6">
                        <h1 className="text-4xl font-bold">Welcome Bro</h1>
                        <br />
                        <p className="max-w-2xl">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quisquam quo voluptatem
                            laudantium, rerum provident doloribus corporis quia odit, sint, aperiam ratione suscipit
                            nam libero vel! Suscipit voluptates sit cumque! Nulla assumenda aperiam veritatis similique
                            hic! Assumenda, pariatur explicabo laudantium facere nisi error, voluptas dignissimos quae,
                            officia iure omnis voluptatem!
                        </p>
                    <a href = "#sign-up" className="z-10 bg-blue-100/35  h-10 p-2 text-black font-bold m-2 fixed insert-0 right-10  bottom-0 rounded-md"
                   >For More Register Please !!</a>
                </div>
               
            </div>

            <div className="flex flex-row w-full h-screen relative">
                {/* Left Half */}
                <div className="w-1/2 h-full relative">
                    <img className="w-full h-full object-cover" src={bellflower} alt="Left Background" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center bg-black opacity-50 p-6">
                        <p className="text-lg font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quam velit ea deserunt voluptatum laudantium quia aspernatur quas error sed.</p>
                    </div>
                </div>

                {/* Right Half */}
                <div className="w-1/2 h-full relative">
                    <img className="w-full h-full object-cover" src={flower_dune} alt="Right Background" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center bg-black opacity-50 p-6">
                        <p className="text-lg font-semibold">Another beautiful image with text overlay!</p>
                    </div>
                </div>
            </div>


           <div id = "sign-up" className="">

           </div>

        </div>
        </>
    )

}

export default Design;