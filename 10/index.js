
let other = document.getElementById('scrollO')
let myBtn = document.getElementById('myBtn')



window.addEventListener('scroll', () => {
    console.log(scrollY)
    if (window.scrollY >= 810.9090881347656) {
        other.style.backgroundColor = 'green'
    } else if (window.scrollY >= 510.9090881347656) {
        other.style.backgroundColor = 'red'
    } else {
        other.style.backgroundColor = 'black'
    }
    if(window.scrollY >= 510.9090881347656){
        myBtn.style.display = 'block'
    }else{
        myBtn.style.display = 'none'
    }

    myBtn.addEventListener('click',()=>{
        window.scrollTo({
            top:0,
            behavior: "smooth"
        })
    })        
})
