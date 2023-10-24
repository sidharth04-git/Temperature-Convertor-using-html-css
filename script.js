function convertTemperature() {
    const celsiusInput = document.getElementById('celsius');
    const fahrenheitInput = document.getElementById('fahrenheit');

    // Check if the Celsius input is a valid number
    const celsius = parseFloat(celsiusInput.value);

    if (isNaN(celsius)) {
        alert('Please enter a valid temperature in Celsius.');
        return;
    }

    // Convert Celsius to Fahrenheit
    const fahrenheit = (celsius * 9/5) + 32;

    // Display the result in the Fahrenheit input field
    fahrenheitInput.value = fahrenheit.toFixed(2);
}
