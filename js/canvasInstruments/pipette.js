import { canvas , ctx, mainColor1, mainColor2} from "../index.js"
import { instrType } from "../instr&sideBar.js";

export function pipette(){
        canvas.addEventListener('mousedown', function which1(){ 
            if(instrType === 'Палитра'){

            event.preventDefault()
            let data = ctx.getImageData(event.offsetX, event.offsetY, 1, 1).data
            let color = '#' + data.join(' ').split(' ').slice(0, -1)
            .map(i => (i.length > 1) ? (+i).toString(16) : 0 + (+i).toString(16))
            .join('')
            if(event.which === 1){
                mainColor1.value = color
            } else if(event.which === 3) {
                mainColor2.value = color
            }
        }
        })
        canvas.addEventListener('contextmenu', function which3(){
            if(instrType === 'Палитра'){
            event.preventDefault()
            }
        })
    
}

