import { canvas , ctx, mainColor1} from "../index.js"
import { instrType } from "../instr&sideBar.js";
import { opacityValue } from "../opacityRange.js";
import { restoreArr} from "../restore.js";
export function fill(){
    function f(){
      if(instrType === 'Заливка'){
        let save = ctx.getImageData(0, 0, canvas.width, canvas.height)
        restoreArr.push(save)
        ctx.globalAlpha = opacityValue
        ctx.fillStyle = mainColor1.value
        ctx.fillRect(0, 0, canvas.width, canvas.height)
      }
     }
    canvas.addEventListener('click', f)
}
