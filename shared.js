var backdrop = document.querySelector('.backdrop')
var selectedPlansButtons = document.querySelectorAll('.plan-list button')
var modal = document.querySelector('.modal')
var modalNoButton = document.querySelector('.modal__action--negative')
var toggleButton = document.querySelector('.toggle-button')
var mobileNavBar = document.querySelector('.mobile-nav')

for(let i=0;i<selectedPlansButtons.length;i++){
    selectedPlansButtons[i].addEventListener('click',function(){
        if(modal){
            modal.style.display='block';
        }
        backdrop.style.display='block'
    })
}

toggleButton.addEventListener('click',function(){
    mobileNavBar.style.display='block'
    backdrop.style.display='block'
})


if(backdrop){
    backdrop.addEventListener('click',function(){
        mobileNavBar.style.display='none'
      closeModal()
    })
}




    modalNoButton.addEventListener('click',function(){
        closeModal()
    })



function closeModal(){
    backdrop.style.display='none'

    if(modal){
        modal.style.display='none'
    }
   
}