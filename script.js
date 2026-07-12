/* ============================
   DEPANN'HOME
   script.js
============================ */

// Défilement fluide pour les liens du menu
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


// Animation d'apparition des sections au défilement
const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {
    threshold: 0.15
});


document.querySelectorAll(".card, .about-grid div, .review, form").forEach(el => {

    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "all 0.7s ease";

    observer.observe(el);

});


// Effet sur le header lors du défilement
const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.15)";

    } else {

        header.style.boxShadow = "0 2px 15px rgba(0,0,0,.08)";

    }

});


// Bouton du formulaire (démo)
const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        alert(
            "Merci pour votre demande !\n\nNous vous recontacterons rapidement."
        );

        form.reset();

    });

}
