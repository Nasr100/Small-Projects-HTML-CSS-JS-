let galleryContainer = document.querySelector(".gallery-container");
let modal = document.querySelector(".gallery-modal-bg");
let modalBody = document.querySelector(".modal-body");
let mainModalImg = document.getElementById("modal-main-img");
let items = document.querySelectorAll(".item");
let imgsDiapo = document.querySelector(".imgs-diapo");
let nextBtn = document.querySelector(".next");
let prevBtn = document.querySelector(".prev");


let itemImgs=[];
items.forEach(item=>{
    itemImgs.push(item.firstElementChild);
});



galleryContainer.addEventListener("click",e=>{
    let element = e.target;
   if(element.classList.contains("gallery-img")){
    modal.classList.remove("hideModal");
    mainModalImg.src = element.getAttribute('src');
    mainModalImg.setAttribute("data-id",element.getAttribute('data-id'));
   let imgDiapo = itemImgs.map(img=>{
        return ` <div class="diapo-item">
                <img src="${img.getAttribute('src')}" alt="" class="diapo-img" data-id=${img.getAttribute('data-id')}>
            </div>`;
    });
    imgDiapo = imgDiapo.join("");
    imgsDiapo.innerHTML+=imgDiapo;
    let i;
    let j = 0;
    let diapoItem = document.querySelectorAll(".diapo-img");
    diapoItem.forEach(item=>{
        j++;
        if(item.getAttribute("data-id") == mainModalImg.getAttribute("data-id") ){
            item.style.opacity = "1";
            i=j-1;
        }else{
            item.style.opacity = "0.3";
        }
    })





    
    nextBtn.addEventListener("click",e=>{
        i++;
        if(i == diapoItem.length){
            i = 0;
        }
        mainModalImg.src = diapoItem[i].getAttribute('src');
        diapoItem[i].style.opacity = "1";
        diapoItem.forEach(item=>{
            if(diapoItem[i] != item){
                item.style.opacity = "0.3";
            }
        })
    });


    

prevBtn.addEventListener("click",e=>{
        i--;
        if(i < 0){
            i = diapoItem.length - 1;
        }
        mainModalImg.src = diapoItem[i].getAttribute('src');
        diapoItem[i].style.opacity = "1";
        diapoItem.forEach(item=>{
            if(diapoItem[i] != item){
                item.style.opacity = "0.3";
            } 
        })
    });


   }
})



window.addEventListener("click",e=>{
    if (e.target == modal ||e.target == modalBody ){
        modal.classList.add("hideModal");
        itemImgs=[];
    }
})

window.addEventListener("keydown",e=>{
    if( e.keyCode == 39){
        i++;
        if(i == diapoItem.length){
            i = 0;
        }
        mainModalImg.src = diapoItem[i].getAttribute('src');
        diapoItem[i].style.opacity = "1";
        diapoItem.forEach(item=>{
            if(diapoItem[i] != item){
                item.style.opacity = "0.3";
            }
        })
    }
})
window.addEventListener("keydown",e=>{
    if( e.keyCode == 37){
        i--;
        if(i < 0){
            i = diapoItem.length - 1;
        }
        mainModalImg.src = diapoItem[i].getAttribute('src');
        diapoItem[i].style.opacity = "1";
        diapoItem.forEach(item=>{
            if(diapoItem[i] != item){
                item.style.opacity = "0.3";
            }
        })
    }
})
