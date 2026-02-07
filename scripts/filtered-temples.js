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
            dedicatedYear: 2005,
            dedicatedDate: "August 7",
            area: 11500,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
        },
        {
            templeName: "Manti Utah",
            location: "Manti, Utah, United States",
            dedicatedYear: 1888,
            dedicatedDate: "May 21",
            area: 74792,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
        },
        {
            templeName: "Payson Utah",
            location: "Payson, Utah, United States",
            dedicatedYear: 2015,
            dedicatedDate: "June 7",
            area: 96630,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x250/payson-utah-temple-exterior-1416671-wallpaper.jpg"
        },
        {
            templeName: "Yigo Guam",
            location: "Yigo, Guam",
            dedicatedYear: 2020,
            dedicatedDate: "May 2",
            area: 6861,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
        },
        {
            templeName: "Washington D.C.",
            location: "Kensington, Maryland, United States",
            dedicatedYear: 1974,
            dedicatedDate: "November 19",
            area: 156558,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
        },
        {
            templeName: "Lima Perú",
            location: "Lima, Perú",
            dedicatedYear: 1986,
            dedicatedDate: "January 10",
            area: 9600,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
        },
        {
            templeName: "Mexico City Mexico",
            location: "Mexico City, Mexico",
            dedicatedYear: 1983,
            dedicatedDate: "December 2",
            area: 116642,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
        },
        {
            templeName: "Bern Switzerland",
            location: "Bern, Switzerland",
            dedicatedYear: 1955,
            dedicatedDate: "September 11",
            area: 11500,
            imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/bern-switzerland-temple/bern-switzerland-temple-54640.jpg"
        },
        {
            templeName: "Fukuoka Japan",
            location: "Fukuoka, Japan",
            dedicatedYear: 2000,
            dedicatedDate: "June 11",
            area: 10110,
            imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/fukuoka-japan-temple/fukuoka-japan-temple-23844.jpg"
        },
        {
            templeName: "Kinshasa DRC",
            location: "Kinshasa, Democratic Republic of Congo",
            dedicatedYear: 2019,
            dedicatedDate: "April 14",
            area: 13500,
            imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/kinshasa-democratic-republic-of-the-congo-temple/kinshasa-democratic-republic-of-the-congo-temple-11033.jpg"
        },
        {
            templeName: "Lisbon Portugal",
            location: "Lisbon, Portugal",
            dedicatedYear: 2019,
            dedicatedDate: "June 17",
            area: 21280,
            imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/lisbon-portugal-temple/lisbon-portugal-temple-6306.jpg"
        },
        {
            templeName: "Nairobi Kenya",
            location: "Nairobi, Kenya",
            dedicatedYear: 2019,
            dedicatedDate: "October 13",
            area: 10320,
            imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/nairobi-kenya-temple/nairobi-kenya-temple-59209.jpg"
        },
    ];

    // ==========================
    // CREATE TEMPLE CARDS
    // ==========================
    function createTempleCards(list) {
        const container = document.getElementById("temple-cards");
        container.innerHTML = "";

        list.forEach(temple => {
            const card = document.createElement("section");
            card.className = "card";

            card.innerHTML = `
                <h3>${temple.templeName}</h3>
                <p><strong>Location:</strong> ${temple.location}</p>
                <p><strong>Dedicated:</strong> ${temple.dedicatedDate}, ${temple.dedicatedYear}</p>
                <p><strong>Size:</strong> ${temple.area.toLocaleString()} sq ft</p>
                <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
            `;

            container.appendChild(card);
        });
    }

    // Initial load
    createTempleCards(temples);
    pageTitle.textContent = "Home";

    // ==========================
    // FILTER BUTTONS
    // ==========================
    const filters = {
        home: () => temples,
        old: () => temples.filter(t => t.dedicatedYear < 1900),
        new: () => temples.filter(t => t.dedicatedYear > 2000),
        large: () => temples.filter(t => t.area > 90000),
        small: () => temples.filter(t => t.area < 10000),
        nonutah: () => temples.filter(t => !t.location.includes("Utah"))
    };

    Object.keys(filters).forEach(id => {
        document.getElementById(id).addEventListener("click", () => {
            createTempleCards(filters[id]());
            pageTitle.textContent = id.charAt(0).toUpperCase() + id.slice(1) + " Temples";
        });
    });

    // ==========================
    // FOOTER INFO
    // ==========================
    document.getElementById("currentyear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent =
        "Last Modified: " + document.lastModified;

});