import { Link } from "gatsby"
import React from "react"
import Om from "../images/om.png"
import { URL } from '../services/api';
const categories = props => {



    return (
        <>
        <div className="W-full">
        <img  className="w-8 "src={props.image}></img>
        <Link to={`/group/${props.id}`} > 
        <span className=" text-ss flex justify-center pr-7 pt-2 font-semibold">{props.title}</span> </Link>
        </div>
        
        </>
    )
    
}

export default categories