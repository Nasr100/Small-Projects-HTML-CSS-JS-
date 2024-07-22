let btnsInfos = document.querySelectorAll(".info-btn");

let infos = document.querySelectorAll(".info");

btnsInfos.forEach(btnInfo=>{
    btnInfo.addEventListener('click',function(){
      
        if (btnInfo.classList.contains("activeBtn")){
            
        }else{
            btnsInfos.forEach(element=>{
                if(element != btnInfo && element.classList.contains("activeBtn") ){
                    element.classList.remove("activeBtn");
                }
            })
            btnInfo.classList.add("activeBtn");
        }

        infos.forEach(info=>{        
            if (info.getAttribute("id") != btnInfo.textContent && info.classList.contains("infoShow") ){
                info.classList.remove("infoShow");
            }
            if (info.getAttribute("id") == btnInfo.textContent)
                info.classList.add("infoShow");
            
        })
    })
})