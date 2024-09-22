import "../../styless/pages/home.scss"
import { useEffect} from "react";
import { Link } from "react-router-dom";
import DarkModeIcon from "./darkModeicon";
import "../../styless/components/nav.scss"
import { useLocation } from 'react-router-dom'

export default function Nav(){
  const path = useLocation().pathname

    return(
        <>
         <div id="nav">
         
              <Link to="/" id="home" state={path}>
                 
                Home</Link>

                <Link to={"/skills"} className="links">Services</Link>

               <Link to={"/portfolio"} className="links">Previews</Link>
               
                <Link to="/about" className="links">About</Link>
             <DarkModeIcon size='22px'/>
                
          </div>
        </>
    )
}