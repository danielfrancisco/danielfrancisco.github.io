import "../../styless/pages/drop.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState} from "react";
import { faX,} from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import { removePathName } from "./nav";

export default function Drop(){
  let prevPage = ''

  if(sessionStorage.getItem('path')===null){
    prevPage =  "/"
   }else{
    prevPage = sessionStorage.getItem('path')
   }
 
   
 useEffect(()=>{
  console.log(sessionStorage.getItem('path'))
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
        
      <div id="dropcon">
           <Link to={prevPage} onClick={()=>setCurrentPage("x")}>
           <FontAwesomeIcon icon={faX} id="close" />
           </Link>
          
            <Link id="link" to={{pathname:"/"}} state="/" onClick={setCurrentPage}><p>Home</p></Link> 

            <Link id="link" to={"/services"} onClick={setCurrentPage}><p>Services</p> </Link>

            <Link id="link" to={"/previews"} onClick={setCurrentPage}><p>Previews</p></Link>

            <Link id="link" to={"/about"}><p onClick={setCurrentPage}>About</p></Link>
          </div>
        </>
    )
}