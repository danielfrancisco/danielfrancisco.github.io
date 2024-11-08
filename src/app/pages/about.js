import { useEffect } from "react";
import "../../styless/pages/about.scss"
import ContentContainer from "../components/ContentContainer";
import { removePathName } from "../components/nav";

export default function About(){

  useEffect(()=>{
     removePathName()
  },[])
 
    return(
        <>
         <ContentContainer content={
        <>
        <div id="abcon">
             <h2 id="heading">Cutting edge is my comfort zone</h2>
             <p id="aboutmede">
             I'm a full stack developer with over 7 years of experience.<br/>
              I'm exceedingly passionate about designing, innovation and <br/>problem solving. 
              I love to deliver seamless and intuitive <br/> user experiences.
              </p>
              <p id="aboutmemo">
              I'm a full stack developer with over 7 years of experience.
              I'm exceedingly passionate about designing, innovation and problem solving. 
              I love to deliver seamless and intuitive user experiences.
              </p>
            </div> 

        </>
      }/> 
            
        </>
    )
}