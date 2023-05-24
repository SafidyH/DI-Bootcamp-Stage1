var button = document.getElementById("jsstyle");
var div = button.parentElement;

button.addEventListener("mouseover", function(event) {
    event.stopPropagation();
    button.style.backgroundColor = "blue";
    button.style.color = "white";
});

button.addEventListener("mouseout", function(event) {
    event.stopPropagation();
    button.style.backgroundColor = "";
    button.style.color = "";
});

button.addEventListener("click", function(event) {
    event.stopPropagation();
    button.classList.toggle("button-style");
});

div.addEventListener("click", function(event) {
    event.stopPropagation();
    alert("Clicked the div");
});