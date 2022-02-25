import { canvas , ctx, mainColor1, sick} from "../index.js"
import { instrType } from "../instr&sideBar.js";
import { opacityValue } from "../opacityRange.js";
import { restoreArr} from "../restore.js";
export function drawPen() {
    canvas.addEventListener('mousedown', run)
     function run(){
    if(instrType === 'Карандаш'){
        ctx.lineWidth = sick; //толщина
        ctx.strokeStyle = mainColor1.value; // цвет
        ctx.globalAlpha = opacityValue
        let x = event.offsetX 
        let y = event.offsetY
        ctx.lineJoin = 'round' 
        ctx.lineCap = 'round'
        let save = ctx.getImageData(0, 0, canvas.width, canvas.height)
        restoreArr.push(save)
        ctx.beginPath()
        ctx.moveTo(x, y)
        let  change = () =>{
        ctx.stroke()
        ctx.lineTo(event.offsetX, event.offsetY)  
        }
    canvas.addEventListener('mousemove', change)
    canvas.addEventListener('mouseup', function up(){
    canvas.removeEventListener('mousemove', change )
    canvas.removeEventListener('mouseup', up )
    })
}
}         
}
