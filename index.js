
// Theme Switching
document.querySelectorAll('.dropdown-item[data-theme]').forEach(theme => {
    theme.addEventListener('click', (e) => {
        e.preventDefault();
        const selectedTheme = theme.getAttribute('data-theme');
        document.body.setAttribute('data-theme', selectedTheme);
        localStorage.setItem('theme', selectedTheme);
    });
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Load saved theme
const savedTheme = localStorage.getItem('theme') || 'light';
document.body.setAttribute('data-theme', savedTheme);
