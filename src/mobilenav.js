import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import DarkModeIcon from "./DarkModeicon";
import "./styless/components/nav.scss"

export default function Mobilenav({current}){
   return(
        <>
        <div id="danielpa">
              <Link to={"/"}><div id="daniel">
                Home
              </div></Link>

              <Link to={"/drop"} state={current}>
                <FontAwesomeIcon icon={faBars} id="bars" />
              </Link>

              <DarkModeIcon size='22px'/>
            </div>
        </>
    )
}