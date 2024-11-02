import "../../styless/components/contentContainer.scss"
import Nav from "./nav"
import Mobilenav from "./mobilenav"
import LazyLoad from 'react-lazyload';
import {useContext, useEffect } from 'react';
import {AppContext} from './currentTheme'

export default function ContentContainer({content}){
  const { theme } = useContext(AppContext);

  useEffect(()=>{
    if (theme === 'light') {
      document.body.classList.add('light');
      document.body.classList.remove('dark');
    } else {
      document.body.classList.add('dark');
      document.body.classList.remove('light');
    }
  },[theme])

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
      <Mobilenav current="/"/>  
      
      <div id="fondo" className={theme}>
        <Nav/>
       <div id='modeIcon'>
       </div>
       
       <div id='content' >
        {content}
       </div>
      
        </div>
      </>
  )
  }
 
}