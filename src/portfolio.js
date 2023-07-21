import { useEffect, useState } from "react";
import martysi from "./images/martysi.png";
import resorti from "./images/resorti.png";
import franks from "./images/franks.png";
import Mobilenav from "./mobilenav";
import { Link } from "react-router-dom";
import { useRef } from "react";

export default function Portfolio(props){
    let homeButton=useRef()
    let skillsButton=useRef()
    let workButton=useRef()
    let nav = useRef()

    useEffect(()=>{
      nav.current.style.backgroundColor="#101010"
      nav.current.style.width="110vw"
      nav.current.style.paddingTop = "10vh"; 
      nav.current.style.paddingTop = "10vh";
      nav.current.style.left = "0vh";
      nav.current.style.top = "-6vh";
      },[nav])

      useEffect(()=>{
       document.body.style.background="white"
      },[])

   function changeBackground(){
        document.body.style.background="#E7E7E7"
   }

   window.onscroll = function(e) {
      
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
      
      if(this.scrollY>this.oldScroll){
        document.getElementById("nav").style.top = "-60vh";
        document.getElementById("nav").style.nav = "-60vh"
        
      }

      if(this.scrollY<this.oldScroll){
        document.getElementById("nav").style.top = "-6vh";
      }
      this.oldScroll = this.scrollY;
      
    }
  }  
    
  function linkHover(e){
     document.getElementById(e.target.id).style.color="white"
   }

   function linkNotHover(e){
    document.getElementById(e.target.id).style.color="dimgray"
   }
   
   return(
          <>
      <div id="fondo" >
      <div id="nav" ref={nav} style={{transition:"top 0.5s"}}>
                <Link to="/" id="home"  style={{color:"gray", marginLeft:"20vh"}} 
                ref={homeButton}   onMouseOver={(e)=>{linkHover(e)}}
                onMouseOut={(e)=>{linkNotHover(e)}} 
                onClick={changeBackground}>Home</Link>

                <Link to={"/skills"} id="skills" style={{color:"gray" }} ref={skillsButton}
                onMouseOver={(e)=>{linkHover(e)}} onClick={changeBackground}
                onMouseOut={(e)=>{linkNotHover(e)}}
                className="links" >Services</Link>

               <Link to={"/portfolio"} id="work" style={{color:"gray"}} 
               ref={workButton} 
               onMouseOver={(e)=>{linkHover(e)}} 
               onMouseOut={(e)=>{linkNotHover(e)}}
               className="links">Previews</Link>

                <Link to="/about" id="about" className="links" 
                onMouseOver={(e)=>{linkHover(e)}} onClick={changeBackground}
                onMouseOut={(e)=>{linkNotHover(e)}}
                style={{color:"gray"}} >About</Link>

              </div>
              
            <Mobilenav current={"/portfolio"}/> 

             <div id="imacon">
               <div id="imlepa">
                  <div id="imle">
                    <div>
                   <div id="coloroverRe">
                    <a href="https://danielfrancisco.github.io/Resort/" target="_blank">
                      <img src={resorti}/>
                    </a>
                  </div>
                  <a href="https://danielfrancisco.github.io/Resort/" target="_blank"><button>Get a Demo </button></a>
                   </div>

                   <div>
                    <div id="coloroverMa">
                      <a  target="_blank" href="https://danielfrancisco.github.io/martyswebapp/#/">
                        <img src={martysi} />
                      </a>
                  </div>
                        <a href="https://danielfrancisco.github.io/martyswebapp/#/" target="_blank"><button>Get a demo </button></a>
                        
                   </div>

                   <div id="coloroverFr">
                    <a href="https://danielfrancisco.github.io/Franks/" target="_blank">
                      <img src={franks}/>
                    </a>
                  </div>
                  <a href="https://danielfrancisco.github.io/Franks/" target="_blank"><button>Get a Demo </button></a>

                  </div>
               </div>
              
               <div id="imrepa"> 
                <div id="imre">
                  <div>
                  
                  </div>
                </div>
              </div>
              </div>

            </div>
          </>
      )

    }
  