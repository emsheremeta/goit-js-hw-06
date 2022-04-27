const categories = document.querySelector('ul#categories').querySelectorAll('li.item');
categories.forEach(category => {
    let categoryName = category.getElementsByTagName('h2')[0].outerText;
    let categoryListSize = category.getElementsByTagName('li').length;
    
    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${categoryListSize}`);
});
