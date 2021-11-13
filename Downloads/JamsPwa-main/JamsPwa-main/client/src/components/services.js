import React from "react"
import Om from "../images/om.png"
import { Link } from "gatsby"
import {URL} from '../services/api'


const Service = ({data}) =>  {
    return(
        <div class="w-14 h-16 flex pt-2 pl-1.5 flex-col active:border-2 active: border-purple-400">
        <Link to={`/group/package/${data._id}`} > 
         <div class=" w-10   h-10">
               <img src={`${URL}/${data.image}`}></img>
           </div> 
           </Link>
           <div class=" text-ss  ">
             <span>{data.title}</span>
           </div>
         </div>
    )
}

export default Service