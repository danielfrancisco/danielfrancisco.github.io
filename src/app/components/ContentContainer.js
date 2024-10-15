import "../../styless/components/contentContainer.scss"
import Nav from "./nav"
import Mobilenav from "./mobilenav"
import LazyLoad from 'react-lazyload';

export default function ContentContainer({content}){
  
  
  if(sessionStorage.getItem('pathName')){
    return(
      <>
      <div id='content'>
        {content}
        </div>
      </>
    )
  }else{
    return(
      <>
      <LazyLoad>
      <Mobilenav current="/"/>  
      </LazyLoad>

      <div id="fondo">

      <LazyLoad>
        <Nav/>
      </LazyLoad>

        <div id='modeIcon'>
        </div>
        
      <LazyLoad>
        <div id='content'>
        
        {content}
        
        </div>
      </LazyLoad>
        
      </div>
      </>
  )
  }
 
}