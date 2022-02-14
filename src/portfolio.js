import Home from "./home"
import { useState } from "react";
import Skills from "./skills";
import martysi from "./images/martysi.png";
import resorti from "./images/resorti.png";
import franki from "./images/franki.png";
import About from "./about";

export default function Portfolio(props){
    const[cont,scont] = useState(props.cont)

    

    if(cont==="home"){
      if(window.innerWidth<=600){
        document.getElementById("body").style.backgroundColor= "white";
        return <Skills cont={cont}/>
      }
      else{
        document.getElementById("body").style.backgroundColor= "#E7E7E7";
        return <Skills cont={cont}/>
      }
    }
    
      if(cont==="skills"){
        
        if(window.innerWidth<=600){
          document.getElementById("body").style.backgroundColor= "white";
          return <Skills cont={cont}/>
        }
        else{
          document.getElementById("body").style.backgroundColor= "#E7E7E7";
          return <Skills cont={cont}/>
        }
        
      }

      if(cont==="about"){
        if(window.innerWidth<=600){
          document.getElementById("body").style.backgroundColor= "white";
          return <About cont={cont}/>
        }
        else{
          document.getElementById("body").style.backgroundColor= "#E7E7E7";
          return <About cont={cont}/>
        
      }
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
                >Projects</p>
                <p className="rnav" onClick={()=>{
                 scont("about")
                 
                }}>About</p>
                  
                <div id="imacon">
               <div id="imlepa">
                  <div id="imle">
                    <div>
                    <div id="coloroverMa">
                      <a href="" target="_blank">
                        <img src={martysi}/>
                      </a>
                  </div>
                        <a href="" target="_blank"><button>view project </button></a>
                        
                   </div>
                    
                   <div>
                   <div id="coloroverFr">
                    <a href="" target="_blank">
                      <img src={franki}/>
                    </a>
                  </div>
                        <button>view project </button>
                   </div>

                  </div>
               </div>

               <div id="imrepa"> 
                <div id="imre">
                  <div>
                  <div id="coloroverRe">
                    <a href="" target="_blank">
                      <img src={resorti}/>
                    </a>
                  </div>
                  <button>view project </button>
                  </div>
                </div>
              </div>
              </div>

            </div>
              </div>

              

          </>
      )

    }
  