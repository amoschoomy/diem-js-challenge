const nameInput=document.getElementById("name")
const nameOutput=document.getElementById("nameOutput")
const textInput="Hello there! What's your name?"

nameInput.onfocus=()=>{
    nameOutput.textContent=textInput
}

nameInput.onblur=()=>{
    nameOutput.textContent=nameInput.value?"Hi, "+nameInput.value:textInput
}

const birthdaySelector=document.getElementById("date")
const ageOutput=document.getElementById("ageOutput")
const birthdayText="Lemme guess, your age is..."

birthdaySelector.onfocus=()=>{
    ageOutput.textContent=birthdayText
}

birthdaySelector.onblur=()=>{
    const date=new Date(birthdaySelector.value)
    const year=new Date().getFullYear()-date.getFullYear()
    ageOutput.textContent=birthdaySelector.value?"Your age is "+year:"Would you mind entering your birthday?"

}

const lightSelect=document.getElementById("light")
const darkSelect=document.getElementById("dark")
const rightSection=document.getElementById("right-section")
const themeOutput=document.getElementById("themeOutput")

lightSelect.onchange=()=>{
    rightSection.classList.remove("bg-dark","text-white")
    rightSection.classList.add("bg-light","text-dark")
    themeOutput.textContent="You selected Light Mode!"
}

darkSelect.onchange=()=>{
    rightSection.classList.remove("bg-light","text-dark")
    rightSection.classList.add("bg-dark","text-white")
    themeOutput.textContent="You selected Dark Mode!"
}




const buttons = document.getElementsByClassName("btn btn-success btn-sm")
const skillsOutput = document.getElementById("skillsOutput")
const skillsParent=buttons[0].parentNode

Array.from(buttons).forEach(button =>{ 
    button.addEventListener("click",()=>{
        button.parentNode===skillsParent?skillsOutput.appendChild(button):skillsParent.appendChild(button)
    })

    button.addEventListener("mouseover",()=>{
        if (button.parentNode===skillsOutput) {
            button.classList.remove("btn-success")
            button.classList.add("btn-danger")
        }
    })

    button.addEventListener("mouseout",()=>{
        button.classList.remove("btn-danger")
        button.classList.add("btn-success")
    })
})
