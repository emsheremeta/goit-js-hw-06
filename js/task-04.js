let counterValue = 0;

const minusButton = document.querySelectorAll('#counter button')[0];
const plusButton = document.querySelectorAll('#counter button')[1];
const spanRef = document.querySelector('#value');

const handleClickMinus= () => {
  console.log ("Minus callback!");
  counterValue -=1;
  spanRef.textContent = counterValue;
}
minusButton.addEventListener("click",handleClickMinus );

const handleClickPlus= () => {
  console.log ("Plus callback!");
  counterValue +=1;
  spanRef.textContent = counterValue;
}
plusButton.addEventListener("click",handleClickPlus );

/*const clickMinus = () => {
    console.log("Minus callback!");
    counterValue--;
    //setValue(); 
  };

  const clickPlus = () => {
    console.log("Plus callback!");
    counterValue++;
  };

  const setValue = () => {
    console.log("Set value");
    document.querySelector('#counter #value').textContent = counterValue;
  };
 
  minusButton.addEventListener("click", clickMinus);
  plusButton.addEventListener("click", clickPlus)
  plusButton.addEventListener("click", setValue);
  */
