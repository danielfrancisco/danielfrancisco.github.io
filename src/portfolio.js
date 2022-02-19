import Home from "./home"
import { useEffect, useState } from "react";
import Skills from "./skills";
import martysi from "./images/martysi.png";
import resorti from "./images/resorti.png";
import franki from "./images/franki.png";
import About from "./about";
import {FaBars} from "react-icons/fa";
import Drop from "./drop";

export default function Portfolio(props){
    const[cont,scont] = useState(props.cont)
    const[page,spage] = useState("portfolio")

   useEffect(()=>{
    document.getElementById("nav").style.paddingTop = "20vh";
    document.getElementById("nav").style.paddingTop = "20vh";
    document.getElementById("nav").style.top = "-6vh";
    document.getElementById("imle").style.left = "10vw";
    document.getElementById("imre").style.left = "47vw";
   },[])
  
   
   
    window.onscroll = function(e) {
      
      console.log(this.oldScroll,this.scrollY);
      if(this.scrollY>this.oldScroll){
        document.getElementById("nav").style.top = "-60vh";
      }

      if(this.scrollY<this.oldScroll){
        document.getElementById("nav").style.top = "-6vh";
      }
      this.oldScroll = this.scrollY;
      
    }


    if(window.innerWidth<=600){
      window.onscroll = function(e) {
      
        console.log(this.oldScroll,this.scrollY);
        if(this.scrollY>this.oldScroll){
          document.getElementById("danielpa").style.top = "-60vh";
        }
  
        if(this.scrollY<this.oldScroll){
          document.getElementById("danielpa").style.top = "-3vh";
        }
        this.oldScroll = this.scrollY;
        
      }

  }

  else{
    window.onscroll = function(e) {
      
      console.log(this.oldScroll,this.scrollY);
      if(this.scrollY>this.oldScroll){
        document.getElementById("nav").style.top = "-60vh";
      }

      if(this.scrollY<this.oldScroll){
        document.getElementById("nav").style.top = "-6vh";
      }
      this.oldScroll = this.scrollY;
      
    }
  }  
    
    
   if(cont==="home"){
      if(window.innerWidth<=600){
        document.getElementById("body").style.backgroundColor= "white";
        return <Home cont={cont}/>
      }
      else{
        document.getElementById("body").style.backgroundColor= "#E7E7E7";
        document.getElementById("nav").style.top = "-6vh";
        return <Home cont={cont}/>
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

      if(cont==="drop"){
        return <Drop cont={cont} page={page} pre = "1"/>
        
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
              </div>

              <div id="danielpa">
              
              <div id="daniel" onClick={
                ()=>{
                  scont("home")
                }
              }>Daniel</div>
              <FaBars id="bars" onClick={
                ()=>{
                  scont("drop")
  
                }
              }/>
            </div>
             
                  
                <div id="imacon">
               <div id="imlepa">
                  <div id="imle">
                    <div>
                    <div id="coloroverMa">
                      <a href="" target="_blank" href="https://danielfrancisco.github.io/martys/">
                        <img src={martysi}/>
                      </a>
                  </div>
                        <a href="https://danielfrancisco.github.io/martys/" target="_blank"><button>view project </button></a>
                        
                   </div>
                    
                   <div>
                   <div id="coloroverFr">
                    <a href="https://danielfrancisco.github.io/Franks/" target="_blank">
                      <img src={franki}/>
                    </a>
                  </div>
                  <a href="https://danielfrancisco.github.io/Franks/" target="_blank"><button>view project </button></a>
                   </div>

                  </div>
               </div>
              
               <div id="imrepa"> 
                <div id="imre">
                  <div>
                  <div id="coloroverRe">
                    <a href="https://danielfrancisco.github.io/Resort/" target="_blank">
                      <img src={resorti}/>
                    </a>
                  </div>
                  <a href="https://danielfrancisco.github.io/Resort/" target="_blank"><button>view project </button></a>
                  </div>
                </div>
              </div>
              </div>

            </div>
          </>
      )

    }
  