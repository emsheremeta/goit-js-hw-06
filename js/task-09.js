function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btn = document.querySelector ('.widget');
btn.addEventListener("click", handleSubmit);
const span = document.querySelector("span.color");
function handleSubmit () {
  const color = getRandomHexColor();
  document.body.style.background = color
  //document.getElementsByTagName("body")[0].setAttribute ("style", 'background-color:' + color);
  span.textContent = color;
}
 