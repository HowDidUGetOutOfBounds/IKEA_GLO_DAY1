/*

console.log(document.getElementsByClassName('btn'));

let varName = document.querySelector('.btn');
const varName2 = varName.querySelectorAll
('.svg-icon');

console.log('varName 2: ', varName2);
console.log('varName: ', varName);

*/

//day 1

const btnBurger = document.querySelector('.btn-burger');
const catalog = document.querySelector('.catalog');
//const overlay = document.querySelector('.overlay');
const btnClose = document.querySelector('.btn-close');
const catalogList = document.querySelector('.catalog-list');
const subCatalog = document.querySelector('.subcatalog');
const subCatalogHeader = document.querySelector('.subcatalog-header');
const btnReturn = document.querySelector('.btn-return');

const overlay = document.createElement('div');

overlay.classList.add('overlay');
document.body.insertAdjacentElement('beforeend', overlay);


const openMenu =  () => {
    catalog.classList.add('open');
    overlay.classList.add('active');
};

const closeMenu =  () => {
    catalog.classList.remove('open');
    overlay.classList.remove('active');
    closeSubMenu();
};

const openSubMenu = event => {
    event.preventDefault();
    const target = event.target;
    const itemList = event.target.closest('.catalog-list__item');
    console.log(itemList);
    if (itemList){
        subCatalogHeader.innerHTML = itemList.innerHTML;
        subCatalog.classList.add('subopen');
    };

};

const closeSubMenu = () => {
    subCatalog.classList.remove('subopen');
}

btnBurger.addEventListener('click', openMenu);
btnClose.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);
catalogList.addEventListener('click', openSubMenu);
btnReturn.addEventListener('click', closeSubMenu);

document.addEventListener('keydown', e => {
    if(e.key == 'Escape')
    {
        closeMenu();
    }
})
