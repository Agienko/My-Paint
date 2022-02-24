import { canvas , ctx} from "./index.js"
import {mainColor2 , clearAll} from "./index.js"

export const withoutForms = document.querySelector('.withoutForms')
const mainMenu = document.querySelector('.mainMenu')
const footer = document.querySelector('.footer')
let isFooterHide = false;

mainMenu.onclick = () => {
  switch (event.target.textContent){
    case 'Размер':
      document.forms[0].style.display = 'block'
      setTimeout(() => document.forms[0].style.opacity = '1', 0 )
      withoutForms.style.opacity = '0.3'
      document.body.style.background = 'gray'
      withoutForms.style.pointerEvents = 'none'
      break;
    case 'Строка состояния':
      (!isFooterHide) ? setTimeout(() => {footer.style.opacity = '0' }, 0 )
      : setTimeout(() =>footer.style.opacity = '1', 0 );
      isFooterHide = !isFooterHide
      break;
    case 'Очистить':
      clearAll()
      break;
    case 'Сохранить':
      var dataURL = canvas.toDataURL('image/jpeg', 1.0);
      let link = document.createElement('a')
      link.setAttribute('href', dataURL)
      link.setAttribute('download', 'image.jpg')
      onload=link.click()
      break;
  }
}




