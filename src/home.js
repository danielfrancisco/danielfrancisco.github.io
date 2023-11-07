import "./styless/home.scss"
import { Link } from "react-router-dom";
import Mobilenav from "./mobilenav";
import Nav from "./nav";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState} from "react";
import axios from "axios";

export default function Home() {
  const [viewCounter, setViewCounter] = useState(0)
  
   
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

 return (
      <>
      
       <div id="fondo">
          <Nav/>
          <Mobilenav current="/"/>  
          
            <div id="con">
            <FontAwesomeIcon icon="fa-solid fa-sun-bright" />              
            <div id="nombre">Daniel Campoverde</div>
            <div id="titulo">Full stack developer</div>
            <div id="titulo">Ux Designer</div>
            <Link to={"/contact"}><button>Contact</button></Link>
        </div>
          
        </div>
      </>
    );

  }

  


