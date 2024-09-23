import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import DarkModeIcon from "./darkModeicon";
import "../../styless/components/nav.scss"
import { getPagePath } from "../functions/getPath";

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
              <Link to={"/"} state={getPagePath()} onClick={setCurrentPage}><div id="daniel" >
                Home
              </div></Link>

              <Link to={"/drop"} onClickCapture={()=>setCurrentPage("/drop")} >
                <FontAwesomeIcon icon={faBars} id="bars" />
              </Link>

              <DarkModeIcon size='22px'/>
            </div>
        </>
    )
}