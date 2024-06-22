let modalTriggerBtn = document.getElementById("triggerBtn") ;
let modal = document.getElementById("myModal") ;
let modalCloseBtn = document.querySelector(".modal-close-btn");

modalTriggerBtn.addEventListener('click',function(){
    modal.style.display = "flex"; 
})
modalCloseBtn.addEventListener('click',function(){
    modal.style.display = "none"; 
})

window.addEventListener('click',function(e){
    if(e.target == modal){
        modal.style.display = "none"; 
    }
})