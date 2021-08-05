const nameInput=document.getElementById("name")
const nameOutput=document.getElementById("nameOutput")
const textInput="Hello there! What's your name?"


nameInput.onfocus=()=>{
    nameOutput.textContent=textInput
}

nameInput.onblur=()=>{
    nameOutput.textContent=nameInput.value?"Hi, "+nameInput.value:textInput
}
