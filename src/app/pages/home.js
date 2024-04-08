import "../../styless/pages/home.scss"
import { Link } from "react-router-dom";
import { useState} from "react";
import axios from "axios";
import ContentContainer from "../components/ContentContainer";

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
      <ContentContainer content={
        <>
        <div id="con">
            <div id="nombre">Daniel Campoverde</div>
            <div id="titulo">Full stack developer</div>
            <div id="titulo">Ux Designer</div>
            <Link to={"/contact"} id='contactLink'><button>Contact</button></Link>
          </div>
        </>
      }/> 
      </>
    );

  }

  


