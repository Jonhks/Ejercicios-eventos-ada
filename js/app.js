// playlist
// Crear un documento html con un título que diga Mis canciones favoritas y una lista desordenada. Pedir mediante prompts por cinco canciones (una a la vez), y agregar esas canciones como ítems de la lista desordenada

// 1.- Poner un titulo con mis canciones favoritas x
// 2.- Crear una lista desordenada x
// 3.- Pedirle al usuario 5 canciones (1 por 1) x
// 4.- Agregar las canciones a la lista (1 por 1)

// 4.1 Traer el ul a js x 
// 4.2 Usar Template string para generar los li con las canciones
// 4.3 Pintar las li en el ul


// const lista = document.getElementById('lista');

// const cancion1 = prompt('Dame tu primer canción');
// const cancion2 = prompt('Dame tu segunda canción');
// const cancion3 = prompt('Dame tu tercera canción');
// const cancion4 = prompt('Dame tu cuarta canción');
// const cancion5 = prompt('Dame tu quinta canción');

// const canciones = `
// <li>${cancion1}</li>
// <li>${cancion2}</li>
// <li>${cancion3}</li>
// <li>${cancion4}</li>
// <li>${cancion5}</li>
// `;

// lista.innerHTML = canciones;


// Ejercico 2 

// contador
// Crear un documento html que muestre un número (empezando en 0) y 6 botones con los siguientes valores: -1, +1, -5, +5, -10, +10. Cuando se clickea un botón, se tiene que sumar o restar la cantidad correspondiente, y actualizar el número mostrado.

// 1.- en el html poner un numero que inicie en 0 x
// 2.- Generar 6 botones en el html
// 3.- Darles valores a esos 6 botones -1, +1, -5, +5, -10, +10. c/u
// 4.- tenemos que hacer la operación que nos dice el boton
// ¿Como detectamos a que boton le damos click?
// id
// ¿Como detecto cual es el valor de ese boton?
// - Programar el evento click
// - acceder al valor del boton
// 5.- Actualizar el numero inicial en html


// const menos1 = document.getElementById('-1');
// const mas1 = document.getElementById('+1');
// const menos5 = document.getElementById('-5');
// const mas5 = document.getElementById('+5');
// const menos10 = document.getElementById('-10');
// const mas10 = document.getElementById('+10');

// let count = document.getElementById('count');
// // console.log(count);
// // console.log( typeof count.innerHTML);


// menos1.addEventListener('click', () => {
//   // console.log(count.innerHTML)
//   count.innerText = parseInt(count.innerHTML) - 1;
// });

// mas1.addEventListener('click', () => {
//   count.innerText = parseInt(count.innerHTML) + 1;
// });

// menos5.addEventListener('click', () => {
//   count.innerText = parseInt(count.innerHTML) - 5;
// });

// mas5.addEventListener('click', () => {
//   count.innerText = parseInt(count.innerHTML) + 5;
// }); 

// menos10.addEventListener('click', () => {
//   count.innerText = parseInt(count.innerHTML) - 10;
// });

// mas10.addEventListener('click', () => {
//   count.innerText = parseInt(count.innerHTML) + 10;
// });

// const buttons = document.getElementsByTagName('button');

// Array.from(buttons).forEach(buton => {
//   buton.addEventListener('click', () => {
//     console.log(buton.id);
//     count.innerHTML = parseInt(count.innerHTML) + parseInt(buton.id)
//   });
// });


// Crear un documento html con

// una barra de progreso (con un div dentro de otro)
// un elemento de texto que indique el progreso (p. ej. 50%)
// dos botones, uno para incrementar y otro para dismininuir la barra (- y +)
// cuando se apretan los botones, la barra de progreso tiene que aumentar o disminuir respectivamente y el texto que indica el porcentaje de progreso tiene que actualizarse
// lo mismo tiene que pasar cuando se apreta la flecha derecha (aumentar progreso) y la flecha izquierda (disminuir progreso)
// el incremento/decremento es del 10%


// 1.- Generar dos div, uno dentro de otro
// 2.- darles estilos
// 3.- Crear los botones
// 4.- lograr que avance la barra

// const menos = document.getElementById('menos');
// const mas = document.getElementById('mas');
// const chica = document.getElementById('chica');
// const titulo = document.getElementById('titulo');
// let count = 50;
// chica.style.width = `${count}%`;
// titulo.innerHTML = count;

// mas.addEventListener('click', () =>{
//   if(count < 100){
//     // count = count + 10;
//     count += 10;
//     // count = count + 1
//     // coun += 1
//     // count++
//     chica.style.width = `${count}%`;
//     titulo.innerHTML = count;
//   }
// })

// menos.addEventListener('click', () =>{
//   if(count > 0){
//     count = count - 10;
//     chica.style.width = `${count}%`;
//     titulo.innerHTML = count;
//   }
// })

// const restar = () => {
//     if(count > 0){
//       count = count - 10;
//       chica.style.width = `${count}%`;
//       titulo.innerHTML = count;
//   }
// }

// menos.addEventListener('click', restar);


// kilometros a millas 


// Kilómetros a Millas
// Crear una página que:

// Tenga dos inputs, uno para el valor de kilómetros y otro para el de millas.
// Cuando se modifica alguno de los dos inputs, el otro cambie automáticamente, realizando la conversión adecuada. Tener en cuenta que ki´lómetro es 0.62 millas, y una milla es 1.61 kilómetros.

// 1 km = 0.62 millas
// 1 milla 1.61km


// const km = document.getElementById('km');
// const millas = document.getElementById('millas');
// const resultado = document.getElementById('resultado');


// km.addEventListener('keyup', (event) => {
//   const kilo = (event.target.value) * 0.62;
//   millas.value = kilo
//   resultado.innerHTML = kilo
// })

// millas.addEventListener('keyup', (event) => {
//   const milla = (event.target.value) * 1.61;
//   km.value = milla
//   resultado.innerHTML = milla
// })



// for (let index = 0; index < lista.length; index++) {
//   const element = lisnta[index];
//   if(element.innerText.toloWerCase().includes(palabra.tolowercase())){
//   element.classList.add('cambios');
//   } else {
//   return null;
//   }
// }

// const lista = document.getElementsByTagName('li');
// const palabra = prompt('Busca una palabra');


// for (let index = 0; index < lista.length; index++) {
// const element = lista[index];
// element.innerText.toLowerCase().includes(palabra.toLowerCase()) ? element.classList.add('cambios') : null
// }

// for (const index of lista) {
//   index.innerText.toLowerCase().includes(palabra.toLowerCase()) ? index.classList.add('cambios') : null
// }


// const array = Array.from(lista);

// array.forEach( index => index.innerText.toLowerCase().includes(palabra.toLowerCase()) ? index.classList.add('cambios') : null);
// Estas son las 3 opciones que encontre para resolverlo