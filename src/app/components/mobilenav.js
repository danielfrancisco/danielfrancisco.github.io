import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import DarkModeIcon from "./darkModeicon";
import "../../styless/components/nav.scss"
import { getPagePath } from "../functions/getPath";

export default function Mobilenav({current}){
  
  
   return(
        <>
        <div id="danielpa">
              <Link to={"/"} state={getPagePath()}><div id="daniel" >
                Home
              </div></Link>

              <Link to={"/drop"} state={getPagePath()}>
                <FontAwesomeIcon icon={faBars} id="bars" />
              </Link>

              <DarkModeIcon size='22px'/>
            </div>
        </>
    )
}