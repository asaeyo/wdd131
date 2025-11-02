// getdates.js

// 1️⃣ Display the current year dynamically
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

// 2️⃣ Get and format the last modified date
const lastModified = new Date(document.lastModified);

// Define formatting options
const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
    timeZoneName: "short" // Adds timezone, e.g. "WAT" or "GMT+1"
};

// Format the date nicely for readability
const formattedDate = lastModified.toLocaleString("en-US", options);

// 3️⃣ Insert into footer
document.getElementById("lastModified").textContent =
    "Last Modified: " + formattedDate;
