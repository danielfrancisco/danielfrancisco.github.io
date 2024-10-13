import { useState} from "react"
import Mobilenav from "../components/mobilenav";
import Nav, { removePathName } from "../components/nav";
import ContentContainer from "../components/ContentContainer";
import "../../styless/pages/_contact.scss"
import { useEffect } from "react";

export default function Contact(){
   useEffect(()=>{
     removePathName()
   })
   
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