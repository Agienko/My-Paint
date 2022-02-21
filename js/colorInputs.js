export const mainColor1 = document.querySelector('#palitra_main1');
export const mainColor2 = document.querySelector('#palitra_main2');
const palitra = document.querySelector('.inst_palitra');

palitra.addEventListener('click', function(){
if(event.target !== event.currentTarget){
    let rgbColor = getComputedStyle(event.target)['background-color']
    mainColor1.value = rgbToHex(rgbColor)
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
        }
    })