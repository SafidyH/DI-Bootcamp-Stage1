 function calculateVolume(event) {
    event.preventDefault();

    var radiusInput = document.getElementById("radius");
    var radius = parseFloat(radiusInput.value);

    if (isNaN(radius)) {
        alert("Please enter a valid number for the radius.");
        return;
    }

    var volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

    var volumeInput = document.getElementById("volume");
    volumeInput.value = volume.toFixed(2);
}

var form = document.getElementById("MyForm");
form.addEventListener("submit", calculateVolume);