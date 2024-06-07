let toggleBtn = document.querySelector(".toggle-btn");
let navMenu = document.querySelector(".nav-items");

toggleBtn.addEventListener("click",function(){
    navMenu.classList.toggle("hidden");
});
