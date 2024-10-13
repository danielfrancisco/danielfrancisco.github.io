import "../../styless/pages/home.scss"
import { Link } from "react-router-dom";
import ContentContainer from "../components/ContentContainer";
import { useEffect } from "react";
import { removePathName } from "../components/nav";

export default function Home() {

  useEffect(()=>{
   console.log('happy hacking :)')

    if(sessionStorage.getItem('pathName')){
      let pathName = sessionStorage.getItem('pathName')
      window.history.replaceState({ key: 'value' }, '', pathName);
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
    removePathName()
      
  },[])

  if(sessionStorage.getItem('pathName')){
    return(
    <>
     
    </>
    )
  }
return (
    <>
    <ContentContainer content={
      <>
      <div id="con">
          <div id="nombre">Daniel Campoverde</div>
          <div id="titulo">Full stack developer</div>
          <div id="titulo">Ux Designer</div>
          <Link to={"/contact"} id='contactLink'><button >Contact</button></Link>
        </div>
      </>
    }/> 
    </>
  ); 
}

  


