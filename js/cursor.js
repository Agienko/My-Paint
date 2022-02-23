import { canvas } from "./index.js"
import { sideBar, instruments } from "./instr&sideBar.js"
const cursor = document.querySelector('#cursor')
// canvas.addEventListener()

instruments.addEventListener('click', function(){
    cursor.innerHTML = ''
    cursor.append(sideBar.childNodes[3].childNodes[1].cloneNode(false))
})
canvas.addEventListener('pointermove', function(){
    // cursor.style.left = event.clientX + 3 + 'px';
    // cursor.style.top = event.clientY - 38 + 'px';
    event.preventDefault()
    cursor.style.transform = `translate(${event.clientX + 3 }px, ${event.clientY - 23}px)`
    
})
canvas.addEventListener('mouseenter', function(){
    cursor.style.display = 'block'
    cursor.style.cursor = 'none';
})
canvas.addEventListener('mouseleave', function(){
    cursor.style.display = 'none'
})