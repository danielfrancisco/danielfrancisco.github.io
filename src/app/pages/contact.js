import { useState} from "react"
import Mobilenav from "../components/mobilenav";
import Nav from "../components/nav";
import ContentContainer from "../components/ContentContainer";
import "../../styless/pages/_contact.scss"
import { useEffect } from "react";
import { getPagePath } from "../functions/getPath";

export default function Contact(){

  useEffect(()=>{
    localStorage.setItem('path', getPagePath())
  },[])  
  
  return(
        <>

<ContentContainer content={
        <>
         <div id="condata">
            <div>
              <p className="condataName">Phone number</p>
              <p id="number">+593 980615630</p><br/>
            </div>

            <div>
             <p className="condataName">Email</p>
             <p  id="email">danielfrancisco99@outlook.com</p><br/>
            </div>

            <div>
             <p className="condataName">Github</p>
             <p  id="loc">https://github.com/danielfrancisco</p>
            </div>

          </div>
        </>
      }/> 
             
      </>
        );
}