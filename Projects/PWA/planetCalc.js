const calculation = (e) => {
    e.preventDefault();
    
    var weight = parseFloat(document.getElementById("weight").value);
    
    var selectedPlanet = document.getElementById("planets").value;
    
    var gravityConstant = 
    {
        "earth":9.81,
        "mars":3.71,
        "mercury":3.7,
        "venus":8.87,
        "jupiter": 24.79,
        "uranus": 8.69,
        "neptune": 11.15,
        "saturn": 10.44
    }

    var gravity = gravityConstant[selectedPlanet];
    var weightOnPlanet = weight * gravity/ 9.81;

    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "Weight on " + selectedPlanet.charAt(0).toUpperCase() + selectedPlanet.slice(1) + ": " + weightOnPlanet.toFixed(2) + " kg";

    localStorage.setItem("weightInput", weight);
    localStorage.setItem("weightResult", resultDiv.innerHTML);

   

}
document.getElementById("weightForm").addEventListener("submit", calculation)

window.addEventListener("load", function() {
    var storedInput = localStorage.getItem("weightInput");
    var storedResult = localStorage.getItem("weightResult");
    if (storedInput && storedResult) {
        document.getElementById("weight").value = storedInput;
        document.getElementById("result").innerHTML = storedResult;
    }
});

document.getElementById("reset").addEventListener("click", function(e) {
    localStorage.clear();
    document.getElementById("weight").value = "";
    document.getElementById("result").innerHTML = "";
});