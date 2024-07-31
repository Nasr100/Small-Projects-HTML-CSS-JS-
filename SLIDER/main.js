let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");
let slides = document.querySelectorAll(".slide");

slides.forEach(function (slide, index) {
    slide.style.left = `${index * 100}%`;
  });

let counter = 0;
nextBtn.addEventListener('click',function(){
    counter++;
    slide(); 
});
prevBtn.addEventListener('click',function(){
    counter--;
    slide();
});

prevBtn.style.display = "none";



function slide(){
    
if(counter > 0){
    prevBtn.style.display = "block";
}else{
    prevBtn.style.display = "none";
}

if(counter == slides.length -1){
    nextBtn.style.display = "none";
}else{
    nextBtn.style.display = "block";
}
    slides.forEach(slide=>{
        slide.style.transform = `translateX(-${counter * 100}%)`;
        });
}