//your JS code here. If required.

document.addEventListener('DOMContentLoaded',()=>{
	  
const idx = document.getElementById('counter');
const incrementBtn = document.getElementById('incrementBtn')
    alert(Number(idx.innerText)); 
	incrementBtn.addEventListener('click',()=>{
	idx.innerText = Number(idx.innerText)+1;
})
});