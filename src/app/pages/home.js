import "../../styless/pages/home.scss"
import { Link } from "react-router-dom";
import { useEffect, useState} from "react";
import axios from "axios";
import ContentContainer from "../components/ContentContainer";
import { useLocation } from 'react-router-dom'
import { useNavigate } from "react-router-dom";


export default function Home() {
  const [viewCounter, setViewCounter] = useState(0)
  
  const navigation = useNavigate()
  const location = useLocation()

  useEffect(()=>{
    /*chech if the user comes from another route
    or if it was redirected to the home page
    */
    
   if(sessionStorage.getItem('drop')!==null){
    navigation((sessionStorage.getItem('drop'))) 
    sessionStorage.removeItem('drop')
    
   }else{
    navigation((sessionStorage.getItem('path')))
   }

   },[])

  
  /*useEffect(()=>{
    axios.get("https://counterapi-ywst.onrender.com/")
    .then(res=>{
      setViewCounter(res.data.counter+1)
    })
  },[])

  useEffect(()=>{
      if(viewCounter!==0){
        axios.post("https://counterapi-ywst.onrender.com/",{
          viewCounter
        })
      }
      
  },[viewCounter])*/
  

 if(sessionStorage.getItem('path')!==null && sessionStorage.getItem('path')!=="/"){
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
          <Link to={"/contact"} id='contactLink' ><button >Contact</button></Link>
        </div>
      </>
    }/> 
    </>
  );
 }
  
 
}

  


