import Home from "./home"
import { useState } from "react"
import Skills from "./skills"
import martysi from "./images/martysi.png"
import "./styless/portfolio.scss"
import resort from "./images/resort.png"

export default function Portfolio(props){
    const[cont,scont] = useState(props.cont)

    if(cont==="home"){
        
        return <Home cont={cont}/>
      }

      if(cont==="skills"){
        
        return <Skills cont={cont}/>
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

              <div id="imacon">
               <div id="imlepa">
                  <div id="imle">
                    <div>
                        <img src={martysi}/>
                        <button>Check it out </button>
                   </div>
                    
                    </div>
               </div>

               <div id="imrepa"> 
                <div id="imre">
                  <div>
                    <img src={resort}/>
                    <button>Check it out </button>
                  </div>
                </div>
              </div>
              </div>

            </div>

          </>
      )

    }