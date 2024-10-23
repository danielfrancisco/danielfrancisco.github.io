import "../../styless/pages/drop.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState} from "react";
import { faX,} from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import { removePathName } from "./nav";
import LazyLoad from "react-lazyload";
import DarkModeIcon from "./darkModeicon";
import Cookies from 'universal-cookie';
import { useNavigate } from "react-router-dom";

const cookies = new Cookies()

export default function Drop(){
  const navigate = useNavigate()

  let prevPage = ''

  if(sessionStorage.getItem('path')===null){
    prevPage =  "/"
   }else{
    prevPage = sessionStorage.getItem('path')
   }
 
   
 useEffect(()=>{
  if(cookies.get('darktheme')==='on'){
    
    document.body.style.setProperty('--fondoColor' ,"#1A202C")
    document.body.style.setProperty('--linksColor' ,"#E0E0E0")
    
  }else{
    
    document.body.style.setProperty('--bodyColor' ,"white")
    document.body.style.setProperty('--linksColor' ,"black")
    document.body.style.setProperty('--fondoColor' ,"white")
  }
  
   removePathName()

},[])

 function setCurrentPage(e){
  sessionStorage.removeItem('drop')
  if(e==="x"){
   if(sessionStorage.getItem('path')===null){
    sessionStorage.setItem('drop', "/")
   }else{
    sessionStorage.setItem('drop', sessionStorage.getItem('path'))
   }
 }else{
  let route = "/"+e.target.innerHTML.toLowerCase()
  if(route==="/home"){
    route="/"
  }
  sessionStorage.setItem('path', route)
 }
 removePathName()
  
}
 
return(
        <>
      <LazyLoad>
      <div id="dropcon">
      
           <Link to={prevPage} onClick={()=>setCurrentPage("x")}>
           <FontAwesomeIcon icon={faX} id="close" />
           </Link>

           
            <Link id="link" to={{pathname:"/"}} state="/" onClick={setCurrentPage}><p>Home</p></Link> 

            <Link id="link" to={"/services"} onClick={setCurrentPage}><p>Services</p> </Link>

            <Link id="link" to={"/demos"} onClick={setCurrentPage}><p>Demos</p></Link>

            <Link id="link" to={"/about"}><p onClick={setCurrentPage}>About</p></Link>
            
          </div>
          </LazyLoad>
        
        </>
    )
}