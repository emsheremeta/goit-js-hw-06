
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
//`<li class="item">${ingredient}</li>`).join("");
 /*   let elements = [];
  ingredients.forEach((ingredient) => {
    let a = document.createElement('li');
    a.className = 'item';
    a.innerText = ingredient;
    elements.push(a);
  });
  document.querySelector('#ingredients').append(...elements);
  */
 const elements = ingredients.map (ingredient => {
   const elementLi = document.createElement('li');
   elementLi.className = 'item';
   elementLi.innerHTML = ingredient;
   return elementLi;
 })
 document.querySelector('#ingredients').append(...elements);
 console.log(elements);
