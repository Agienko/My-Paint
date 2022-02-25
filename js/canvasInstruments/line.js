import { canvas , ctx, mainColor1, sick} from "../index.js"
import { instrType } from "../instr&sideBar.js";
import { opacityValue } from "../opacityRange.js";
import { restoreArr } from "../restore.js";
export function drawLine(){
    canvas.addEventListener('mousedown', run)
       function run(){
        if(instrType === 'Линия'){
            ctx.lineWidth = sick;
            ctx.globalAlpha = opacityValue
            ctx.strokeStyle = mainColor1.value;
            ctx.lineCap = 'round'
            let x = event.offsetX
            let y = event.offsetY
            let endX, endY;
            let save = ctx.getImageData(0, 0, canvas.width, canvas.height)
            restoreArr.push(save)
            ctx.moveTo(x,y)
             
             function change(){
               ctx.clearRect(0, 0, canvas.width, canvas.height )
               ctx.putImageData(save, 0, 0)
               endX = event.offsetX
               endY = event.offsetY
               ctx.beginPath()
               ctx.moveTo(x,y)
               ctx.lineTo(event.offsetX, event.offsetY);
               ctx.stroke()
               document.addEventListener('mouseup', function up(){  
                 canvas.removeEventListener('mousemove', change )
                 document.removeEventListener('mouseup', up )
                 ctx.putImageData(save, 0, 0)
                 ctx.beginPath()
                 ctx.moveTo(x,y)
                 ctx.lineTo(endX, endY)
                 ctx.stroke()
                 })
        
                 }
         canvas.addEventListener('mousemove', change)
        }
       } 
  }