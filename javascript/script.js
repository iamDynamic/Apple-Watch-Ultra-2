var orange = document.getElementById("orange")
var blue = document.getElementById("blue")
var white = document.getElementById("white")
var img = document.getElementById("img")
var color = document.getElementById("color")
orange.addEventListener("click",()=>{
    img.src = "/images/Watch Ultra 2 (orane).png"
    color.innerHTML = "orange"
})
blue.addEventListener("click",()=>{
    color.innerHTML = "blue"
    img.src = "/images/Watch Ultra 2 (blue).png"
})
white.addEventListener("click",()=>{
    img.src = "/images/Watch Ultra 2 (white).png"
    color.innerHTML = "white"
})