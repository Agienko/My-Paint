import { canvas, ctx, clearAll} from "./index.js"
import {mainColor2 } from "./index.js"






const btnClose = document.querySelector('#btnClose')
btnClose.addEventListener('click', function(){
    clearAll()
})