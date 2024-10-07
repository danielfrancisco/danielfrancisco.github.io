import "../../styless/pages/home.scss"
import { useEffect} from "react";
import { Link } from "react-router-dom";
import DarkModeIcon from "./darkModeicon";
import "../../styless/components/nav.scss"

export default function Nav(){

  useEffect(()=>{
   console.log(window.history.state)
  },[])
  
  function setCurrentPage(e){
    let route = "/"+e.target.innerHTML.toLowerCase()
    if(route==="/home"){
      route="/"
    }
    sessionStorage.setItem('path', route)
  }


    return(
        <>
         <div id="nav">
         
              <Link to="/" id="home"  onClick={setCurrentPage} >
                 
                Home</Link>

                <Link to={"/services"} className="links" onClick={setCurrentPage}>Services</Link>

               <Link to={"/previews"} className="links" onClick={setCurrentPage}>Previews</Link>
               
                <Link to="/about" className="links" onClick={setCurrentPage}>About</Link>
             <DarkModeIcon size='22px'/>
                
          </div>
        </>
    )
}