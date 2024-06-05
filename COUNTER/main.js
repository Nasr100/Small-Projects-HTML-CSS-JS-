let count = document.querySelector(".countNumber");
let decreaseBtn = document.getElementById("decreaseBtn");
let resetBtn = document.getElementById("resetBtn");
let increaseBtn = document.getElementById("increaseBtn");

let countNumber=0;
count.textContent=countNumber;

decreaseBtn.addEventListener('click',function(){
    countNumber-=1;
    count.textContent=countNumber;

    
    if(countNumber<0){
        count.style.color="red";
    }
    if(countNumber == 0){
        count.style.color="black";
    
    }

});

resetBtn.addEventListener('click',function(){
    countNumber=0;
    count.textContent=countNumber;
    count.style.color="black";

});


increaseBtn.addEventListener('click',function(){
    countNumber+=1;
    count.textContent=countNumber;
    if(countNumber>0){
        count.style.color="green";
    }
    if(countNumber == 0){
        count.style.color="black";
    
    }

});

