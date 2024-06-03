let hexArray=['#9061f9','#8A301D','#296EB8','#54B829'];

let main=document.getElementById('main');
let flipBtn=document.getElementById('flipBtn');
let colorHex=document.getElementById('colorHex');

flipBtn.addEventListener('click',changeMainBgColor);


function changeMainBgColor(){
    let randomHex=hexArray[Math.floor(Math.random()*hexArray.length)];
    
    main.style.backgroundColor=randomHex;    
    colorHex.innerText=randomHex;
}

