/// ===============================
// FOOTER DATES
// ===============================
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// ===============================
// NAVIGATION TOGGLE (Mobile)
// ===============================
const hamburger = document.getElementById("hamburger");
const navMenu = document.querySelector(".main-nav ul");

if (hamburger) {
    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("open");

        // Accessibility toggle
        const expanded = hamburger.getAttribute("aria-expanded") === "true";
        hamburger.setAttribute("aria-expanded", !expanded);
    });
}

// ===============================
// APPOINTMENTS (LocalStorage)
// ===============================
const appointmentForm = document.getElementById("appointmentForm");
const appointmentMessage = document.getElementById("message");
const appointmentList = document.getElementById("appointmentList");

let appointments = JSON.parse(localStorage.getItem("appointments")) || [];

function saveAppointment(appointment) {
    appointments.push(appointment);
    localStorage.setItem("appointments", JSON.stringify(appointments));
}

function displayAppointments() {
    if (!appointmentList) return;

    appointmentList.innerHTML = "";

    if (appointments.length === 0) {
        appointmentList.innerHTML = `<p>No appointments booked yet.</p>`;
        return;
    }

    appointments.forEach(app => {
        const item = document.createElement("div");
        item.classList.add("appointment-item");

        item.innerHTML = `
            <p><strong>${app.name}</strong> - ${app.department}</p>
            <p>${app.date}</p>
        `;

        appointmentList.appendChild(item);
    });
}

if (appointmentForm) {
    appointmentForm.addEventListener("submit", event => {
        event.preventDefault();

        const appointment = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            department: document.getElementById("department").value,
            date: document.getElementById("date").value
        };

        if (!appointment.department) {
            appointmentMessage.textContent = "Please select a department.";
            return;
        }

        saveAppointment(appointment);
        displayAppointments();

        appointmentMessage.textContent = `Appointment booked successfully for ${appointment.name}!`;
        appointmentForm.reset();
    });

    displayAppointments();
}

// ===============================
// NEWS SECTION
// ===============================
document.addEventListener("DOMContentLoaded", () => {
    const newsContainer = document.getElementById("newsContainer");

    if (newsContainer) {
        const newsItems = [
            {
                title: "MRI Diagnostic Services Expanded",
                content: "UCTH has upgraded its MRI facilities with advanced imaging technology to improve diagnostic accuracy and patient care."
            },
            {
                title: "ERCP Services Now Available",
                content: "Our Gastroenterology Unit now offers ERCP for the treatment of bile duct stones, strictures, and pancreatic disorders."
            },
            {
                title: "Introduction of Endoscopic Ultrasound (EUS)",
                content: "UCTH now provides EUS for detailed imaging of the pancreas and surrounding organs, including biopsy capabilities."
            },
            {
                title: "Advanced Laparoscopic Surgery Services",
                content: "Minimally invasive laparoscopic procedures are now available for faster recovery and reduced hospital stay."
            },
            {
                title: "Successful Open Heart Surgery Program",
                content: "The Cardiothoracic Unit has successfully launched open heart surgery services with a multidisciplinary specialist team."
            }
        ];

        // Populate news
        newsItems.forEach((item, index) => {
            const newsCard = document.createElement("div");
            newsCard.className = "news-item";

            newsCard.innerHTML = `
                <button class="news-btn" data-index="${index}">
                    ${item.title}
                </button>
                <div class="news-content" id="news-${index}">
                    <p>${item.content}</p>
                </div>
            `;

            newsContainer.appendChild(newsCard);
        });

        // Accordion toggle
        document.querySelectorAll(".news-btn").forEach(btn => {
            btn.addEventListener("click", () => {
                const index = btn.dataset.index;
                const content = document.getElementById(`news-${index}`);

                // Close all others
                document.querySelectorAll(".news-content").forEach(c => {
                    if (c !== content) c.style.display = "none";
                });

                // Toggle clicked
                content.style.display = content.style.display === "block" ? "none" : "block";
            });
        });
    }

    // ===============================
    // CONTACT FORM FUNCTIONALITY
    // ===============================
    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        const successMessage = document.createElement("p");
        successMessage.classList.add("form-success");
        contactForm.appendChild(successMessage);

        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const name = contactForm.querySelector("input[name='name']").value.trim();
            const email = contactForm.querySelector("input[name='email']").value.trim();
            const message = contactForm.querySelector("textarea[name='message']").value.trim();

            if (!name || !email || !message) {
                successMessage.textContent = "Please fill in all fields.";
                successMessage.style.color = "red";
                return;
            }

            const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
            if (!email.match(emailPattern)) {
                successMessage.textContent = "Please enter a valid email address.";
                successMessage.style.color = "red";
                return;
            }

            successMessage.textContent = "✅ Thank you! Your message has been sent successfully.";
            successMessage.style.color = "green";

            contactForm.reset();
        });
    }
});
