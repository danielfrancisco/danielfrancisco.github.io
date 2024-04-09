import "../../styless/pages/home.scss"
import { useEffect} from "react";
import { Link } from "react-router-dom";
import DarkModeIcon from "./darkModeicon";
import "../../styless/components/nav.scss"


export default function Nav(){
 

    return(
        <>
         <div id="nav">
         
              <Link to="/" id="home">
                 
                Home</Link>

                <Link to={"/skills"} className="links">Services</Link>

               <Link to={"/portfolio"} className="links">Previews</Link>
               
                <Link to="/about" className="links">About</Link>
             <DarkModeIcon size='22px'/>
                
          </div>
        </>
    )
}