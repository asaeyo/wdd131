const products = [
    { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
    { id: "fc-2050", name: "power laces", averagerating: 4.7 },
    { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
    { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
    { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

// ------------------------------
// Populate product dropdown
// ------------------------------
const productSelect = document.getElementById("product");

if (productSelect) {
    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id; // requirement: use id for value
        option.textContent = product.name;
        productSelect.appendChild(option);
    });
}

// ------------------------------
// Confirmation Page Logic
// ------------------------------
const reviewCountEl = document.getElementById("reviewCount");

if (reviewCountEl) {

    // Increment localStorage counter
    let count = Number(localStorage.getItem("reviewCounter")) || 0;
    count++;
    localStorage.setItem("reviewCounter", count);

    reviewCountEl.textContent = count;

    // Display submitted data
    const params = new URLSearchParams(window.location.search);
    let output = "<ul>";

    params.forEach((value, key) => {
        output += `<li><strong>${key}: </strong>${value}</li>`;
    });

    output += "</ul>";

    document.getElementById("currentyear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent =
        "Last Modified: " + document.lastModified;
}