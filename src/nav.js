import "./styless/home.scss"
import { useEffect} from "react";
import { Link } from "react-router-dom";
import DarkModeIcon from "./darkModeicon";

export default function Nav(){
  useEffect(()=>{
        document.getElementById("nav").style.top = "16vh";
       },[])

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