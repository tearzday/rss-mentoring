/* 1) Манипуляции над DOM

Нужно найти элементы и их модифицировать

// Item 1 - ищем по классу и добавляем дочерний элемент 
//const item1 = ?

Item 2 - ищем по ид и меняем текст внутри на "Item2"
//const item2 = ?

Item 3 - ищем по дата аттрибуту и меняем его фоновый цвет на красный
//const item3 = ?

Item 4 - ищем по тегу и добавляем класс 'blinking'
//const item4 = ?

*/

/* ------------------------------ */


/* 2) Events

Нужно добавить события

const nodesTask2 = document.querySelectorAll('.task2')

// event 1 - добавляем событие клик и по клику меняем текст на event1

const eventNode1 = nodesTask2[0]

// event 2 - событие на ввод поля инпут, при вводе должен сменить цвет фона на красный

const eventNode2 = nodesTask2[1]

// event 3 - добавляем смену цвета при скролле на желтый

const eventNode3 = nodesTask2[2]


event 4 - добавляем смену фона боди по нажанию на кнопку b на красный. На другие клавиши - черный

*/


/* ------------------------------ */

/* 3) Forms
const form = document.getElementById('form')

// Нужно на событие отправки формы отключить перезагрузку и в result отобразить значения введенные в инпуты (имя и пароль)
const result = document.querySelector('#result')


// валидация имени через js на каждое нажатие. Если длинна меньше 3 выводим ошибку в error

const inputName = document.querySelector('#name')
const error = document.querySelector('#error')

// на изменение checkbox вкл/откл кнопку отправки (событие не click) (для откл добавляем класс disable)
const checkbox = document.querySelector('#checkbox')
const submit = document.querySelector('#submit')

// на клик по глазику делаем видимые поля пароля (должно работать в формате туда обратно)
const password = document.querySelector('#password')
const togglePassword = document.querySelector('#toggle-password')
*/


/* ------------------------------ */


/* 4) Event Phases and their differences.

const parentNode = document.querySelector('#parent')
const childrenNode = document.querySelector('#children')

// Что будет в консоли при клике на родителя? Что будет в консоли при клике на дочерний?
// childrenNode.addEventListener('click', () => {
//     console.log('children')
// }) 

// parentNode.addEventListener('click', () => {
//     console.log('parent')
// }) 

// Что будет в консоли при клике на родителя? Что будет в консоли при клике на дочерний?
// childrenNode.addEventListener('click', () => {
//     console.log('children')
// }) 

// parentNode.addEventListener('click', (e) => {
//     console.log('parent')
// },true) 

*/

/* 5) Custom events. 
let count = 0
const countNode = document.querySelector('#counter')
const countBtn = document.querySelector('#count-btn')

const event = new CustomEvent('counterEvent', { detail: {count} })

countBtn.addEventListener('click', () => {
  count++

  const event = new CustomEvent('counterEvent', {
    detail: { count }
  })

  countNode.dispatchEvent(event)
})

countNode.addEventListener('counterEvent', (e) => {
    countNode.textContent = e.detail.count
}) */


