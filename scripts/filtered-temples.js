document.addEventListener("DOMContentLoaded", () => {

    // ==========================
    // MOBILE MENU
    // ==========================

    const menuButton = document.querySelector("#menu");
    const navigation = document.querySelector(".navigation");

    menuButton.addEventListener("click", (e) => {
        e.preventDefault();
        navigation.classList.toggle("show");
    });

    const pageTitle = document.getElementById("pageTitle");

    // ==========================
    // TEMPLE DATA
    // ==========================

    const temples = [
        {
            templeName: "Aba Nigeria",
            location: "Aba, Nigeria",
            dedicated: "2005, August, 7",
            area: 11500,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
        },
        {
            templeName: "Manti Utah",
            location: "Manti, Utah, United States",
            dedicated: "1888, May, 21",
            area: 74792,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
        },
        {
            templeName: "Payson Utah",
            location: "Payson, Utah, United States",
            dedicated: "2015, June, 7",
            area: 96630,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
        },
        {
            templeName: "Yigo Guam",
            location: "Yigo, Guam",
            dedicated: "2020, May, 2",
            area: 6861,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
        },
        {
            templeName: "Washington D.C.",
            location: "Kensington, Maryland, United States",
            dedicated: "1974, November, 19",
            area: 156558,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
        },
        {
            templeName: "Lima Perú",
            location: "Lima, Perú",
            dedicated: "1986, January, 10",
            area: 9600,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
        },
        {
            templeName: "Mexico City Mexico",
            location: "Mexico City, Mexico",
            dedicated: "1983, December, 2",
            area: 116642,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
        },
        {
            templeName: "Bern Switzerland",
            location: "Bern, Switzerland",
            dedicated: "1955, September, 11",
            area: 11500,
            imageUrl: "https://assets.churchofjesuschrist.org/f1/55/f1555f230ec3d5e1dcd67b5f138e073d98e2e9d5/bern_switzerland_temple.jpeg"
        },
        {
            templeName: "Fukuoka Japan",
            location: "Fukuoka, Japan",
            dedicated: "2000, June, 11",
            area: 10110,
            imageUrl: "https://assets.churchofjesuschrist.org/2f/42/2f42d89a8b6c93f8c05c512416826c6f48a0d24b/fukuoka_japan_temple.jpeg"
        },
        {
            templeName: "Kinshasa Democratic Republic of Congo",
            location: "Kinshasa, DRC",
            dedicated: "2019, April, 14",
            area: 13500,
            imageUrl: "https://assets.churchofjesuschrist.org/fc/34/fc34fcb4352f4201c8f06e2b8f836bb0fb92da1f/kinshasa_drc_temple.jpeg"
        },
        {
            templeName: "Lisbon Portugal",
            location: "Lisbon, Portugal",
            dedicated: "2019, June, 17",
            area: 21280,
            imageUrl: "https://assets.churchofjesuschrist.org/41/69/41695b3ff2d1551e0a22f5b99e77c422e946e546/lisbon_portugal_temple.jpeg"
        },
        {
            templeName: "Nairobi Kenya",
            location: "Nairobi, Kenya",
            dedicated: "2019, October, 13",
            area: 10320,
            imageUrl: "https://assets.churchofjesuschrist.org/1b/87/1b87ef3f0cb29e8efb7da1f37f88b365bb1d3b6a/nairobi_kenya_temple.jpeg"
        },


    // ==========================
    // CREATE TEMPLE CARDS
    // ==========================

    function createTempleCards(filteredTemples) {
        const container = document.querySelector("#temple-cards");
        container.innerHTML = "";

        filteredTemples.forEach(temple => {
            const card = document.createElement("section");
            card.classList.add("card");

            card.innerHTML = `
                <h3>${temple.templeName}</h3>
                <p><strong>Location:</strong> ${temple.location}</p>
                <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
                <p><strong>Size:</strong> ${temple.area.toLocaleString()} sq ft</p>
                <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
            `;

            container.appendChild(card);
        });
    }

    // Load all temples initially
    createTempleCards(temples);

    // ==========================
    // FILTER BUTTONS
    // ==========================

    document.getElementById("home").addEventListener("click", () => {
        createTempleCards(temples);
        pageTitle.textContent = "Home";
    });

    document.getElementById("old").addEventListener("click", () => {
        createTempleCards(temples.filter(t => parseInt(t.dedicated) < 1900));
        pageTitle.textContent = "Old Temples";
    });

    document.getElementById("new").addEventListener("click", () => {
        createTempleCards(temples.filter(t => parseInt(t.dedicated) > 2000));
        pageTitle.textContent = "New Temples";
    });

    document.getElementById("large").addEventListener("click", () => {
        createTempleCards(temples.filter(t => t.area > 90000));
        pageTitle.textContent = "Large Temples";
    });

    document.getElementById("small").addEventListener("click", () => {
        createTempleCards(temples.filter(t => t.area < 10000));
        pageTitle.textContent = "Small Temples";
    });

    document.getElementById("nonutah").addEventListener("click", () => {
        createTempleCards(temples.filter(t => !t.location.includes("Utah")));
        pageTitle.textContent = "Non-Utah Temples";
    });

    // ==========================
    // FOOTER INFO
    // ==========================

    document.getElementById("currentyear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent =
        "Last Modified: " + document.lastModified;

});
