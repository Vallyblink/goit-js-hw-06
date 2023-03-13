const categoriesList = document.querySelectorAll('#categories .item')
console.log('Number of categories:', categoriesList.length);

categoriesList.forEach((el)=> {
    const categoryItem = el.firstElementChild.textContent;
    const categoryNumber = el.lastElementChild.childElementCount;
    console.log(` Category: ${categoryItem}\n Elements: ${categoryNumber}`)
})