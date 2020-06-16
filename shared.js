var backdrop = document.querySelector('.backdrop')
var buttons = document.querySelectorAll('.plan-list button')
var modal = document.querySelector('.modal')

for(let i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click',function(){
        modal.style.display='block';
        backdrop.style.display='block'
    })
}