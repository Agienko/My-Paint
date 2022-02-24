
export const instruments = document.querySelector('.inst_center')
export const sideBar = document.querySelector('.sideBar')
const rightMenu = document.querySelector('.inst_right')
export let instrType = 'Карандаш';

instruments.addEventListener('click', function(){
if(event.target !== event.currentTarget){
   instrType = event.target.alt
   let node = event.target.cloneNode()
   sideBar.children[1].innerHTML=`${node.alt}`
   sideBar.children[1].append(node)
   }
})

let isClose = false;
sideBar.addEventListener('click', function(){
   if(event.target.tagName === 'SPAN'){
    (isClose) ? sideBar.style.transform = 'translateX(0px)'
    : sideBar.style.transform = 'translateX(-100px)';
      isClose = !isClose;
   }
})



let observer = new MutationObserver(mutationRecords => {
   (mutationRecords[0].addedNodes[0].textContent === "Круг" 
   || mutationRecords[0].addedNodes[0].textContent === "Прямоугольник" 
   || mutationRecords[0].addedNodes[0].textContent === "Текст") 
    ?  rightMenu.style.display = 'flex' 
    :  rightMenu.style.display = 'none' ; 

    (mutationRecords[0].addedNodes[0].textContent === "Текст") 
     ?  textarea.style.display = 'flex' 
     :  textarea.style.display = 'none' ; 




 });
 
 // наблюдать за всем, кроме атрибутов
 observer.observe(sideBar, {
   childList: true, // наблюдать за непосредственными детьми
   subtree: true, // и более глубокими потомками
   // characterDataOldValue: true // передавать старое значение в колбэк
 });