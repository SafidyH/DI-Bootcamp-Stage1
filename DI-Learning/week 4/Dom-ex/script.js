let link = document.getElementById("dI");

let href = link.getAttribute("href");
let hreflang = link.getAttribute("hreflang");
let rel = link.getAttribute("rel");
let target = link.getAttribute("target");
let type = link.getAttribute("type");

console.log("href:", href);
console.log("hreflang:", hreflang);
console.log("rel:", rel);
console.log("target:", target);
console.log("type:", type);