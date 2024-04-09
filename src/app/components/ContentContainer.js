import "../../styless/components/contentContainer.scss"
import Nav from "./nav"
import Mobilenav from "./mobilenav"

export default function ContentContainer({content}){
    return(
        <>
        <div id="fondo">
          <Nav/>
          <div id='modeIcon'>
          </div>
          <Mobilenav current="/"/>  
          <div id='content'>
          {content}
          </div>
          
        </div>
        </>
    )
}