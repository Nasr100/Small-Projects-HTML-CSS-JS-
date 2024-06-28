let questions =  document.querySelectorAll(".questions-container");

questions.forEach(question => {
    let btn = question.querySelector(".response-toggle-btn");
    btn.addEventListener('click',function(){
        questions.forEach(item => {
            if(question !== item){
                let responseItem = item.querySelector(".response");
                let underlineItem = item.querySelector(".underline");

                responseItem.classList.remove("show-response");
                underlineItem.classList.remove("show-response");
            }
        })
        let response = question.querySelector(".response");
        let underline = question.querySelector(".underline");
        
        response.classList.toggle("show-response");
        underline.classList.toggle("show-response");

    })

  

    

});

