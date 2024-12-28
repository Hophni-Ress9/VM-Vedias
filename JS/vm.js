document.addEventListener('DOMContentLoaded', (event) => {
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        section.addEventListener('mouseover', () => {
            section.style.transition = 'transform 0.3s ease';
            section.style.transform = 'scale(1.05)';
        });

        section.addEventListener('mouseout', () => {
            section.style.transition = 'transform 0.3s ease';
            section.style.transform = 'scale(1)';
        });
    });
});