/* НИЖЕ СПОЙЛЕР!!!!!!!!!!!!!!!!!!!!!!! */
/* НИЖЕ СПОЙЛЕР!!!!!!!!!!!!!!!!!!!!!!! */
/* НИЖЕ СПОЙЛЕР!!!!!!!!!!!!!!!!!!!!!!! */
/* НИЖЕ СПОЙЛЕР!!!!!!!!!!!!!!!!!!!!!!! */
/* НИЖЕ СПОЙЛЕР!!!!!!!!!!!!!!!!!!!!!!! */
/* НИЖЕ СПОЙЛЕР!!!!!!!!!!!!!!!!!!!!!!! */
/* НИЖЕ СПОЙЛЕР!!!!!!!!!!!!!!!!!!!!!!! */
/* НИЖЕ СПОЙЛЕР!!!!!!!!!!!!!!!!!!!!!!! */
/* НИЖЕ СПОЙЛЕР!!!!!!!!!!!!!!!!!!!!!!! */
/* НИЖЕ СПОЙЛЕР!!!!!!!!!!!!!!!!!!!!!!! */
/* НИЖЕ СПОЙЛЕР!!!!!!!!!!!!!!!!!!!!!!! */
/* НИЖЕ СПОЙЛЕР!!!!!!!!!!!!!!!!!!!!!!! */
/* НИЖЕ СПОЙЛЕР!!!!!!!!!!!!!!!!!!!!!!! */
/* НИЖЕ СПОЙЛЕР!!!!!!!!!!!!!!!!!!!!!!! */
/* НИЖЕ СПОЙЛЕР!!!!!!!!!!!!!!!!!!!!!!! */
/* НИЖЕ СПОЙЛЕР!!!!!!!!!!!!!!!!!!!!!!! */
/* НИЖЕ СПОЙЛЕР!!!!!!!!!!!!!!!!!!!!!!! */
/* НИЖЕ СПОЙЛЕР!!!!!!!!!!!!!!!!!!!!!!! */
/* НИЖЕ СПОЙЛЕР!!!!!!!!!!!!!!!!!!!!!!! */
/* НИЖЕ СПОЙЛЕР!!!!!!!!!!!!!!!!!!!!!!! */
/* НИЖЕ СПОЙЛЕР!!!!!!!!!!!!!!!!!!!!!!! */
/* НИЖЕ СПОЙЛЕР!!!!!!!!!!!!!!!!!!!!!!! */
/* НИЖЕ СПОЙЛЕР!!!!!!!!!!!!!!!!!!!!!!! */
/* НИЖЕ СПОЙЛЕР!!!!!!!!!!!!!!!!!!!!!!! */
/* НИЖЕ СПОЙЛЕР!!!!!!!!!!!!!!!!!!!!!!! */
/* НИЖЕ СПОЙЛЕР!!!!!!!!!!!!!!!!!!!!!!! */
/* НИЖЕ СПОЙЛЕР!!!!!!!!!!!!!!!!!!!!!!! */
/* НИЖЕ СПОЙЛЕР!!!!!!!!!!!!!!!!!!!!!!! */
/* НИЖЕ СПОЙЛЕР!!!!!!!!!!!!!!!!!!!!!!! */
/* НИЖЕ СПОЙЛЕР!!!!!!!!!!!!!!!!!!!!!!! */
/* НИЖЕ СПОЙЛЕР!!!!!!!!!!!!!!!!!!!!!!! */
/* НИЖЕ СПОЙЛЕР!!!!!!!!!!!!!!!!!!!!!!! */
/* НИЖЕ СПОЙЛЕР!!!!!!!!!!!!!!!!!!!!!!! */
/* НИЖЕ СПОЙЛЕР!!!!!!!!!!!!!!!!!!!!!!! */
/* НИЖЕ СПОЙЛЕР!!!!!!!!!!!!!!!!!!!!!!! */
/* НИЖЕ СПОЙЛЕР!!!!!!!!!!!!!!!!!!!!!!! */
/* НИЖЕ СПОЙЛЕР!!!!!!!!!!!!!!!!!!!!!!! */
/* НИЖЕ СПОЙЛЕР!!!!!!!!!!!!!!!!!!!!!!! */
/* НИЖЕ СПОЙЛЕР!!!!!!!!!!!!!!!!!!!!!!! */
/* НИЖЕ СПОЙЛЕР!!!!!!!!!!!!!!!!!!!!!!! */
/* НИЖЕ СПОЙЛЕР!!!!!!!!!!!!!!!!!!!!!!! */
/* НИЖЕ СПОЙЛЕР!!!!!!!!!!!!!!!!!!!!!!! */
/* НИЖЕ СПОЙЛЕР!!!!!!!!!!!!!!!!!!!!!!! */
/* НИЖЕ СПОЙЛЕР!!!!!!!!!!!!!!!!!!!!!!! */
/* НИЖЕ СПОЙЛЕР!!!!!!!!!!!!!!!!!!!!!!! */
/* НИЖЕ СПОЙЛЕР!!!!!!!!!!!!!!!!!!!!!!! */
/* НИЖЕ СПОЙЛЕР!!!!!!!!!!!!!!!!!!!!!!! */
/* НИЖЕ СПОЙЛЕР!!!!!!!!!!!!!!!!!!!!!!! */
/* НИЖЕ СПОЙЛЕР!!!!!!!!!!!!!!!!!!!!!!! */
/* НИЖЕ СПОЙЛЕР!!!!!!!!!!!!!!!!!!!!!!! */
/* НИЖЕ СПОЙЛЕР!!!!!!!!!!!!!!!!!!!!!!! */
/* НИЖЕ СПОЙЛЕР!!!!!!!!!!!!!!!!!!!!!!! */
/* НИЖЕ СПОЙЛЕР!!!!!!!!!!!!!!!!!!!!!!! */
/* НИЖЕ СПОЙЛЕР!!!!!!!!!!!!!!!!!!!!!!! */
/* НИЖЕ СПОЙЛЕР!!!!!!!!!!!!!!!!!!!!!!! */
/* НИЖЕ СПОЙЛЕР!!!!!!!!!!!!!!!!!!!!!!! */
/* НИЖЕ СПОЙЛЕР!!!!!!!!!!!!!!!!!!!!!!! */
/* НИЖЕ СПОЙЛЕР!!!!!!!!!!!!!!!!!!!!!!! */
/* НИЖЕ СПОЙЛЕР!!!!!!!!!!!!!!!!!!!!!!! */
/* НИЖЕ СПОЙЛЕР!!!!!!!!!!!!!!!!!!!!!!! */
/* ------------------------------ */
/* ------------------------------ */
/* ------------------------------ */
/* ------------------------------ */
/* ------------------------------ */
/* ------------------------------ */
/* ------------------------------ */
/* ------------------------------ */
/* ------------------------------ */
/* ------------------------------ */
/* ------------------------------ */
/* ------------------------------ */
/* ------------------------------ */
/* ------------------------------ */
/* ------------------------------ */
/* ------------------------------ */
/* ------------------------------ */
/* ------------------------------ */
/* ------------------------------ */
/* ------------------------------ */
/* ------------------------------ */
/* ------------------------------ */
/* ------------------------------ */
/* ------------------------------ */
/* ------------------------------ */
/* ------------------------------ */
/* ------------------------------ */
/* ------------------------------ */
/* ------------------------------ */
/* ------------------------------ */
/* ------------------------------ */
/* ------------------------------ */
/* ------------------------------ */
/* ------------------------------ */
/* ------------------------------ */
/* ------------------------------ */
/* ------------------------------ */
/* ------------------------------ */
/* ------------------------------ */
/* ------------------------------ */
/* ------------------------------ */
/* ------------------------------ */
/* ------------------------------ */
/* ------------------------------ */
/* ------------------------------ */
/* ------------------------------ */
/* ------------------------------ */
/* ------------------------------ */
/* ------------------------------ */
/* ------------------------------ */
/* ------------------------------ */
/* ------------------------------ */
/* ------------------------------ */
/* ------------------------------ */
/* ------------------------------ */
/* ------------------------------ */
/* ------------------------------ */
/* ------------------------------ */
/* ------------------------------ */
/* ------------------------------ */
/* ------------------------------ */
/* ------------------------------ */
/* ------------------------------ */
/* ------------------------------ */
/* ------------------------------ */
/* ------------------------------ */
/* ------------------------------ */
/* ------------------------------ */
/* ------------------------------ */
/* ------------------------------ */
/* ------------------------------ */




