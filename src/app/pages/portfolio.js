import { useEffect, useState } from "react";
import resorti from "../../images/resorti.png";
import martysi from "../../images/martysi.png";
import franks from "../../images/franks.png";
import Mobilenav from "../components/mobilenav";
import { Link } from "react-router-dom";
import LazyLoad from 'react-lazyload';
import { useRef } from "react";
import Cookies from 'universal-cookie';
import "../../styless/pages/_portfolio.scss"


const cookies = new Cookies()
export default function Portfolio(){
    const [navLinkStyle, setNavLinkStyle] = useState(
      {homeLinkColor:"gray",
      servicesLinkColor:"gray",
      previewLinkColor:"gray",
      aboutLinkColor:"gray",
    })
    
    let resortIma = useRef()
    let shadere = useRef()
    let shadema = useRef()
    let martysIma = useRef()
    let shadefr = useRef()
    let frankIma = useRef()

    useEffect(()=>{
        if(cookies.get('darktheme')==='on'){
          document.body.style.setProperty('--bodyColor' ,"#0f131a")
          document.body.style.setProperty('--fondoColor' ,"#0f131a")
          
        }else{
          
          document.body.style.setProperty('--bodyColor' ,"white")
          document.body.style.setProperty('--fondoColor' ,"white")
        }
    },[])

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
  
   function buttonHover(image, shade){
    image.current.style.opacity="0.5"
    shade.current.style.background="black"
    image.current.style.animation="none"
    shade.current.style.animation="none"
    
   }

   function buttonNotHover(image, shade){
    image.current.style.opacity="1"
    shade.current.style.backgroundColor="transparent"
    image.current.style.animation="none"
    shade.current.style.animation="none"
   }

   function setCurrentPage(e){
    let route = "/"+e.target.innerHTML.toLowerCase()
    if(route==="/home"){
      route="/"
    }
    sessionStorage.setItem('path', route)
  }
   return(
          <>
      <div id="previewsNav">
                <Link to="/"  id="home" onClick={setCurrentPage}  style={{color:navLinkStyle.homeLinkColor, marginLeft:"20vh"}} 
                onMouseOver={()=>{linkHover("homeLinkColor")}}
                onMouseOut={()=>{linkNotHover("homeLinkColor")}}
                >Home</Link>

                <Link to={"/services"} id="skills"  onClick={setCurrentPage} style={{color:navLinkStyle.servicesLinkColor }} 
                onMouseOver={()=>{linkHover("servicesLinkColor")}}
                
                onMouseOut={()=>{linkNotHover("servicesLinkColor")}}
                className="links" >Services</Link>

               <Link to={"/portfolio"} id="work"  onClick={setCurrentPage} style={{color:navLinkStyle.previewLinkColor}} 
               
               onMouseOver={()=>{linkHover("previewLinkColor")}} 
              onMouseOut={()=>{linkNotHover("previewLinkColor")}}
               className="links">Previews</Link>

                <Link to="/about" id="about"  onClick={setCurrentPage} className="links" 
                onMouseOver={()=>{linkHover("aboutLinkColor")}} 
                onMouseOut={()=>{linkNotHover("aboutLinkColor")}}
                style={{color:navLinkStyle.aboutLinkColor}} >About</Link>

              </div>
              
            <Mobilenav current={"/portfolio"}/> 
          
             <div id="previewsContent">
             <LazyLoad>
                <div id="coloroverRe" ref={shadere}>
                  
                    <a href="https://danielfrancisco.github.io/Resort/" target="_blank">
                      <img className='previewsImages' ref={resortIma} src={resorti} onMouseOver={()=>{buttonHover(resortIma, shadere)}} 
                       onMouseOut={()=>{buttonNotHover(resortIma, shadere)}}/>
                    </a>
                    
                    <a href="https://danielfrancisco.github.io/Resort/" target="_blank">
                      <button className='previewsButton' onMouseOver={()=>{buttonHover(resortIma, shadere)}} 
                       onMouseOut={()=>{buttonNotHover(resortIma, shadere)}}>
                        Get a Demo </button>
                    </a>
                   </div>
                </LazyLoad>
                  
                <LazyLoad  >
                    <div id="coloroverMa" ref={shadema}>
                      <a  target="_blank" href="https://danielfrancisco.github.io/martyswebapp/#/">
                        <img className='previewsImages' src={martysi} ref={martysIma}  onMouseOver={()=>{buttonHover(martysIma, shadema)}} 
                       onMouseOut={()=>{buttonNotHover(martysIma, shadema)}}/>
                      </a>
                  
                        <a href="https://danielfrancisco.github.io/martyswebapp/#/" target="_blank">
                          <button className='previewsButton' onMouseOver={()=>{buttonHover(martysIma, shadema)}} 
                       onMouseOut={()=>{buttonNotHover(martysIma, shadema)}}>
                        Get a demo </button></a>
                     </div>
                  </LazyLoad>

                  <LazyLoad>
                   <div id="coloroverFr" ref={shadefr}>

                    <a href="https://danielfrancisco.github.io/Franks/" target="_blank">
                      <img className='previewsImages' src={franks} ref={frankIma} onMouseOver={()=>{buttonHover(frankIma, shadefr)}} 
                       onMouseOut={()=>{buttonNotHover(frankIma, shadefr)}}/>
                    </a>
                  

                  <a href="https://danielfrancisco.github.io/Franks/" target="_blank">
                    <button className='previewsButton' onMouseOver={()=>{buttonHover(frankIma, shadefr)}} 
                       onMouseOut={()=>{buttonNotHover(frankIma, shadefr)}}>
                      Get a Demo 
                      </button></a>

                  </div>

                  </LazyLoad>
               </div>
              
            </>
      )

    }
  