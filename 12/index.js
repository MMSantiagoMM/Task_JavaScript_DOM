let MyInput = document.querySelector('#myInput')

let AddBtn = document.querySelector('.addBtn').addEventListener('click', () => {

    let MyUL = document.querySelector('#myUL')
    let MyLi = document.createElement('li')
    MyLi.textContent = MyInput.value
    MyUL.appendChild(MyLi)


})

MyInput.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
        let MyUL = document.querySelector('#myUL')
        let MyLi = document.createElement('li')
        MyLi.textContent = MyInput.value
        MyUL.appendChild(MyLi)
    }
})



