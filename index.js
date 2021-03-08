function addnumbers () {
let a = document.getElementById("box1").value
const b = document.getElementById("box2").value

var c = Number(a) + Number(b)
console.log(c)

document.getElementById("box3").value = c
}