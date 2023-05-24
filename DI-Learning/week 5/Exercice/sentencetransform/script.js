var allBoldItems;

function getBoldItems() {
    allBoldItems = document.querySelectorAll("p strong");
}

function highlight() {
    allBoldItems.forEach(function(item) {
        item.classList.add("highlight");
    });
}

function returnItemsToDefault() {
    allBoldItems.forEach(function(item) {
        item.classList.remove("highlight");
    });
}

var paragraph = document.querySelector("p");
paragraph.addEventListener("mouseover", highlight);
paragraph.addEventListener("mouseout", returnItemsToDefault);

getBoldItems();