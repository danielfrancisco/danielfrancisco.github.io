import { useEffect, useState } from "react";
import martysi from "./images/martysi.png";
import resorti from "./images/resorti.png";
import franks from "./images/franks.png";
import Mobilenav from "./mobilenav";
import { Link } from "react-router-dom";
import { useRef } from "react";
import Cookies from 'universal-cookie';


const cookies = new Cookies()
export default function Portfolio(){
    const [navLinkStyle, setNavLinkStyle] = useState(
      {homeLinkColor:"gray",
      servicesLinkColor:"gray",
      previewLinkColor:"gray",
      aboutLinkColor:"gray",
    })
    
    let nav = useRef()
    let resortIma = useRef()
    let shadere = useRef()
    let shadema = useRef()
    let martysIma = useRef()
    let shadefr = useRef()
    let frankIma = useRef()

    useEffect(()=>{
      nav.current.style.backgroundColor="#101010"
      nav.current.style.width="110vw"
      nav.current.style.paddingTop = "10vh"; 
      nav.current.style.paddingTop = "10vh";
      nav.current.style.left = "0vh";
      nav.current.style.top = "-6vh";
      },[nav])

      useEffect(()=>{
        
        if(cookies.get('darktheme')==='on'){
            
          document.body.style.setProperty('--bodyColor' ,"#0f131a")
          document.body.style.setProperty('--fondoColor' ,"#0f131a")
          
        }else{
          
          document.body.style.setProperty('--bodyColor' ,"white")
          document.body.style.setProperty('--fondoColor' ,"white")
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
    
  function linkHover(link){
    let updatedNavLinkStyle = {...navLinkStyle}
    updatedNavLinkStyle[link] = "white"
    setNavLinkStyle(updatedNavLinkStyle)
   }
   
   function linkNotHover(link){
    let updatedNavLinkStyle = {...navLinkStyle}
    updatedNavLinkStyle[link] = "gray"
    setNavLinkStyle(updatedNavLinkStyle)
    }
  
   function buttonHover(opacity, shade){
    opacity.current.style.opacity="0.5"
    shade.current.style.background="black"
   }

   function buttonNotHover(opacity, shade){
    opacity.current.style.opacity="1"
    shade.current.style.backgroundColor="transparent"
   }

   return(
          <>
      <div id="fondo" >
      <div id="nav" ref={nav} style={{transition:"top 0.5s"}}>
                <Link to="/" id="home"  style={{color:navLinkStyle.homeLinkColor, marginLeft:"20vh"}} 
                onMouseOver={()=>{linkHover("homeLinkColor")}}
                onMouseOut={()=>{linkNotHover("homeLinkColor")}}
                >Home</Link>

                <Link to={"/skills"} id="skills" style={{color:navLinkStyle.servicesLinkColor }} 
                onMouseOver={()=>{linkHover("servicesLinkColor")}}
                
                onMouseOut={()=>{linkNotHover("servicesLinkColor")}}
                className="links" >Services</Link>

               <Link to={"/portfolio"} id="work" style={{color:navLinkStyle.previewLinkColor}} 
               
               onMouseOver={()=>{linkHover("previewLinkColor")}} 
              onMouseOut={()=>{linkNotHover("previewLinkColor")}}
               className="links">Previews</Link>

                <Link to="/about" id="about" className="links" 
                onMouseOver={()=>{linkHover("aboutLinkColor")}} 
                onMouseOut={()=>{linkNotHover("aboutLinkColor")}}
                style={{color:navLinkStyle.aboutLinkColor}} >About</Link>

              </div>
              
            <Mobilenav current={"/portfolio"}/> 

             <div id="imacon">
               <div id="imlepa">
                  <div id="imle">
                   <div>
                   <div id="coloroverRe" ref={shadere}>
                    <a href="https://danielfrancisco.github.io/Resort/" target="_blank">
                      <img ref={resortIma} src={resorti} onMouseOver={()=>{buttonHover(resortIma, shadere)}} 
                       onMouseOut={()=>{buttonNotHover(resortIma, shadere)}}/>
                    </a>
                    </div>
                    <a href="https://danielfrancisco.github.io/Resort/" target="_blank">
                      <button onMouseOver={()=>{buttonHover(resortIma, shadere)}} 
                       onMouseOut={()=>{buttonNotHover(resortIma, shadere)}}>
                        Get a Demo </button>
                    </a>
              </div>

                   <div>
                    <div id="coloroverMa" ref={shadema}>
                      <a  target="_blank" href="https://danielfrancisco.github.io/martyswebapp/#/">
                        <img src={martysi} ref={martysIma}  onMouseOver={()=>{buttonHover(martysIma, shadema)}} 
                       onMouseOut={()=>{buttonNotHover(martysIma, shadema)}}/>
                      </a>
                  </div>
                        <a href="https://danielfrancisco.github.io/martyswebapp/#/" target="_blank">
                          <button onMouseOver={()=>{buttonHover(martysIma, shadema)}} 
                       onMouseOut={()=>{buttonNotHover(martysIma, shadema)}}>
                        Get a demo </button></a>
                        
                   </div>

                   <div id="coloroverFr" ref={shadefr}>
                    <a href="https://danielfrancisco.github.io/Franks/" target="_blank">
                      <img src={franks} ref={frankIma} onMouseOver={()=>{buttonHover(frankIma, shadefr)}} 
                       onMouseOut={()=>{buttonNotHover(frankIma, shadefr)}}/>
                    </a>
                  </div>
                  <a href="https://danielfrancisco.github.io/Franks/" target="_blank">
                    <button onMouseOver={()=>{buttonHover(frankIma, shadefr)}} 
                       onMouseOut={()=>{buttonNotHover(frankIma, shadefr)}}>
                      Get a Demo 
                      </button></a>

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
  