import "../../styless/pages/home.scss"
import { Link } from "react-router-dom";
import { useEffect, useState} from "react";
import ContentContainer from "../components/ContentContainer";
import { useNavigate } from "react-router-dom";
import {addToHistory} from "../functions/pagesHistory"

export default function Home() {
  const [viewCounter, setViewCounter] = useState(0)
  
  const navigate = useNavigate()
  
  useEffect(()=>{
    let history = JSON.parse(sessionStorage.getItem('history')).history
    let browserIndex = window.history.state.idx

   
   
    if(!sessionStorage.getItem('noRedirect')){
      if(sessionStorage.getItem('drop')){
        navigate(sessionStorage.getItem('drop')) 
        sessionStorage.removeItem('drop')
        
       }else{
        //navigate(sessionStorage.getItem('path'))

        let myIndex = JSON.parse(sessionStorage.getItem('history')).index
        let browserIndex = window.history.state.idx
        let history = JSON.parse(sessionStorage.getItem('history')).history
        let current =  history[myIndex-1]
        
        navigate(current)  
        
           
           
       }
       
       
    }else{
      const lastPage = JSON.parse(sessionStorage.getItem('history')).last
      navigate(lastPage)
      
    }
    
  },[])

  function setCurrentPage(e){
    let route = "/"+e.target.innerHTML.toLowerCase()
    if(route==="/home"){
      route="/"
    }
    sessionStorage.setItem('path', route)
  }
  
if(sessionStorage.getItem('path') && sessionStorage.getItem('path')!=="/" 
&& !sessionStorage.getItem('noRedirect')){
  return(
    <>
    </>
  )
 }else{
  return (
    <>
    <ContentContainer content={
      <>
      <div id="con">
          <div id="nombre">Daniel Campoverde</div>
          <div id="titulo">Full stack developer</div>
          <div id="titulo">Ux Designer</div>
          <Link to={"/contact"} id='contactLink' onClick={setCurrentPage} ><button >Contact</button></Link>
        </div>
      </>
    }/> 
    </>
  );
 }
  
 }

  


