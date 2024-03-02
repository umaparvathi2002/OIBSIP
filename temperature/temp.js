function convertTemperature() {
  // Get input values
  var temperatureInput = document.getElementById("temp").value;
  var modeSelect = document.querySelector(".temp select");
  var outputDiv = document.getElementById("output");

  // Convert temperature based on selected mode
  if (modeSelect.value === "cel") {
      // Convert Celsius to Fahrenheit
      var fahrenheit = (temperatureInput * 9/5) + 32;
      outputDiv.innerHTML = fahrenheit.toFixed(2)+"°F";
  } else {
      // Convert Fahrenheit to Celsius
      var celsius = (temperatureInput - 32) * 5/9;
      outputDiv.innerHTML =  celsius.toFixed(2)+"°C";
    }
}