import { canvas , ctx, mainColor2, sick} from "../index.js"
import { instrType } from "../instr&sideBar.js";
import { opacityValue } from "../opacityRange.js";
export function drawErsaer() {
    canvas.addEventListener('mousedown', run)
     function run(){
        if(instrType === 'Ластик'){
            ctx.lineWidth = sick; //толщина
            ctx.strokeStyle = mainColor2.value; // цвет
            ctx.globalAlpha = opacityValue
            let x = event.offsetX 
            let y = event.offsetY
            
            ctx.lineJoin = 'round' 
            ctx.lineCap = 'round'

            ctx.beginPath()
            ctx.moveTo(x, y)

            let  change = () =>{
            ctx.stroke()
            ctx.lineTo(event.offsetX, event.offsetY)  
            }
            canvas.addEventListener('mousemove', change)
            canvas.addEventListener('mouseup', function up(){
                canvas.removeEventListener('mousemove', change )
                canvas.removeEventListener('mouseup', up)
            })
        } 
    } 
}
