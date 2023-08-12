




function loaderFunction (){
    setTimeout(()=>{
    
        let Loader = document.querySelector('.loader')
        let Disapear = document.querySelectorAll('.disapear')

        Loader.style = "display:none"
        Disapear.forEach((element)=>{
            element.classList.remove('disapear')
        })


        console.log("hi")
    },3000)

}

loaderFunction()