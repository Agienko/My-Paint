import { ctx } from "./index.js";

export let restoreArr = []

undo.addEventListener('click', () =>{
    if(restoreArr.length > 0){
        ctx.putImageData(restoreArr.pop(), 0, 0)
    }
})