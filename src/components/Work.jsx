import React from "react";
import WorkItem from "./Workitem";

const data=[
{   
     year:"2017",
    title:"IT-professional",
    duration:"4 years",
    details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, quae. ",
},
{ 
    year:"2021",
    title:"Network Administrator",
    duration:"2 years",
    details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, quae. ",
},
];
const Work = () => {
    return( 
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
        <h1 className="text-4xl font-bold text-center text-gray-800">work</h1>
        {
            data.map((item ,idx)=>(
                 <WorkItem
                 key={idx}
                 year={item.year}
                 title={item.title} 
                 duration={item.duration} 
                 details={item.details}/>
            ))
        }
    </div>
)};

export default Work;