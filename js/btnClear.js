import { clearAll} from "./index.js"

const btnClose = document.querySelector('#btnClose')
btnClose.addEventListener('click', function(){
    clearAll()
})