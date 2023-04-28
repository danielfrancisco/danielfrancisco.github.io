import { useState } from "react"
import "./styless/about.scss";
import Portfolio from "./portfolio";
import Home from "./home"
import Skills from "./skills";
import Drop from "./drop";
import {FaBars} from "react-icons/fa";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function About(props){
    const [conte,sconte] = useState(props.conte)
    const[page,spage] = useState("about")

    
    useEffect(()=>{
      document.getElementById("nav").style.top = "16vh";
     },[])

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
                <Link to="/" id="home">
                 
                Home</Link>

                <Link to={"/skills"} className="links">Skills</Link>

               <Link to={"/portfolio"} className="links" onClick={()=>{
                 
                 document.getElementById("body").style.backgroundColor= "white";
                }}> 
                Work</Link>

                <Link to="/about" className="links">About</Link>

              </div>

              <div id="danielpa">
              <Link to={"/"}><div id="daniel">
                Home
              </div></Link>
              <FaBars id="bars" onClick={
                ()=>{
                  sconte("drop")
                }
              }/>
            </div>
           
             
             <div id="abcon">
             <h2 id="heading">Cutting edge is my comfort zone</h2>
             <p id="aboutmede">
              I'm a full stack developer with more than 4 years of experience<br/>
              with a lot passion for designing and problem solving. I like to deliver <br/> 
              immersive and intuitive user experiences.
              </p>
              <p id="aboutmemo">
              I'm a full stack developer with more than 4 years of experience.
              I have a lot passion for designing and problem solving. I like to deliver  
              immersive and intuitive user experiences.
              </p>
            </div> 

        </div>
            
        </>
    )
}