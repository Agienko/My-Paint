import { canvas } from "./index.js"
const footerInfo = document.querySelector('.footer_info')
const scale = document.querySelector('#scale')
const scaleInfo =document.querySelector('#scaleInfo')
document.addEventListener('mousemove', function(){
    (event.target === canvas) 
    ? footerInfo.textContent = `x:${event.offsetX} y:${event.offsetY}`
    : footerInfo.textContent = `x:... y:...`
})

scale.addEventListener('input', function(){
    canvas.style.transform = `scale(${event.target.value/100})`
    scaleInfo.textContent = `${event.target.value}%`
})



    
