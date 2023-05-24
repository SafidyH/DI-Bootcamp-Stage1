var h1Element = document.querySelector("h1");
console.log(h1Element);

var articleElement = document.querySelector("article");
var paragraphs = articleElement.querySelectorAll("p");
var lastParagraph = paragraphs[paragraphs.length - 1];
articleElement.removeChild(lastParagraph);

var h2Element = document.querySelector("h2");
h2Element.addEventListener("click", function() {
    h2Element.style.backgroundColor = "red";
});

var h3Element = document.querySelector("h3");
h3Element.addEventListener("click", function() {
    h3Element.style.display = "none";
});

var boldButton = document.getElementById("boldButton");
boldButton.addEventListener("click", function() {
    for (var i = 0; i < paragraphs.length; i++) {
        paragraphs[i].style.fontWeight = "bold";
    }
});

h1Element.addEventListener("mouseover", function() {
    var randomFontSize = Math.floor(Math.random() * 101);
    h1Element.style.fontSize = randomFontSize + "px";
});

var secondParagraph = paragraphs[1];
secondParagraph.addEventListener("mouseover", function() {
    secondParagraph.classList.add("fade-out");
});