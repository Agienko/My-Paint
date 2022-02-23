export let opacityValue = 1;
opacityRange.addEventListener('mousemove', ()=>{
  forOpacityRange.textContent = event.target.value
  opacityValue = event.target.value/100
})