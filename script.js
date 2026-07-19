// Détection du scroll pour ajouter un effet d'ombre sur le menu de navigation
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Effet interactif subtil au survol des cartes d'expertises
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.borderColor = 'var(--secondary)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.borderColor = 'var(--gray-light)';
    });
});
