
let main=document.getElementById('main');
let flipBtn=document.getElementById('flipBtn');
let colorHex=document.getElementById('colorHex');

flipBtn.addEventListener('click',changeMainBgColor);


function changeMainBgColor(){
    let randomHex=(Math.floor(Math.random() * 0xfffff * 1000000).toString(16));
    
    let color="#"+randomHex.slice(0,6);
    main.style.backgroundColor=color;    
    colorHex.innerText=color;
}

let nasr="nasr"
;