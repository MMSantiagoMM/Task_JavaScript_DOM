let Button = document.querySelector('.dropbtn');
let MyDropdown = document.querySelector('#myDropdown');



Button.addEventListener('click',()=>{
    MyDropdown.classList.toggle('show')
})