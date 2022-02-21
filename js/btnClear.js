import {canvas, ctx} from './mainMenu.js';

const btnClose = document.querySelector('#btnClose')
btnClose.addEventListener('click', function(){
    let w = document.forms[0].children[1].children[1].children[0].value
    let  h = document.forms[0].children[1].children[2].children[0].value
    ctx.clearRect(0, 0, canvas.width, canvas.height )
})