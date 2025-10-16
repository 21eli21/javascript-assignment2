let mybtn =document.querySelector(".btn")
let myform=document.getElementById("my-form")
let mybody=document.querySelector("body")
let myul=document.querySelector(".item")

mybtn.addEventListener("click",function(e){
e.preventDefault()
myform.style.backgroundColor="red"
mybody.classList.add("bg-dark")
myul.lastElementChild.innerHTML="<h1>hello<h1>"
})

