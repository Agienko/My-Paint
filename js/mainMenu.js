import { canvas , ctx} from "./index.js"
import {mainColor2 } from "./index.js";
const mainMenu = document.querySelector('.mainMenu')
const withoutForms = document.querySelector('.withoutForms')
const sizeInfo = document.querySelector('.footer_size')


const btnOk = document.querySelector('#btn_form_ok')
const btnCancel = document.querySelector('#btn_form_cancel')
const btnDefault = document.querySelector('#btn_form_default')
const btnClose = document.querySelector('.form_close')
const footer = document.querySelector('.footer')


let isFooterHide = false;
mainMenu.onclick = function(){
    if(event.target.textContent === 'Размер') {
      document.forms[0].style.display = 'block';
      setTimeout(() => document.forms[0].style.opacity = '1', 0 )
      withoutForms.style.opacity = '0.3'
      document.body.style.background = 'gray'
      withoutForms.style.pointerEvents = 'none'
    } 
    if(event.target.textContent === 'Строка состояния') {
     (!isFooterHide) ? setTimeout(() => {footer.style.opacity = '0' }, 0 )
    : setTimeout(() =>footer.style.opacity = '1', 0 );
      isFooterHide = !isFooterHide;
    }
    if(event.target.textContent === 'Очистить') {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = mainColor2.value
      ctx.fillRect(0, 0, canvas.width, canvas.height)
    }
    if(event.target.textContent === 'Сохранить') {
      var dataURL = canvas.toDataURL('image/jpeg', 1.0);
      let link = document.createElement('a')
      link.setAttribute('href', dataURL)
      link.setAttribute('download', 'image.jpg')
      onload=link.click()
    }
}
function closeForm(){
      event.preventDefault()
      document.forms[0].style.display = 'none';
      document.forms[0].style.opacity = '0';
      withoutForms.style.opacity = '1'
      document.body.style.background = ''
      withoutForms.style.pointerEvents = 'initial'
}

btnCancel.onclick = closeForm;
btnClose.onclick = closeForm;

btnDefault.onclick = function(){
  event.preventDefault()
  h = 500;
  w = 800;
  changeCanvasSize(500, 800)
  closeForm()
}

btnOk.onclick = function(){
  event.preventDefault()
  w = document.forms[0].children[1].children[1].children[0].value
  h = document.forms[0].children[1].children[2].children[0].value
  changeCanvasSize(h, w)
  closeForm()
}
function changeCanvasSize(height, width){
  sizeInfo.textContent = `Размер ${height}x${width}`
  canvas.setAttribute('height',`${height}`)
  canvas.setAttribute('width',`${width}`)
  canvas.style.height = `${height}px`;
  canvas.style.width = `${width}px`;
  ctx.clearRect(0, 0, width, height)
  ctx.fillStyle = mainColor2.value
  ctx.fillRect(0, 0, width, height)
}



