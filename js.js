const square = document.querySelector('.canvas')
let ctr = square.getContext('2d')


square.addEventListener('mousedown', function(){
    x = event.offsetX
    y = event.offsetY
    ctr.moveTo(x, y)
    function change(){
        ctr.lineCap = 'round'
        ctr.lineWidth = '2'
        ctr.stroke()
        ctr.lineTo(event.offsetX, event.offsetY)
          
        }
square.addEventListener('mousemove', change)

square.addEventListener('mouseup', function(){
    square.removeEventListener('mousemove', change )
    
})
})


