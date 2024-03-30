import { useLoaderData } from "react-router-dom";
import Contact from "../Contact/Contact";
import { useState } from "react";
import { DNA } from 'react-loader-spinner'


const Contant = () => {
    const contact=useLoaderData()
  
    return (
        <>
        <div>
            <h1>I am from contant.{contact.length}</h1>
            <div> 

            {
                contact.map ((contat) => <Contact key={contat.id} contat={contat}></Contact>)
            
            }
            </div>
        </div>
        </>
    );
};

export default Contant;