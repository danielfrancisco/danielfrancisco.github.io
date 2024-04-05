import "./styless/components/contentContainer.scss"
import Nav from "./Nav"
import Mobilenav from "./Mobilenav"

export default function ContentContainer({content}){
    return(
        <>
        <div id="fondo">
          <Nav/>
          <div id='modeIcon'>
          </div>
          <Mobilenav current="/"/>  
          {content}
        </div>
        </>
    )
}