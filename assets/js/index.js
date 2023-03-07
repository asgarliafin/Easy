// const preiodToggle = document.querySelector('.preiod-toggle');
// const priceCountAll = document.querySelectorAll('.price-count');
// const priceTimeAll = document.querySelectorAll('.price-time');
// let active = false;

export * from './navigation.js';

// preiodToggle.addEventListener('click', function (e) {
//     e.preventDefault();

//     if (active == false) {
//         preiodToggle.classList.add('active');
//         active = true;
//     } else if(active == true) {
//         preiodToggle.classList.remove('active');
//         active = false;
//     }

//     priceCountAll.forEach(
//         priceCount => priceCount.classList.forEach(item => item == 'active' ? (priceCount.classList.remove('active')) : (priceCount.classList.add('active')))
//     )

//     priceTimeAll.forEach(
//         priceTime => priceTime.classList.forEach(item => item == 'active' ? (priceTime.classList.remove('active')) : (priceTime.classList.add('active')))
//     )


// })


// const overlayer = document.querySelector('#overlayer');
// const loader = document.querySelector('.loader');
// window.onload = function(){
//     loader.style.display = 'none';
//     overlayer.style.display = 'none';
// }




// const burgerIcon = document.querySelector('.burger-menu-icon');
// const siteMobileNavbar = document.querySelector('.site-mobile-navbar');
// const closeIcon = document.querySelector(".site-mobile-menu-close > a")
// let state = true;

// burgerIcon.addEventListener('click', SiteBar);
// closeIcon.addEventListener('click', SiteBar);
// const iconDown = document.querySelector('.mobile-dropdown-icon > .fa-angle-down');


// function SiteBar(){
//     if(state){
//         siteMobileNavbar.style.display = 'block';
//         iconDown.classList.add('active');
//     }
//     else {
//         siteMobileNavbar.style.display = 'none';
//         iconDown.classList.remove('active');
//     }

//     state = !state;

// }

// const mobileDropdownIcon = document.querySelector('.mobile-dropdown-icon');
// const mobileDropdownMenuChild = document.querySelector('.site-mobile-menu-body  .dropdown-menu-child'); 
// const iconDownChild = document.querySelector('.dropdown-item > .fa-angle-down');
// const dropdownItem2 = document.querySelector('.dropdown-item-2');
// const dropdownMenu2 = document.querySelector('.dropdown-menu-2');
// const iconDownChild2 = document.querySelector('.dropdown-item-2  > i')

// let stateChild = true;

// mobileDropdownIcon.onclick = function(){
//     if(!stateChild){
//         mobileDropdownMenuChild.style.display = 'none'
//         iconDown.classList.remove('active');
//     }
//     else {
//         mobileDropdownMenuChild.style.display = 'block'
//         iconDown.classList.add('active');
//     }

//     stateChild = !stateChild;
    
// }

// let state2 = false;

// dropdownItem2.onclick = function(){
//     if(state2){
//         dropdownMenu2.style.display = 'none'
//         iconDownChild2.classList.remove('active');
//     }
//     else {
//         dropdownMenu2.style.display = 'block'
//         iconDownChild2.classList.add('active');
//     }

//     state2 = !state2;
 
// }