/* 1) Манипуляции над DOM

Нужно найти элементы и их модифицировать

Item 1 - ищем по классу и добавляем дочерний элемент  (<div> с текстом children и классом children)

Item 2 - ищем по ид и меняем текст внутри на "Item2"

Item 3 - ищем по дата аттрибуту и меняем его фоновый цвет на красный

Item 4 - ищем по тегу и добавляем класс 'blinking'

*/

// Item 1 - ищем по классу и добавляем дочерний элемент

const item1 = document.getElementsByClassName('item1')[0]
const children = document.createElement('div')
children.textContent = 'children'
children.className = 'children'

item1.append(children)


// Item 2 - ищем по ид и меняем текст внутри на "Item2"

const item2 = document.getElementById('item2')
item2.textContent = 'Item2'

// Item 3 - ищем по дата аттрибуту и меняем его фоновый цвет на красный
const item3 = document.querySelector('[data-id]')
item3.style.background = 'red'

// Item 4 - ищем по тегу и добавляем класс 'blinking'
const item4 = document.getElementsByTagName('span')
item4[0].classList.add('blinking')



/* 2) Events

Нужно найти элементы и их модифицировать

event 1 - добавляем событие клик и по клику меняем текст на event1

event 2 - событие на ввод поля инпут, при вводе должен сменить цвет фона на красный

event 3 - добавляем смену цвета при скролле на желтый

event 4 - добавляем смену фона боди по нажанию на кнопку b на красный. На другие клавиши - черный

*/

