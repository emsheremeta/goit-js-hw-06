/*let input = document.querySelector('#font-size-control');
let span = document.querySelector('span#text');
input.addEventListener('input', () => {
    span.setAttribute('style', 'font-size:' + input.value + 'px');
} );
*/

const input = document.querySelector ('#font-size-control');
const span = document.querySelector('#text');
input.addEventListener('input', handleInputRange);
function handleInputRange(event) {
    span.style.fontSize = event.currentTarget.value + 'px';
}



