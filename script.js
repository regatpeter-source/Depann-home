/* ============================
   DEPANN'HOME
   script.js V2
============================ */

/* =====================================
   Défilement fluide
===================================== */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


/* =====================================
   Ombre du header
===================================== */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.20)";

    } else {

        header.style.boxShadow = "none";

    }

});


/* =====================================
   Apparition progressive
===================================== */

const elements = document.querySelectorAll(

    ".service-card,\
     .about-item,\
     .zone-map,\
     .zone-list,\
     .contact-info,\
     form,\
     .section-title"

);

elements.forEach(el => {

    el.style.opacity = "0";
    el.style.transform = "translateY(45px)";
    el.style.transition = "all .8s ease";

});

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";

            observer.unobserve(entry.target);

        }

    });

},{
    threshold:0.15
});

elements.forEach(el=>observer.observe(el));


/* =====================================
   Bouton retour en haut
===================================== */

const topButton = document.createElement("button");

topButton.innerHTML = "▲";

topButton.id = "backToTop";

document.body.appendChild(topButton);

Object.assign(topButton.style,{

    position:"fixed",
    right:"25px",
    bottom:"25px",
    width:"55px",
    height:"55px",
    borderRadius:"50%",
    border:"none",
    background:"#47b649",
    color:"#fff",
    fontSize:"22px",
    cursor:"pointer",
    display:"none",
    zIndex:"9999",
    boxShadow:"0 10px 25px rgba(0,0,0,.25)",
    transition:"0.3s"

});

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        topButton.style.display="block";

    }else{

        topButton.style.display="none";

    }

});

topButton.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


/* =====================================
   Formulaire de contact
   Ouvre la messagerie du visiteur
===================================== */

const form = document.getElementById("contactForm");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const nom = document.getElementById("nom").value.trim();
        const telephone = document.getElementById("telephone").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        const sujet = "Demande de contact - Depann'Home";

        const corps =
`Bonjour,

Je souhaite vous contacter.

Nom : ${nom}

Téléphone : ${telephone}

E-mail : ${email}

Message :

${message}`;

        window.location.href =
            `mailto:depannhome44@gmail.com?subject=${encodeURIComponent(sujet)}&body=${encodeURIComponent(corps)}`;

    });

}