const nodesTask2 = document.querySelectorAll('.task2')

const eventNode1 = nodesTask2[0]

eventNode1.addEventListener('click', (e) => {
    e.target.textContent = 'event1'
})


const eventNode2 = nodesTask2[1]

eventNode2.addEventListener('input', (e) => {
    e.target.style.background = 'red'
})


const eventNode3 = nodesTask2[2]

eventNode3.addEventListener('scroll', (e) => {
    e.target.style.background = "yellow"
})



document.body.addEventListener('keydown', (e) => {
    if(e.key === 'b') {
        document.body.style.background = 'red'
    } else {
        document.body.style.background = 'black'
    }
})


/* 3) Forms
ТУТ НУЖНО НОРМ ДОРАБОТАТЬ ОБЪЯСНЕНИЕ + ОБДУМАТЬ ВАРИАЦИИ ЧЕ ПОКАЗАТЬ, ТИПО formdata
const form = document.getElementById('form')

// Нужно на событие отправки формы отключить перезагрузку и в result отобразить значения введенные в инпуты
const results = document.querySelector('#results')


// валидация имени через js на каждое нажатие. Если длинна меньше 3 выводим ошибку в error

const inputName = document.querySelector('#name')
const error = document.querySelector('#error')

// на изменение checkbox вкл/откл кнопку отправки (событие не click) (для откл добавляем класс disable)
const checkbox = document.querySelector('#checkbox')
const submit = document.querySelector('#submit')

// на клик по глазику делаем видимые поля пароля (должно работать в формате туда обратно)
const password = document.querySelector('#password')
const togglePassword = document.querySelector('#toggle-password')
*/

const form = document.getElementById('form')


//
const results = document.querySelector('#results')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    result.textContent = form.elements.username.value + " " + form.elements.password.value
})

// 
const inputName = document.querySelector('#name')
const error = document.querySelector('#error')

inputName.addEventListener('input', (e) => {
   if(inputName.value.length < 3) {
    error.textContent = 'Длинна должна быть больше 3'
   } else {
    error.textContent = ''
   }
})

//
const checkbox = document.querySelector('#checkbox')
const submit = document.querySelector('#submit')

checkbox.addEventListener('change', (e) => {
    if(checkbox.checked) {
        submit.classList.add('disable')
    } else {
        submit.classList.remove('disable')
    }
})

// 
const password = document.querySelector('#password')
const togglePassword = document.querySelector('#toggle-password')

togglePassword.addEventListener('click', () => {
    const passAttribute = password.type === 'password' ? 'text' : 'password'

    password.setAttribute('type', passAttribute)
})



/* 4) Event Phases and their differences.


*/
const parentNode = document.querySelector('#parent')
const childrenNode = document.querySelector('#children')

// Что будет в консоли при клике на родителя? Что будет в консоли при клике на дочерний? (parent, children parent)
// childrenNode.addEventListener('click', () => {
//     console.log('children')
// }) 

// parentNode.addEventListener('click', () => {
//     console.log('parent')
// }) 

// Что будет в консоли при клике на родителя? Что будет в консоли при клике на дочерний? (parent, parent children)
// childrenNode.addEventListener('click', () => {
//     console.log('children')
// }) 

// parentNode.addEventListener('click', (e) => {
//     console.log('parent')
// },true) 



