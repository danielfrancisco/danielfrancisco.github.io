import { current } from "@reduxjs/toolkit"

export function addToHistory(path){
    if(!sessionStorage.getItem('noRedirect')){
        if(!sessionStorage.getItem('history')){
          sessionStorage.setItem('history', JSON.stringify({history:[], currentPage:path, index:0}))
        }

        if(!sessionStorage.getItem('noRedirect')){
          let historyVar = JSON.parse(sessionStorage.getItem('history')).history
            
          if(historyVar[historyVar.length-1]!==path){
            historyVar.push(path)
            if(historyVar.length<2){
              historyVar[0] = '/'
              historyVar[1] = path
            }
          }

          if(window.history.state.idx>1 ){
            sessionStorage.setItem('history', JSON.stringify({history: historyVar, 
              currentPage:historyVar[historyVar.length-1], 
              index: window.history.state.idx, last: historyVar[historyVar.length-2]
              ,current:historyVar[historyVar.length-1]}))
          }
 }
  }

  let myIndex = JSON.parse(sessionStorage.getItem('history')).index
  let browserIndex = window.history.state.idx
  let history = JSON.parse(sessionStorage.getItem('history')).history

  
  console.log(history)
  // console.log(JSON.parse(sessionStorage.getItem('history')))
  let nu = parseInt(history.length-1)-parseInt(myIndex-1)
  if(myIndex!==browserIndex){
    
    for(let i in history){
      if(i<1){
       const state = {idx :myIndex }
       const title = ''
       const newUrl = history[i]
       window.history.replaceState(state, title, newUrl);
      }
       const state = {idx :myIndex }
       const title = ''
       const newUrl = history[i]
       window.history.pushState(state, title, newUrl)
     }
     let nu = parseInt(history.length-1)-parseInt(myIndex-1)
     
     if(nu>0 || nu<0){
      window.history.go(-nu)
     }
  }
}

export const handlePopState = (event) => {
  sessionStorage.setItem("noRedirect","user will not be redirected to the page he comes from")
  let myIndex = JSON.parse(sessionStorage.getItem('history')).index
  let browserIndex = window.history.state.idx

  let historyVar = JSON.parse(sessionStorage.getItem('history')).history
  sessionStorage.setItem('history', JSON.stringify({history: historyVar, 
    currentPage:historyVar[historyVar.length-1], 
    index: window.history.state.idx}))
  
};