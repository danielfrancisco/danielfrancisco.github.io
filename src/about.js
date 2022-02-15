import { useState } from "react"
import "./styless/about.scss";
import Portfolio from "./portfolio";
import Home from "./home"
import Skills from "./skills";
import Drop from "./drop";
import {FaBars} from "react-icons/fa";


export default function About(props){
    const [conte,sconte] = useState(props.conte)
    const[page,spage] = useState("about")

    if(conte==="portfolio"){
        document.getElementById("body").style.backgroundColor= "white";
        return <Portfolio cont={conte}/>
        
      }

    if(conte==="drop"){
        return <Drop cont={conte} page={page} pre = "1"/>
        
      }

    if(conte==="home"){
         
        return <Home cont={conte}/>
      }

    if(conte==="skills"){
        if(window.innerWidth<=600){
          document.getElementById("body").style.backgroundColor= "white";
          return <Skills con={conte}/>
        }
    
        else{
          document.getElementById("body").style.backgroundColor= "#E7E7E7";
          return <Skills con={conte}/>
        }
        
        
      }

    return(
        <>
         <div id="fondo">
          <div id="nav">
            <p onClick={()=>{
              sconte("home")
            }}>Home</p>

            <p className="rnav" onClick={()=>{
              sconte("skills")
            }}>Skills</p>

            <p className="rnav" onClick={()=>{
                 sconte("portfolio")
                 document.getElementById("body").style.backgroundColor= "white";
                }}
            >Projects</p>
            <p className="rnav">About</p>
          </div>

          <div>
            <div id="daniel" onClick={
              ()=>{
                sconte("home")
              }
            }>Daniel</div>
            <FaBars id="bars" onClick={
              ()=>{
                sconte("drop")
              }
            }/>
          </div>

            <p id="aboutme">I'm a front end developer with more than 4 years of experience<br/> 
            with a lot passion for designing and problem solving to deliver <br/> an
            immersive and intuitive user experience.
            </p>

        </div>
            
        </>
    )
}