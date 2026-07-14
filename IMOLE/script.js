// --- A. ANIMATION DES COMPTEURS ---
// Cible tous les éléments avec la classe .counter
gsap.utils.toArray(".counter").forEach(counter => {
    const target = +counter.getAttribute('data-target'); // Récupère le nombre (ex: 98)
    
    gsap.to(counter, {
        scrollTrigger: {
            trigger: counter,
            start: "top 90%", // Déclenche quand le chiffre entre dans l'écran
        },
        innerText: target,
        duration: 2.5,
        snap: { innerText: 1 }, // Force des nombres entiers
        ease: "power3.out",
        onUpdate: function() {
            // Cette partie est optionnelle mais assure un rendu propre
            counter.innerHTML = Math.ceil(counter.innerText);
        }
    });
});

// --- B. ANIMATION DE LA COURBE SVG ---
const path = document.querySelector(".stats-path");

if (path) {
    // 1. Calculer la longueur réelle de TON tracé SVG
    const pathLength = path.getTotalLength();
    
    // 2. Configurer le tracé pour qu'il soit invisible (offset = longueur)
    gsap.set(path, { 
        strokeDasharray: pathLength, 
        strokeDashoffset: pathLength,
        opacity: 1 // On le rend visible dès que l'animation commence
    });

    // 3. Animation du "dessin" de la ligne
    gsap.to(path, {
        strokeDashoffset: 0,
        duration: 3,
        ease: "power2.inOut",
        scrollTrigger: {
            trigger: ".stats-path",
            start: "top 80%", // Démarre l'animation au scroll
        }
    });
}

// --- C. RAPPEL : ANIMATION DU HERO (Si nécessaire) ---
const tl = gsap.timeline();
tl.to("#hero-title, #hero-desc, #hero-badge, #hero-btns, #hero-visual", {
    opacity: 1,
    y: 0,
    stagger: 0.2,
    duration: 1,
    ease: "power4.out"
});