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
