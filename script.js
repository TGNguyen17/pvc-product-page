document.addEventListener('DOMContentLoaded', function() {
    const navButtons = document.querySelectorAll('.nav-btn');
    const sections = document.querySelectorAll('.product-section');

    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and sections
            navButtons.forEach(btn => btn.classList.remove('active'));
            sections.forEach(section => section.classList.remove('active'));

            // Add active class to clicked button
            button.classList.add('active');

            // Show corresponding section
            const sectionId = button.getAttribute('data-section');
            document.getElementById(sectionId).classList.add('active');
        });
    });
}); 