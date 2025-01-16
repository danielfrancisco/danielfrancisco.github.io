import "../../styless/pages/drop.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState, useContext} from "react";
import { Link } from "react-router-dom";
import { removePathName } from "./nav";
import LazyLoad from "react-lazyload";
import DarkModeButton from "./darkModeButton";
import Cookies from 'universal-cookie';
import { useNavigate } from "react-router-dom";
import {AppContext} from './currentTheme'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useLocation } from 'react-router-dom';


const cookies = new Cookies()

export default function Drop({setDropDown, dropDown}){
  const navigate = useNavigate()
  const { theme } = useContext(AppContext);
  const location = useLocation().pathname;
   
  let prevPage = ''

  if(sessionStorage.getItem('path')===null){
    prevPage =  "/"
   }else{
    prevPage = sessionStorage.getItem('path')
   }
 
   
 useEffect(()=>{
   removePathName()
   
    if (theme === 'light') {
      document.body.classList.add('light');
      document.body.classList.remove('dark');
    } else {
      document.body.classList.add('dark');
      document.body.classList.remove('light');
    }
  
},[theme])

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
  setDropDown({...dropDown, icon:faBars, height:'14vh'})
}
 
return(
        <>
      <LazyLoad>
      <div id="dropcon" >
      
           <Link className="links" to={{pathname:"/"}} state="/" onClick={setCurrentPage}><p>Home</p></Link> 

            <Link className="links" to={"/services"} onClick={setCurrentPage}><p>Services</p> </Link>

            <Link className="links" to={"/demos"} onClick={setCurrentPage}><p>Demos</p></Link>

            <Link className="links" to={"/about"}><p onClick={setCurrentPage}>About</p></Link>
            
          </div>
          </LazyLoad>
        
        </>
    )
}