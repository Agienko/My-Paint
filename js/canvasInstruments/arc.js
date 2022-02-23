import { canvas , ctx, mainColor1, mainColor2, sick} from "../index.js"
import { instrType } from "../instr&sideBar.js";
import { opacityValue } from "../opacityRange.js";
export function drawArc(){
        canvas.addEventListener('mousedown', run)
        function run(){
    if(instrType === 'Круг'){
        ctx.lineWidth = sick;
        ctx.strokeStyle = mainColor1.value;
        ctx.globalAlpha = opacityValue
        let x = event.offsetX
        let y = event.offsetY
        
        let radius = 0;
        let save = ctx.getImageData(0, 0, canvas.width, canvas.height)
        function change(){
        radius = ((event.offsetX - x)**2 + (event.offsetY - y)**2)**0.5
        ctx.clearRect(0, 0, canvas.width, canvas.height )
        ctx.putImageData(save, 0, 0)
        ctx.beginPath()
        ctx.arc(x, y, radius, 2*Math.PI, false);
        ctx.stroke()

        document.addEventListener('mouseup', function up(){
            
            canvas.removeEventListener('mousemove', change )
            document.removeEventListener('mouseup', up )
            ctx.putImageData(save, 0, 0)
            ctx.beginPath()
            ctx.arc(x, y, radius, 2*Math.PI, false);
            ctx.stroke()
             if(fillable.checked){
                ctx.fillStyle = mainColor2.value
                ctx.fill()
             } 
            })
            }
    canvas.addEventListener('mousemove', change)
    }
} 
}
