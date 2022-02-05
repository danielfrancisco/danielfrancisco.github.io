import { useState } from "react";
import Skills from "./skills";
import "./styless/home.scss"
import Portfolio from "./portfolio";

export default function Home(props) {
   const [conte,sconte] = useState("home")

   if(conte==="portfolio"){
        
    return <Portfolio/>
  }

   if(conte==="home"){
    return (
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
                 sconte("home")
                 
                }}
            >Portfolio</p>
            <p className="rnav">About</p>
          </div>
  
          <div id="con">
            <div id="nombre">Daniel Campoverde</div>
            <div id="titulo">Front end developer</div>
            <div id="titulo">Designer</div>
            <button>CONTACT</button>
          </div>
        </div>
      </>
    );

  }

  if(conte==="skills"){
    return <Skills con={conte}/>
    
  }
  
}

