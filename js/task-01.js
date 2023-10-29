let categoriesELement = document.querySelectorAll(".item");
console.log('Number of categories: ', categoriesELement.length);

categoriesELement.forEach(el => {
    let categoryName = el.firstElementChild.textContent;
    console.log('Category: ', categoryName);

    let categoryList = el.lastElementChild;
    let categoryListElements = categoryList.children.length;
    console.log('Elements: ', categoryListElements);
});