const year = document.querySelector("#currentYear");
year.textContent = new Date().getFullYear();

const lastModified = document.querySelector("#lastModified");
lastModified.textContent = "Last Modified: " + document.lastModified;

const temperature = 10;
const windSpeed = 5;

function calculateWindChill(temp, speed) {
    return 13.12 + (0.6215 * temp) - (11.37 * Math.pow(speed, 0.16)) + (0.3965 * temp * Math.pow(speed, 0.16));
}

const windChillElement = document.querySelector("#windChill");

if (temperature <= 10 && windSpeed > 4.8) {
    const windChill = calculateWindChill(temperature, windSpeed);
    windChillElement.textContent = windChill.toFixed(1) + "°C";
} else {
    windChillElement.textContent = "N/A";
}
