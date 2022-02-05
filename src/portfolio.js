import Home from "./home"
import { useState } from "react"
import Skills from "./skills"

export default function Portfolio(props){
    const[cont,scont] = useState(props.cont)

    if(cont==="home"){
        
        return <Home/>
      }

      if(cont==="protfolio"){
        
        return <Portfolio/>
      }

      if(cont==="skills"){
        
        return <Skills/>
      }

      return(
          <>
          <div id="fondo">
              <div id="nav">
                <p onClick={()=>{
                 scont("home")
                 
                }}>Home</p>

                <p className="rnav" onClick={()=>{
                   scont("skills")
                }}>Skills</p>

                <p className="rnav" onClick={()=>{
                 scont("porfolio")
                 
                }}
                >Portfolio</p>
                <p className="rnav">About</p>
              </div>
            </div>

            <div id="imacon">
                <p>heyjv</p>
              <img src="sjc"/>
            </div>
          </>
      )

    }