import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import DarkModeIcon from "./darkModeButton";
import "../../styless/components/nav.scss"
import DarkModeButton from "./darkModeButton";
import { useState, useEffect } from "react";
import Drop from "./drop"
import { faX,} from '@fortawesome/free-solid-svg-icons'

export default function Mobilenav({current}){
  const [scrollPosition, setScrollPosition] = useState(0);
  const[navBottonBorder, setnavBottonBorder] = useState('solid 1px var(--mobileNavBorder)')
  const[dropDown, setDropDown] = useState({icon: faBars, height:'115px'})

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY || document.documentElement.scrollTop;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);
   
  function setCurrentPage(e){
    if(e==="/drop"){
      sessionStorage.setItem('drop', "/drop")
    }else{
      
    let route = "/"+e.target.innerHTML.toLowerCase()
    
    if(route==="/home"){
      route="/"
    }
    sessionStorage.setItem('path', route)
    }
   
  }

  function toggleDropDown(){
        if(dropDown.icon.iconName==='bars'){
          setDropDown({...dropDown, icon:faX, height:'104vh'})
          
        }else{
          setDropDown({...dropDown, icon:faBars, height:'115px'})
        }
  }

   return(
        <>
        <div id="mobileNav" style={{borderBottom:scrollPosition>0?navBottonBorder:"", 
        height:dropDown.height}}>

              <Link to={"/"}  onClick={setCurrentPage}><div id="mobileHomeButton" >
                Home
              </div></Link>
              
              <div id='dropDownIconContainer' onClick={toggleDropDown}>
              <FontAwesomeIcon icon={dropDown.icon} id="bars"/>
              </div>
              
              <DarkModeButton size='22px'/>
              <Drop setDropDown={setDropDown} dropDown={dropDown}/>
            </div>
        </>
    )
}