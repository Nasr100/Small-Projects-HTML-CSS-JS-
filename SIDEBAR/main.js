let toggleBtn = document.getElementById("sidebarToggleBtn");
let sideBar = document.getElementById("sideBar");

let closeBtn = document.getElementById('close-btn');

closeBtn.addEventListener('click',function(){
  sideBar.classList.add('hide');
})

toggleBtn.addEventListener('click',function(){
  sideBar.classList.toggle('hide');
})


