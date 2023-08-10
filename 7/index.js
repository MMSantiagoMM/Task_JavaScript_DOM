let PSW= document.querySelector('#psw');
let Message = document.querySelector('#message')
let Letter = document.querySelector('#letter')
let Capital = document.querySelector('#capital')
let Number = document.querySelector('#number')
let Length = document.querySelector('#length')
let regExpLetter = /^(?=.*[a-z]).*$/
let regExpCapital = /^(?=.*[A-Z]).*$/
let regExpNumber = /^(?=.*[0-9]).*$/
let regExpLength = /^(?=.{8,}).*$/


PSW.addEventListener('focus',()=>{
    Message.style.display='block'
    PSW.addEventListener('keydown',()=>{
        if(regExpLetter.test(PSW.value)){
            Letter.classList.remove('invalid')
            Letter.classList.add('valid')
        }else{
            Letter.classList.add('invalid')
        }
        if(regExpCapital.test(PSW.value)){
            Capital.classList.remove('invalid')
            Capital.classList.add('valid')
        }else{
            Capital.classList.add('invalid')
        }
        if(regExpNumber.test(PSW.value)){
            Number.classList.remove('invalid')
            Number.classList.add('valid')
        }else{
            Number.classList.add('invalid')
        }
        if(regExpLength.test(PSW.value)){
            Length.classList.remove('invalid')
            Length.classList.add('valid')
        }else{
            Length.classList.add('invalid')
        }
    })
        
    


  
})








