import "../../styless/pages/home.scss"
import { useEffect} from "react";
import { Link } from "react-router-dom";
import DarkModeIcon from "./darkModeicon";
import "../../styless/components/nav.scss"

export function removePathName(){
  if(sessionStorage.getItem('pathName')){
    sessionStorage.removeItem('pathName')
  }
}

export default function Nav(){

  function navLinkAction(){
   //code that is executed after a nav link is pressed
    
   }

return(
        <>
         <div id="nav">
         
              <Link to="/" id="home"  onClick={navLinkAction} >
                 
                Home</Link>

              <Link to={"/services"} className="links" onClick={navLinkAction}>Services</Link>

              <Link to={"/previews"} className="links" onClick={navLinkAction}>Previews</Link>
               
              <Link to="/about" className="links" onClick={navLinkAction}>About</Link>

              <DarkModeIcon size='22px'/>
            
            </div>
        </>
    )
}