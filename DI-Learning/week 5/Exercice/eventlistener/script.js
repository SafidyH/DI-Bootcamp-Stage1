var element = document.getElementById("myElement");

element.addEventListener("click", function() {
    element.style.backgroundColor = "red";
});

element.addEventListener("dblclick", function() {
    element.style.backgroundColor = "blue";
});

element.addEventListener("mouseover", function() {
    element.style.transform = "translate(50px, 50px)";
});

element.addEventListener("mouseout", function() {
    element.style.transform = "translate(0, 0)";
});