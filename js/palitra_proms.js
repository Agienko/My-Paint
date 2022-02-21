//подсказки цвета палитры

const colorNames = [
'Черный', 'Серый', 'Темно-красный', 'Красный', 'Оранжевый',
'Желтый', 'Зеленый', 'Бирюзовый', 'Индиго', 'Сиреневый', 
'Белый', 'Сыетло-серый', 'Бордовый', 'Розовый', 'Золотистый',
'Светло-желтый', 'Салатовый', 'Светло-бирюзовый', 'Сизый', 'Бледный розовато-лиловый',
]

const palitra = document.querySelector('.inst_palitra')

Array.from(palitra.children).forEach((element, index) => {
    element.setAttribute('data-title', colorNames[index])
});

palitra.addEventListener('mouseover', function(){
   if(event.target.getAttribute('data-title') !== null){
       let x = event.target;
       setTimeout(() => x.className = 'prom',1000 )
   }
})

