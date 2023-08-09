let Paneles = document.querySelectorAll('.panel');
let Acordiones = document.querySelectorAll('.accordion')

Acordiones.forEach((element,index)=>{
    element.addEventListener('click',()=>{
        if(Paneles[index].style.display == 'none'){
            Paneles[index].style.display='block'
        }else{
            Paneles[index].style.display='none'
        }
    })
})

