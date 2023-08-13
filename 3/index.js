let Button = document.querySelector('.openbtn');
let SideBar = document.getElementById('mySidebar')
let Main = document.getElementById('main')
let ButtonClose = document.querySelector('.closebtn')



Button.addEventListener('click',()=>{
   SideBar.style.left = '0px'
    Main.style.marginLeft = '200px'
})

ButtonClose.addEventListener('click',()=>{
    SideBar.style.left = '-200px'
    Main.style.marginLeft = '0px'
})

