// const burger = document.querySelector('#burger')
// const menu = document.querySelector('#menu')

// burger.addEventListener('click', () => {
//     if (menu.classList.contains('hidden')){
//         menu.classList.remove('hidden')
//     }else {
//         menu.classList.add('hidden')
//     }
// })

function Menu(e){
    let list = document.querySelector('ul')
    let overlaying = document.querySelector('#overlaying')
    e.name === 'menu-outline' ? (e.name = 'close-outline', list.classList.remove('top-24'), list.classList.remove('hidden'), overlaying.classList.remove('hidden')) : (e.name = 'menu-outline', list.classList.add('top-24'), list.classList.add('hidden'), overlaying.classList.add('hidden'))
}