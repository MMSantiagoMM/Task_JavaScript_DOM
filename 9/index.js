
let other = document.getElementById('scrollO')



window.addEventListener('scroll', () => {
    console.log(scrollY)
    if (window.scrollY >= 810.9090881347656) {
        other.style.backgroundColor = 'green'
    } else if (window.scrollY >= 510.9090881347656) {
        other.style.backgroundColor = 'red'
    } else {
        other.style.backgroundColor = 'black'
    }


})
