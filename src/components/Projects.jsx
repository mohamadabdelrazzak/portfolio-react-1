import React from "react";
import ProjectItem from "./ProjectItem";
import dust2 from "../assets/images/dust2.jpg";
import background from "../assets/images/background.jpg";
const Project =( )=>{
    
        return (
            <div id='projects'className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
                <h1 className="text-4xl font-bold text-center text-[#001b5e] py-4">Projects</h1>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet, fuga ratione? Ut esse, autem rerum nostrum dignissimos aspernatur mollitia consequatur dolorem quasi incidunt? Magnam deleniti reiciendis quam autem quod omnis.
                </p>
                <br />
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                    <ProjectItem img={dust2} tittle="Dust 2.0"/>
                    <ProjectItem img={background} tittle="nature background"/>
                    
                </div>
            </div>
        )
    
}
export default Project;