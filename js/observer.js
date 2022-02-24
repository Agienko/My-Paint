import {rightMenu} from './instr&sideBar.js'

export let observer = new MutationObserver(mutationRecords => {
    (mutationRecords[0].addedNodes[0].textContent === "Круг" 
    || mutationRecords[0].addedNodes[0].textContent === "Прямоугольник" 
    || mutationRecords[0].addedNodes[0].textContent === "Текст") 
     ?  rightMenu.style.display = 'flex' 
     :  rightMenu.style.display = 'none' ; 
 
     (mutationRecords[0].addedNodes[0].textContent === "Текст") 
      ?  textarea.style.display = 'flex' 
      :  textarea.style.display = 'none' ;
  });
  
  