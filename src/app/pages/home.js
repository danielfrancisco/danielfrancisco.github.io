import "../../styless/pages/home.scss"
import { Link } from "react-router-dom";
import ContentContainer from "../components/ContentContainer";
import { useEffect } from "react";

export default function Home() {

  
return (
    <>
    <ContentContainer content={
      <>
      <div id="con">
          <div id="nombre">Daniel Campoverde</div>
          <div id="titulo">Full stack developer</div>
          <div id="titulo">Ux Designer</div>
          <Link to={"/contact"} id='contactLink'  ><button >Contact</button></Link>
        </div>
      </>
    }/> 
    </>
  ); 
}

  


