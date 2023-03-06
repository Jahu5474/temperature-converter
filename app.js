document.getElementById("submitButton").onclick = function () {
    let temperature;

    if (document.getElementById('celsiusButton').checked) {
        temperature = document.getElementById("textSpace").value;
        temp = Number(temperature);
        temp = toCelsius(temperature);
        document.getElementById("tempLabel").innerHTML = temp + "°C"
    }
    else if (document.getElementById('fahrenheitButton').checked) {
        temperature = document.getElementById("textSpace").value;
        temp = Number(temperature);
        temp = toFahrenheit(temperature);
        document.getElementById("tempLabel").innerHTML = temp + "°F"

    }
    else {
        document.getElementById("tempLabel").innerHTML = "Select a unit";
    }
}



function toCelsius(temperature) {
    return (temperature - 32) * (5 / 9);
}

function toFahrenheit(temperature) {
    return temperature * 9 / 5 + 32
}
