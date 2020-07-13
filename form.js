
var input = document.getElementById("input");
var output = document.getElementById("output");

input.addEventListener("keyup", run);

function run() {
    output.innerHTML= input.value;
}