// 1. Створити сторінку на якій будемо відображати базовий текст в span("Очікую на ввід даних"). При натисканні alt + A, замість спана зявиться інпут з аналогічним текстом, який тепер ви зможете відредагувати. Далі коли ви натисните shift + S дані збережуться і знов будуть відображатись як span.
// let input = document.getElementById('input');
// input.style.display = 'none';
// let span = document.getElementById('span');
// document.addEventListener('keydown', (event) => {
//   if(event.code === 'KeyA' && event.altKey) {
//     span.style.display = 'none';
//     input.style.display = 'block';
//   }
//   if(event.code === 'KeyS' && event.shiftKey) {
//     span.style.display = 'block';
//     input.style.display = 'none';
//     span.innerText = input.value;
//   }
// })

// 2. Повісити івент лісенер на ресайз сторінки, коли розмір сторінки буде менше 600px , виводити лог ми векористовуємо мобільну версію, при більшому розмірі сторінки - що ми використовуємо десктоп версію.

// window.addEventListener('resize', () => {
//     if(window.innerWidth < 600) {
//       console.log('Mobile version');
//       }
//     else {
//       console.log('Desktop version');
//     }
// })


// 3. Повісити івент на інпут, при зміні стану інпута - виводити повідомленням зі значенням яке зараз є введено.

//
// let input = document.getElementById("input");
//
// input.addEventListener('input', () => {
//   document.getElementById('result').innerHTML = input.value;
// });



// 4. При натисканні на кнопку альт+ о виводити модальне вікно на екран, альт + с - закривати.

// let modal = document.getElementById("myModal");
//
// document.addEventListener('keydown', (event) => {
//   if(event.code === 'KeyO' && event.altKey){
//     modal.style.display = 'block'
//   } else if (event.code === 'KeyC' && event.altKey) {
//     modal.style.display = 'none'
//   }
// })




// 5. Створити модальне вікно аналог Алерта але з гарним дизайном. по кліку на кнопку зявляється модальне вікно по центрі екрану(центрування елемента). В модальному вікні має бути текст та кнопка закрити.

// let modal = document.getElementById("myModal");
// let btn = document.getElementById("btnModalWindow");
// let span = document.getElementsByClassName("closeModalWindow")[0];
//
//
// btn.addEventListener('click', () => {
//   modal.style.display = "block";
// })
//
// span.addEventListener('click', () => {
//   modal.style.display = "none";
// })
//
// window.addEventListener('click',  (event) => {
//   if (event.target === modal) {
//     modal.style.display = "none";
//   }
// })










