import { canvas , ctx, mainColor1, mainColor2,  sick} from "../index.js"
import { instrType } from "../instr&sideBar.js";
import { opacityValue } from "../opacityRange.js";
import { restoreArr} from "../restore.js";
export function drawText() {
    canvas.addEventListener('mousedown', run)
     function run(){
    if(instrType === 'Текст'){
        ctx.fillStyle = mainColor2.value; // цвет
        ctx.strokeStyle = mainColor1.value; // цвет
        ctx.globalAlpha = opacityValue
        let x = event.offsetX 
        let y = event.offsetY
        
        let save = ctx.getImageData(0, 0, canvas.width, canvas.height)
        restoreArr.push(save)

        ctx.font = `${(sick < 10) ? 10 : sick}px serif`;
        ctx.strokeText(textarea.value, x, y)
        if(fillable.checked){
            ctx.fillText(textarea.value, x, y)
            ctx.fill()
         } 
}
}         
}