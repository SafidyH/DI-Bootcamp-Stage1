var button = document.getElementById("jsstyle");

button.addEventListener("mouseover", function() {
    button.style.backgroundColor = "blue";
    button.style.color = "white";
});

button.addEventListener("mouseout", function() {
    button.style.backgroundColor = "";
    button.style.color = "";
});

button.addEventListener("click", function() {
    button.classList.toggle("button-style");
});