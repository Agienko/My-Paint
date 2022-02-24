import { drawPen } from "./canvasInstruments/pen.js";
import { drawErsaer } from "./canvasInstruments/ersaer.js";
import { drawArc } from "./canvasInstruments/arc.js";
import { drawLine } from "./canvasInstruments/line.js";
import { drawRect } from "./canvasInstruments/rect.js";
import { pipette } from "./canvasInstruments/pipette.js";
import { drawText } from "./canvasInstruments/text.js";
import { fill } from "./canvasInstruments/fill.js";

export const mainColor1 = document.querySelector('#palitra_main1');
export const mainColor2 = document.querySelector('#palitra_main2');
export const canvas = document.querySelector('.canvas')
export let ctx = canvas.getContext('2d');

ctx.clearRect(0, 0, canvas.width, canvas.height)
ctx.fillStyle = mainColor2.value
ctx.fillRect(0, 0, canvas.width, canvas.height)

export let sick = '1';
sickLine.addEventListener('mousemove', function(){
  sick = Math.round((+event.target.value + 1)/2).toString();
  forSickLine.textContent = sick
})


drawArc()
drawErsaer()
fill()
drawLine()
drawPen()
pipette()
drawRect()
drawText()