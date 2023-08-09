let Links = document.querySelectorAll('a');
let Icon = document.querySelector('.icon');

Icon.addEventListener('click',()=>{
    let Menu = document.querySelector('#myNavbar')
    Menu.classList.toggle('responsive')

})