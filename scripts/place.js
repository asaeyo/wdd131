document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// -----------------------------
// STATIC WEATHER DATA
// (You will replace these later with API data)
// -----------------------------
const temperature = 10; // °C
const windSpeed = 10;   // km/h

document.getElementById("tempValue").textContent = `${temperature}°C`;
document.getElementById("windValue").textContent = `${windSpeed} km/h`;

// -----------------------------
// WIND CHILL FORMULA (Metric)
// -----------------------------
function calculateWindChill(tempC, speedKMH) {
    // METRIC formula
    return (
        13.12 +
        0.6215 * tempC -
        11.37 * Math.pow(speedKMH, 0.16) +
        0.3965 * tempC * Math.pow(speedKMH, 0.16)
    );
}

// -----------------------------
// APPLY WIND CHILL RULES
// -----------------------------
let windChillOutput = "N/A";

// Valid conditions for metric:
// temp <= 10°C AND speed > 4.8 km/h
if (temperature <= 10 && windSpeed > 4.8) {
    const wc = calculateWindChill(temperature, windSpeed);
    windChillOutput = `${wc.toFixed(1)}°C`;
}

document.getElementById("windChillValue").textContent = windChillOutput;