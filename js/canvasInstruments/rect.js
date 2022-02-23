import { canvas , ctx, mainColor1, mainColor2, sick} from "../index.js"
import { instrType } from "../instr&sideBar.js";
import { opacityValue } from "../opacityRange.js";
export function drawRect(){
        canvas.addEventListener('mousedown', run)
        function run(){
            if(instrType === 'Прямоугольник'){
                ctx.lineWidth = sick;
                ctx.strokeStyle = mainColor1.value;
                ctx.globalAlpha = opacityValue;
                let x = event.offsetX
                let y = event.offsetY
                
                let save = ctx.getImageData(0, 0, canvas.width, canvas.height)
    
                function change(){
               
                ctx.clearRect(0, 0, canvas.width, canvas.height )
                ctx.putImageData(save, 0, 0)
                ctx.beginPath()
                ctx.moveTo(x, y)
                ctx.rect(x, y, event.offsetX -x , event.offsetY - y);
                ctx.stroke()
        
                document.addEventListener('mouseup', function up(){
                    canvas.removeEventListener('mousemove', change )
                    ctx.putImageData(save, 0, 0)
                    ctx.beginPath()
                    ctx.rect(x, y, event.offsetX - x, event.offsetY - y);
                    ctx.stroke()
                    if(fillable.checked){
                        ctx.fillStyle = mainColor2.value
                        ctx.fill()
                     } 
                    document.removeEventListener('mouseup', up)
                    
                    })
                    }
            canvas.addEventListener('mousemove', change)
            }
       } 
  }
