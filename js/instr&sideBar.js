import { observer } from "./observer.js"

export const instruments = document.querySelector('.inst_center')
export const sideBar = document.querySelector('.sideBar')
export const rightMenu = document.querySelector('.inst_right')
export let instrType = 'Карандаш'
let isClose = false

instruments.addEventListener('click', () =>{
   if(event.target !== event.currentTarget){
      instrType = event.target.alt
      let node = event.target.cloneNode()
      sideBar.children[1].innerHTML=`${node.alt}`
      sideBar.children[1].append(node)
      }
})

sideBar.addEventListener('click', () =>{
   if(event.target.tagName === 'SPAN'){
      (isClose) ? sideBar.style.transform = 'translateX(0px)'
      : sideBar.style.transform = 'translateX(-100px)'
         isClose = !isClose
   }
})

// наблюдать за всем, кроме атрибутов
observer.observe(sideBar, {
   childList: true, // наблюдать за непосредственными детьми
   subtree: true, // и более глубокими потомками
   // characterDataOldValue: true // передавать старое значение в колбэк
 });