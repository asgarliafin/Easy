const mobileNavbar = document.querySelector("#mobile-navbar");
const toggle = mobileNavbar.querySelector("#mobile-navbar .toggle");
console.log(toggle);
console.log(mobileNavbar);

toggle.onclick = e =>{
    e.preventDefault();
    mobileNavbar.style.display = "block";
    console.log("hello world");
};