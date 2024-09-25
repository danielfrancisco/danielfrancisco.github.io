import "../../styless/pages/home.scss"
import { useEffect} from "react";
import { Link } from "react-router-dom";
import DarkModeIcon from "./darkModeicon";
import "../../styless/components/nav.scss"
import { useLocation } from "react-router-dom";

export default function Nav(){
  const path = useLocation().pathname  
  
  function setCurrentPage(e){
    let route = "/"+e.target.innerHTML.toLowerCase()
    if(route==="/home"){
      route="/"
    }
    sessionStorage.setItem('path', route)
  }

  useEffect(() => {
    if(path!=="/"){
      sessionStorage.setItem('path', path)
      console.log(sessionStorage.getItem('path'))
      if(sessionStorage.getItem('noRedirect')!==null){
        sessionStorage.removeItem('noRedirect')
      }
    }
    
    const handlePopState = (event) => {
      sessionStorage.setItem("noRedirect","")
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };

  }, []);

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