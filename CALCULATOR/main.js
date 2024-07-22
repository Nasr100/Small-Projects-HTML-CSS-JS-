let btns = document.querySelectorAll(".btn");
let inputDisplay = document.getElementById("inputField")
for (let index = 0; index < btns.length; index++) {
    
    btns[index].addEventListener('click',function(){
        if((btns[index].textContent != "C") &&( btns[index].textContent != "=")){
            inputDisplay.value += btns[index].textContent;

        }
        else if(btns[index].textContent == "C"){
            inputDisplay.value = "";
        }
        else if(btns[index].textContent == "="){
            try {
                inputDisplay.value = eval(inputDisplay.value);

            } catch (error) {
                inputDisplay.value = "error"
            }
        }
    })
}