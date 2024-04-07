import "../../styless/pages/drop.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState} from "react";
import { faX,} from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Drop(){
 const location = useLocation()
 
return(
        <>
        
       <Link to={location.state}>
         <FontAwesomeIcon icon={faX} id="barspres"/>
       </Link>
          
          <div id="dropcon">
            <Link id="link" to={{pathname:"/"}} state="/"><p>Home</p></Link> 

            <Link id="link" to={"/skills"}><p>Services</p> </Link>

            <Link id="link" to={"/portfolio"}><p>Previews</p></Link>

            <Link id="link" to={"/about"}><p >About</p></Link>
          </div>
        </>
    )
}