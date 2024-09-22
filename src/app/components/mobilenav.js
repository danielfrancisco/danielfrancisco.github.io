import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import DarkModeIcon from "./darkModeicon";
import "../../styless/components/nav.scss"
import { useLocation } from 'react-router-dom'

export default function Mobilenav({current}){
  const path = useLocation().pathname
  
   return(
        <>
        <div id="danielpa">
              <Link to={"/"} state={path}><div id="daniel" >
                Home
              </div></Link>

              <Link to={"/drop"} state={path}>
                <FontAwesomeIcon icon={faBars} id="bars" />
              </Link>

              <DarkModeIcon size='22px'/>
            </div>
        </>
    )
}