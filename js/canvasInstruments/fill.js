import { canvas , ctx, mainColor1} from "../index.js"
import { instrType } from "../instr&sideBar.js";
import { opacityValue } from "../opacityRange.js";
export function fill(){
    function f(){
      if(instrType === 'Заливка'){
        ctx.globalAlpha = opacityValue
        ctx.fillStyle = mainColor1.value
        ctx.fillRect(0, 0, canvas.width, canvas.height)
      }
     }
    canvas.addEventListener('click', f)
}
