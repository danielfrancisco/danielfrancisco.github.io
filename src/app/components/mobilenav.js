import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import DarkModeIcon from "./darkModeButton";
import "../../styless/components/nav.scss"
import DarkModeButton from "./darkModeButton";

export default function Mobilenav({current}){
  function setCurrentPage(e){
    if(e==="/drop"){
      sessionStorage.setItem('drop', "/drop")
    }else{
      
    let route = "/"+e.target.innerHTML.toLowerCase()
    
    if(route==="/home"){
      route="/"
    }
    sessionStorage.setItem('path', route)
    }
   
  }
  
   return(
        <>
        <div id="danielpa">
              <Link to={"/"}  onClick={setCurrentPage}><div id="daniel" >
                Home
              </div></Link>

              <Link to={"/drop"} onClickCapture={()=>setCurrentPage("/drop")} >
                <FontAwesomeIcon icon={faBars} id="bars" />
              </Link>

              <DarkModeButton size='22px'/>
            </div>
        </>
    )
}