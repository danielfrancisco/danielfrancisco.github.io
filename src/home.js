import "./styless/home.scss"
import { Link } from "react-router-dom";
import Mobilenav from "./mobilenav";
import Nav from "./nav";
import { useEffect, useState} from "react";
import axios from "axios";

export default function Home() {
  const [viewCounter, setViewCounter] = useState(1)
  const [dataCounter, setDataCounter] = useState(0)
   
  useEffect(()=>{
    axios.get("https://counterapi-ywst.onrender.com/")
    .then(res=>{
      setDataCounter(res.data.counter)
    })
  },[])

  useEffect(()=>{
     if(dataCounter!==0){
         setViewCounter(viewCounter+dataCounter)
     }
     
  },[dataCounter])

  useEffect(()=>{
    if(viewCounter!=1){
      axios.post("https://counterapi-ywst.onrender.com/",{
      viewCounter
      })
    }
    
  },[viewCounter])

 return (
      <>
      
       <div id="fondo">
          <Nav/>
          <Mobilenav current="/"/>  
          
            <div id="con">
            <div id="nombre">Daniel Campoverde</div>
            <div id="titulo">Full stack developer</div>
            <div id="titulo">Ux Designer</div>
            <Link to={"/contact"}><button>Contact</button></Link>
        </div>
          
        </div>
      </>
    );

  }

  


