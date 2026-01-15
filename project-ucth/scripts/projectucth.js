// HAMBURGER MENU
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("show");
});


function displayFooterInfo() {
    const yearEl = document.getElementById("year");
    const lastModifiedEl = document.getElementById("lastModified");
    if (yearEl) yearEl.textContent = new Date().getFullYear();
    if (lastModifiedEl) lastModifiedEl.textContent = document.lastModified;
}

// 2. Highlight active navigation link
function highlightActiveNav() {
    const navLinks = document.querySelectorAll("nav a");
    const currentPage = window.location.pathname.split("/").pop();
    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });
}

// 3. Validate a form
function validateForm(formId) {
    const form = document.getElementById(formId);
    if (!form) return;

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // prevent default submission
        let isValid = true;

        // Simple validation: required fields
        const requiredFields = form.querySelectorAll("[required]");
        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                isValid = false;
                field.classList.add("error");
            } else {
                field.classList.remove("error");
            }
        });

        if (isValid) {
            alert("Form submitted successfully!");
            saveFormDataToLocalStorage(form);
            form.reset();
        } else {
            alert("Please fill out all required fields.");
        }
    });
}

// 4. Save form data to localStorage
function saveFormDataToLocalStorage(form) {
    const formData = {};
    const inputs = form.querySelectorAll("input, select, textarea");
    inputs.forEach(input => {
        formData[input.name] = input.value;
    });

    // Generate a unique key with timestamp
    const storageKey = `${form.id}-${Date.now()}`;
    localStorage.setItem(storageKey, JSON.stringify(formData));
}

// 5. Conditional DOM example: toggle details section
function setupToggleSection(buttonId, sectionId) {
    const button = document.getElementById(buttonId);
    const section = document.getElementById(sectionId);
    if (!button || !section) return;

    button.addEventListener("click", () => {
        section.classList.toggle("hidden");
    });
}

// 6. Initialize all JS functions on DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
    displayFooterInfo();
    highlightActiveNav();
    validateForm("appointmentForm"); // ID of your appointment form
    validateForm("contactForm");     // ID of your contact form
    setupToggleSection("toggleResearchBtn", "researchDetails"); // Example
});



function lazyLoadImages() {
    const lazyImgs = document.querySelectorAll("img[data-src]");

    const loadImg = (img) => {
        img.src = img.dataset.src;
        img.onload = () => {
            img.classList.add("lazy-loaded");
            img.removeAttribute("data-src");
        };
    };

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                loadImg(entry.target);
                obs.unobserve(entry.target);
            }
        });
    });

    lazyImgs.forEach(img => observer.observe(img));
}


// ----------------------
// NEWS CARDS DATA
// ----------------------
const newsData = [
    {
        title: "ICU Services Expanded",
        img: "images/news-icu.jpg",
        desc: "UCTH expands its Intensive Care Unit with modern monitoring systems.",
    },
    {
        title: "Digitalized Accident and Emergency",
        img: "images/news-emergency.jpg",
        desc: "Digitalized documentation at accident and emergency to improve patient care and reduce waiting time.",
    },
    {
        title: "ERCP Procedure Success",
        img: "images/news-ercp.jpg",
        desc: "UCTH records successful ERCP procedures with improved outcomes.",
    },
    {
        title: "MRI Suite Operational",
        img: "images/news-mri.jpg",
        desc: "A state-of-the-art MRI scanner now provides clearer diagnostic imaging.",
    }
];


// ----------------------
// LOAD NEWS CARDS
// ----------------------
function loadNewsCards() {
    const container = document.getElementById("news-cards");

    newsData.forEach(item => {
        const card = document.createElement("div");
        card.className = "news-card";

        card.innerHTML = `
            <img data-src="${item.img}" alt="${item.title}">
            <h3>${item.title}</h3>
            <p>${item.desc}</p>
        `;

        container.appendChild(card);
    });

    lazyLoadImages();
}

loadNewsCards();


// FORM VALIDATION
const form = document.getElementById("appointmentForm");
const message = document.getElementById("formMessage");

if (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        message.textContent = "Appointment successfully submitted!";
        message.style.color = "green";

        form.reset();
    });
}