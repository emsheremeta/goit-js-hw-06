/*let input = document.querySelector('#validation-input');
input.addEventListener('blur', () => {
    if (input.value.length != input.getAttribute('data-length')) {
       input.className = 'invalid';
    } else {
        input.className = 'valid';
    }
} );
*/

const input = document.querySelector('#validation-input');
const number = Number(input.getAttribute('data-length'));
input.addEventListener('blur', () => {
    if (input.value.length !== number) {
        input.className = 'invalid';
        console.log('incorrect')
    } else {
        input.className = 'valid';
        console.log('correct')
    }
})