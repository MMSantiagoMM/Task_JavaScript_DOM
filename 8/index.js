let Subject = document.querySelector('#subject')
let Topic = document.querySelector('#topic')
let Chapter = document.querySelector('#chapter')

var subjectObject = {
  "Front-end": {
    "HTML": ["Links", "Images", "Tables", "Lists"],
    "CSS": ["Borders", "Margins", "Backgrounds", "Float"],
    "JavaScript": ["Variables", "Operators", "Functions", "Conditions"]
  },
  "Back-end": {
    "PHP": ["Variables", "Strings", "Arrays"],
    "SQL": ["SELECT", "UPDATE", "DELETE"]
  }
}

let [Front, Back] = Object.keys(subjectObject)




let [html, css, js] = Object.keys(subjectObject["Front-end"])

let optionOne = document.createElement("option")
optionOne.textContent = Front

Subject.appendChild(optionOne)

let optionTwo = document.createElement("option")
optionTwo.textContent = Back

Subject.appendChild(optionTwo)

Subject.addEventListener('change', (element) => {

  if (element.target.value == Front) {
    let [html, css, js] = Object.keys(subjectObject["Front-end"])

    let htmlN = document.createElement('option')
    let cssN = document.createElement('option')
    let jsN = document.createElement('option')

    htmlN.textContent = html
    cssN.textContent = css
    jsN.textContent = js

    Topic.appendChild(htmlN)
    Topic.appendChild(cssN)
    Topic.appendChild(jsN)

    Topic.addEventListener('click',(elementTwo)=>{
      
      if(elementTwo.target.value == html){
        Chapter.textContent = " "
        let [h1, h2, h3, h4] = Object.values(subjectObject["Front-end"].HTML)
        let h1N = document.createElement('option')
        h1N.textContent = h1
        Chapter.appendChild(h1N)

        let h2N = document.createElement('option')
        h2N.textContent = h2
        Chapter.appendChild(h2N)

        let h3N = document.createElement('option')
        h3N.textContent = h3
        Chapter.appendChild(h3N)

        let h4N = document.createElement('option')
        h4N.textContent = h4
        Chapter.appendChild(h4N)
      }else if(elementTwo.target.value == css){
        Chapter.textContent = " "
        let [h1, h2, h3, h4] = Object.values(subjectObject["Front-end"].CSS)
        let h1N = document.createElement('option')
        h1N.textContent = h1
        Chapter.appendChild(h1N)

        let h2N = document.createElement('option')
        h2N.textContent = h2
        Chapter.appendChild(h2N)

        let h3N = document.createElement('option')
        h3N.textContent = h3
        Chapter.appendChild(h3N)

        let h4N = document.createElement('option')
        h4N.textContent = h4
        Chapter.appendChild(h4N)

      }else{
        Chapter.textContent = " "
        let [h1, h2, h3, h4] = Object.values(subjectObject["Front-end"].JavaScript)
        let h1N = document.createElement('option')
        h1N.textContent = h1
        Chapter.appendChild(h1N)

        let h2N = document.createElement('option')
        h2N.textContent = h2
        Chapter.appendChild(h2N)

        let h3N = document.createElement('option')
        h3N.textContent = h3
        Chapter.appendChild(h3N)

        let h4N = document.createElement('option')
        h4N.textContent = h4
        Chapter.appendChild(h4N)
      }
    })
  }else{
    Topic.textContent = " "
    
    let [php,sql] = Object.keys(subjectObject["Back-end"])

    let phpN = document.createElement('option')
    phpN.textContent = php

    let sqlN = document.createElement('option')
    sqlN.textContent = sql

    Topic.appendChild(phpN)
    Topic.appendChild(sqlN)

    Topic.addEventListener('click',(elementTree)=>{
      Chapter.textContent = " "
      if(elementTree.target.value == php){
        let [h1, h2, h3] = Object.values(subjectObject["Back-end"].PHP)

        let h1N = document.createElement('option')
        h1N.textContent = h1
        Chapter.appendChild(h1N)

        let h2N = document.createElement('option')
        h2N.textContent = h2
        Chapter.appendChild(h2N)

        let h3N = document.createElement('option')
        h3N.textContent = h3
        Chapter.appendChild(h3N)
      }else{
        let [h1, h2, h3] = Object.values(subjectObject["Back-end"].SQL)

        let h1N = document.createElement('option')
        h1N.textContent = h1
        Chapter.appendChild(h1N)

        let h2N = document.createElement('option')
        h2N.textContent = h2
        Chapter.appendChild(h2N)

        let h3N = document.createElement('option')
        h3N.textContent = h3
        Chapter.appendChild(h3N)
      }
    })
  }
})





