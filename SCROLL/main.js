let date = document.getElementById("date");
let currentYear = new Date().getFullYear();
date.innerText = currentYear;


let toggleMenuBtn = document.getElementById("menuToggleBtn");
let listContainer = document.querySelector(".list-container");
let navList = document.querySelector(".nav-list");

toggleMenuBtn.addEventListener
("click",function()
{
    const listContainerheight = listContainer.getBoundingClientRect().height;
    const navListheight = navList.getBoundingClientRect().height;

    if(listContainerheight === 0)
    {
        listContainer.style.height =  `${navListheight}px` ;
    }
    else
    {
        listContainer.style.height = 0;
    }
}
);
let nav = document.querySelector("nav");
let links = document.querySelectorAll(".scroll-link");
let upLink = document.querySelector(".toTheTop-btn");
window.addEventListener
('scroll',function()
{
    if(window.pageYOffset >50){
        nav.classList.add("fixednav");
        for (let index = 0; index < links.length; index++) {
            links[index].classList.add("black-scroll-link");
        }

    }
    else if(window.pageYOffset == 0){
        nav.classList.remove("fixednav");

        for (let index = 0; index < links.length; index++) {
            links[index].classList.remove("black-scroll-link");
            
        }
    }

    if(window.pageYOffset >500){
        upLink.classList.add("show-toTheTop-btn");

    }
    else if(window.pageYOffset < 500){
                upLink.classList.remove("show-toTheTop-btn");

    }
}
);

const sectionLinks = document.querySelectorAll('.sec-links');

sectionLinks.forEach(function(link){
    link.addEventListener('click',function(e){
        e.preventDefault();
        const id = e.currentTarget.getAttribute("href").slice(1);

        const element = document.getElementById(id);

        const navHeight = nav.getBoundingClientRect().height;
        const containerHeight = listContainer.getBoundingClientRect().height;
        const fixedNavbar = nav.classList.contains("fixednav");
        let position = element.offsetTop - navHeight;

        if(!fixedNavbar){
            position = position - navHeight;
        }
        if(navHeight > 82){
            position = position + containerHeight;
        }
        window.scrollTo({
            left:0,
            top:position,
        });
        listContainer.style.height = 0;
    })
})




