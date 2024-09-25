import "../../styless/pages/home.scss"
import { Link } from "react-router-dom";
import { useEffect, useState} from "react";
import ContentContainer from "../components/ContentContainer";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [viewCounter, setViewCounter] = useState(0)
  
  const navigate = useNavigate()
  
  useEffect(()=>{
    if(sessionStorage.getItem('noRedirect')===null){
      if(sessionStorage.getItem('drop')!==null){
        navigate(sessionStorage.getItem('drop')) 
        sessionStorage.removeItem('drop')
        
       }else{
        navigate(sessionStorage.getItem('path'))
       }
    }else{
      navigate('/', { replace: true})
      
    }
    
  },[])

  function setCurrentPage(e){
    let route = "/"+e.target.innerHTML.toLowerCase()
    if(route==="/home"){
      route="/"
    }
    sessionStorage.setItem('path', route)
  }
  
if(sessionStorage.getItem('path')!==null && sessionStorage.getItem('path')!=="/" 
&& sessionStorage.getItem('noRedirect')===null){
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

  


