// getdates.js

// 1. Set the current year dynamically
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

// 2. Set the last modified date dynamically
const lastModifiedRaw = new Date(document.lastModified); // Convert string to Date object

// Format the date nicely, e.g., "November 1, 2025, 2:30 PM"
const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
};

const lastModifiedFormatted = lastModifiedRaw.toLocaleString("en-US", options);

document.getElementById("lastModified").textContent = "Last Modified: " + lastModifiedFormatted;
