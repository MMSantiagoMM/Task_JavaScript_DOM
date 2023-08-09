let IceCream = document.querySelector('.nieve')
let Resultado = document.querySelector('.resultado')

IceCream.addEventListener('change',(element)=>{
    Resultado.textContent = `Te gusta el sabor ${element.target.value} `
})