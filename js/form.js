import { canvas , ctx, mainColor2} from "./index.js"
import { withoutForms } from "./mainMenu.js"

const btnOk = document.querySelector('#btn_form_ok')
const btnCancel = document.querySelector('#btn_form_cancel')
const btnDefault = document.querySelector('#btn_form_default')
const btnClose = document.querySelector('.form_close')
const sizeInfo = document.querySelector('.footer_size')
let h = 500;
let w = 800;

let closeForm = () =>{
    event.preventDefault()
    document.forms[0].style.display = 'none';
    document.forms[0].style.opacity = '0';
    withoutForms.style.opacity = '1'
    document.body.style.background = ''
    withoutForms.style.pointerEvents = 'initial'
}

btnCancel.onclick = closeForm;
btnClose.onclick = closeForm;

btnDefault.onclick = () =>{
event.preventDefault()
h = 500;
w = 800;
changeCanvasSize(500, 800)
closeForm()
}

btnOk.onclick = () =>{
event.preventDefault()
w = document.forms[0].children[1].children[1].children[0].value
h = document.forms[0].children[1].children[2].children[0].value
changeCanvasSize(h, w)
closeForm()
}
let  changeCanvasSize = (height, width) =>{
sizeInfo.textContent = `Размер ${height}x${width}`
canvas.setAttribute('height',`${height}`)
canvas.setAttribute('width',`${width}`)
canvas.style.height = `${height}px`;
canvas.style.width = `${width}px`;
ctx.clearRect(0, 0, width, height)
ctx.fillStyle = mainColor2.value
ctx.fillRect(0, 0, width, height)
}