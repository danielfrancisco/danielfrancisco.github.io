import Home from "./home"
import { useEffect, useState } from "react";
import Skills from "./skills";
import martysi from "./images/martysi.png";
import resorti from "./images/resorti.png";
import franki from "./images/franki.png";
import About from "./about";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Drop from "./drop";
import { Link } from "react-router-dom";
import { useRef } from "react";

export default function Portfolio(props){
    const[cont,scont] = useState(props.cont)
    const[page,spage] = useState("portfolio")

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
    
    document.getElementById("imle").style.left = "10vw";
    document.getElementById("imre").style.left = "47vw";
    
   },[])
  
   useEffect(()=>{
    if(String(window.location.href).includes("portfolio")){
      document.getElementById("body").style.backgroundColor= "white"; 
    }
   },[])
   
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
                onClick={()=>{
                 
                 document.getElementById("body").style.backgroundColor= "#E7E7E7";
                }}>
                 
                Home</Link>

                <Link to={"/skills"} id="skills" style={{color:"gray" }} ref={skillsButton}
                onMouseOver={(e)=>{linkHover(e)}} 
                onMouseOut={(e)=>{linkNotHover(e)}}
                
                className="links" onClick={()=>{
                 document.getElementById("body").style.backgroundColor= "#E7E7E7";}}>
                Skills</Link>

               <Link to={"/portfolio"} id="work" style={{color:"gray"}} 
               ref={workButton}
               onMouseOver={(e)=>{linkHover(e)}} 
              onMouseOut={(e)=>{linkNotHover(e)}}

               className="links" onClick={()=>{
                 if(String(window.location.href).includes("portfolio")){
                   document.getElementById("body").style.backgroundColor= "white"; 
                 }
                 else{
                  document.getElementById("body").style.backgroundColor= "#E7E7E7";
                 }
                 
                 
                }}> 
                Work</Link>

                <Link to="/about" id="about" className="links" 
                onMouseOver={(e)=>{linkHover(e)}} 
                onMouseOut={(e)=>{linkNotHover(e)}}
                style={{color:"gray"}} onClick={()=>{
                 document.getElementById("body").style.backgroundColor= "#E7E7E7";
                }}>About</Link>

              </div>
              
                
               
              <div id="danielpa">
              <Link to={"/"}><div id="daniel">
                Home
              </div></Link>
              <FontAwesomeIcon icon={faBars} id="bars" onClick={
                ()=>{
                  scont("drop")
                  
                }
              }/>
            </div>
             
                  
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
                      <a  target="_blank" href="https://danielfrancisco.github.io/martys/">
                        <img src={martysi}/>
                      </a>
                  </div>
                        <a href="https://danielfrancisco.github.io/martys/" target="_blank"><button>Get a demo </button></a>
                        
                   </div>

                   <div id="coloroverFr">
                    <a href="https://danielfrancisco.github.io/Franks/" target="_blank">
                      <img src={franki}/>
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
  