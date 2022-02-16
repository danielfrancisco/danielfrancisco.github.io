import { useEffect, useState } from "react";
import Skills from "./skills";
import "./styless/home.scss"
import Portfolio from "./portfolio";
import Contact from "./contact"
import About from "./about";
import {FaBars} from "react-icons/fa";
import Drop from "./drop";

export default function Home() {
   const [conte,sconte] = useState("home")
   const[page,spage] = useState("home")
   
   function deskcolor(){
     if(window.innerWidth>600 && conte==="portfolio"===false){
      document.getElementById("body").style.backgroundColor= "#E7E7E7";
     }
     else{
      document.getElementById("body").style.backgroundColor= "white";
     }
   }

   window.addEventListener("resize",deskcolor)
   
   if(conte==="portfolio"){
    document.getElementById("body").style.backgroundColor= "white";
    return <Portfolio cont={conte}/>
    
  }

  if(conte==="about"){
    return <About cont={conte}/>
    
  }

  if(conte==="drop"){
    return <Drop cont={conte} page={page} pre = "1"/>
    
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

  if(conte==="contact"){
    return <Contact cont={conte}/>
  }

   if(conte==="home"){
    return (
      <>
        <div id="fondo">
            <div id="nav">
                <p  onClick={()=>{
                  sconte("home")
                }}>Home</p>

                <p className="rnav" onClick={()=>{
                  sconte("skills")
                }}>Skills</p>

                <p className="rnav" onClick={()=>{
                    sconte("portfolio")
                    
                    }}
                >Projects</p>
                <p className="rnav" onClick={()=>{
                    sconte("about")
                    
                    }}>About</p>
              </div>
            <div>
          

            <div id="daniel">Daniel</div>
            <FaBars id="bars" onClick={
              ()=>{
                sconte("drop")
              }
            }/>
          </div>
  
          <div id="con">
            <div id="nombre">Daniel Campoverde</div>
            <div id="titulo">Front end developer</div>
            <div id="titulo">Designer</div>
            <button onClick={()=>{
              sconte("contact")
            }}>Contact</button>
          </div>
          
        </div>
      </>
    );

  }

  
}

