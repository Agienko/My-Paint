import { mainColor1, mainColor2 } from "./index.js";
const sideBarColor1 = document.querySelector('#palitra1');
const sideBarColor2 = document.querySelector('#palitra2');
const palitra = document.querySelector('.inst_palitra');

palitra.addEventListener('click', function(){
if(event.target !== event.currentTarget){
    let rgbColor = getComputedStyle(event.target)['background-color']
    mainColor1.value = rgbToHex(rgbColor)
    sideBarColor1.style.background = rgbToHex(rgbColor)
    }
})

function rgbToHex(rgb){
    return '#' + rgb.slice(4, -1).split(',')
        .map(i=> (+i).toString(16))
        .map(i=> (i.length > 1) ? i : '0' + i)
        .join('')
}

palitra.addEventListener('contextmenu', function(){
    event.preventDefault()
    if(event.target !== event.currentTarget){
        let rgbColor = getComputedStyle(event.target)['background-color']
        mainColor2.value = rgbToHex(rgbColor)
        sideBarColor2.style.background = rgbToHex(rgbColor)
        }
    })

    mainColor1.addEventListener('input', function(){
      sideBarColor1.style.background =  event.target.value
    })
    mainColor2.addEventListener('input', function(){
        sideBarColor2.style.background =  event.target.value
      })