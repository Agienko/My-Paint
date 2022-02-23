import { canvas, ctx} from "./index.js"
import {mainColor2 } from "./index.js";
const btnClose = document.querySelector('#btnClose')
btnClose.addEventListener('click', function(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = mainColor2.value
    ctx.fillRect(0, 0, canvas.width, canvas.height)
})