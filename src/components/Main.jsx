import React from "react";
import { BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import {TypeAnimation} from "react-type-animation";

const Main = () => {
    return <div id='main'>
        <img className="w-full h-screen object-cover object-left scale-x-[-1]" src='https://source.unsplash.com/1600x900/?nature'  />
        <div className="w-full h-screen absolute top-0 left-0 bg-white/30 ">
        <div className="max-w-[700px] mx-auto px-2 w-full h-full flex flex-col justify-center items-center">
            <h1 className="sm:text-5xl text-4xl font-bold text-gray-900"> Hi, I'm Mohamad Abdelrazzak</h1>
            <br />
            <h2 className='flex sm:text-3xl text-2xl font-bold text-gray-900'>  
            <TypeAnimation
      sequence={[
        
        ' Front-end Developer',
        1000, 
        ' Coder',
        1000,
        ' IT-Professional',
        1000, 
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '1em', display: 'inline-block' }}
      repeat={Infinity}
    />
            </h2>
       <br />
        <div className="flex justify-between pt=6 max-w-[100px] w-full">
            <BsInstagram className='cursor-pointer' size={20}/>
            <BsTwitter className='cursor-pointer' size={20}/>
            <BsLinkedin className='cursor-pointer' size={20}/>

        </div>
        </div>
        </div>
    </div>;
};

export default Main;