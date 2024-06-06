class review {
    constructor(img, name, text, job) {
      this.img = img;
      this.name = name;
      this.text = text;
      this.job = job;
    }
  }
    review1 = new review("imgs/person-1.jpeg","Amy Beller","Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut facere natus veritatis magnam nihil aliquid incidunt eos ut distinctio hic eveniet, dolorum corporis at explicabo nam cum! Eos, eaque quas!","BOSS");

    review2 = new review("imgs/img3.jpg","Janny Watermelon","Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut facere natus veritatis magnam nihil aliquid incidunt eos ut distinctio hic eveniet, dolorum corporis at explicabo nam cum! Eos, eaque quas!","CHAIRMAN");
    
    review3 = new review("imgs/image2.jpg","Mike","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porttitor cursus iaculis. Praesent enim lacus, ultricies feugiat elementum ac, blandit vulputate ligula. Nam orci quam, elementum eget risus fermentum, fringilla malesuada justo.","TEACHER");

    review4 = new review("imgs/image4.jpg","Jeff","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porttitor cursus iaculis. Praesent enim lacus, ultricies feugiat elementum ac, blandit vulputate ligula. Nam orci quam, elementum eget risus fermentum, fringilla malesuada justo.","STUDENT");

let reviews = [review1,review2,review3,review4];

let personImg = document.getElementById("person-img");
let personName = document.querySelector(".name"); 
let personJob = document.querySelector(".job-type");
let personText = document.querySelector(".text");
let prevBtn = document.getElementById("prev-btn");
let nextBtn = document.getElementById("next-btn");
let randomBtn = document.querySelector(".random-btn");

let counter = 0;
personName.textContent = reviews[0].name;
personJob.textContent = reviews[0].job;
personText.textContent = reviews[0].text;
personImg.src = reviews[0].img;


prevBtn.addEventListener("click",function(){
    counter -= 1;
    if(counter < 0){
        counter = 0;
    }
        personName.textContent = reviews[counter].name;
        personJob.textContent = reviews[counter].job;
        personText.textContent = reviews[counter].text;
        personImg.src = reviews[counter].img;

});
nextBtn.addEventListener("click",function(){
    counter += 1;
    if(counter >= reviews.length){
        counter =  reviews.length - 1;
    }
        personName.textContent = reviews[counter].name;
        personJob.textContent = reviews[counter].job;
        personText.textContent = reviews[counter].text;
        personImg.src = reviews[counter].img;

});
randomBtn.addEventListener("click",function(){
    counter = Math.floor(Math.random() * reviews.length);
    ;
    
        personName.textContent = reviews[counter].name;
        personJob.textContent = reviews[counter].job;
        personText.textContent = reviews[counter].text;
        personImg.src = reviews[counter].img;

});






