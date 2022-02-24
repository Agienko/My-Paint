import { canvas } from "./index.js"
import { sideBar, instruments } from "./instr&sideBar.js"

const cursor = document.querySelector('#cursor')

instruments.addEventListener('click', () =>{
    cursor.innerHTML = ''
    cursor.append(sideBar.childNodes[3].childNodes[1].cloneNode(false))
})
canvas.addEventListener('pointermove', () =>{
    event.preventDefault()
    cursor.style.transform = `translate(${event.clientX + 3 }px, ${event.clientY - 23}px)`
    
})
canvas.addEventListener('mouseenter', () =>{
    cursor.style.display = 'block'
    cursor.style.cursor = 'none'
})
canvas.addEventListener('mouseleave', () => cursor.style.display = 'none')