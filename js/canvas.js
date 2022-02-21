import { canvas } from "./mainMenu.js";
import {mainColor1} from './colorInputs.js';
let sickLine = document.querySelector('#sickLine');
let forSickLine = document.querySelector('#forSickLine');
let sick = '2';
sickLine.addEventListener('mousemove', function(){
  sick = Math.round((+event.target.value + 1)/2).toString();
  forSickLine.textContent = sick
})

let ctx = canvas.getContext('2d')
canvas.addEventListener('mousedown', function(){

    let x = event.offsetX
    let y = event.offsetY
    ctx.beginPath()
    ctx.moveTo(x, y)
    function change(){
        ctx.lineCap = 'round'

        ctx.stroke()
        ctx.lineWidth = sick;
       ctx.strokeStyle = mainColor1.value;
        ctx.lineTo(event.offsetX, event.offsetY)  
        }
canvas.addEventListener('mousemove', change)

document.addEventListener('mouseup', function(){
    canvas.removeEventListener('mousemove', change )
    })
})


