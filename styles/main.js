// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor behavior
        const targetId = this.getAttribute('href').substring(1); // Get target section ID
        const targetSection = document.getElementById(targetId); // Find the target section
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the section
        }
    });
});

// Dynamic Content Loading (Example: Skills)
fetch('data/skills.json') // Load skills data from JSON file
    .then(response => response.json()) // Parse JSON
    .then(data => {
        const skillsGrid = document.querySelector('.skills-grid'); // Find the skills grid
        if (skillsGrid) {
            skillsGrid.innerHTML = ''; // Clear existing content
            data.forEach(skill => {
                // Create a new skill item
                const skillItem = document.createElement('div');
                skillItem.classList.add('skill-item');
                skillItem.textContent = skill.name;
                skillsGrid.appendChild(skillItem); // Add skill to the grid
            });
        }
    })
    .catch(error => console.error('Error loading skills data:', error));

// Form Submission Handling
const contactForm = document.getElementById('contact-form'); // Find the contact form
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent default form submission

        // Get form data
        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        // Validate form data
        if (!name || !email || !message) {
            alert('Please fill out all fields.');
            return;
        }

        // Simulate form submission (replace with actual API call)
        console.log('Form submitted:', { name, email, message });
        alert('Thank you for reaching out! I will get back to you soon.');

        // Reset the form
        this.reset();
    });
}

// Lightbox for Project Images
document.querySelectorAll('.project-photos img').forEach(image => {
    image.addEventListener('click', function () {
        // Create a lightbox overlay
        const lightbox = document.createElement('div');
        lightbox.style.position = 'fixed';
        lightbox.style.top = '0';
        lightbox.style.left = '0';
        lightbox.style.width = '100%';
        lightbox.style.height = '100%';
        lightbox.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        lightbox.style.display = 'flex';
        lightbox.style.justifyContent = 'center';
        lightbox.style.alignItems = 'center';
        lightbox.style.zIndex = '1000';

        // Create the lightbox image
        const lightboxImage = document.createElement('img');
        lightboxImage.src = this.src;
        lightboxImage.style.maxWidth = '90%';
        lightboxImage.style.maxHeight = '90%';
        lightboxImage.style.borderRadius = '10px';

        // Add image to lightbox
        lightbox.appendChild(lightboxImage);

        // Close lightbox on click
        lightbox.addEventListener('click', () => {
            document.body.removeChild(lightbox);
        });

        // Add lightbox to the body
        document.body.appendChild(lightbox);
    });
});

// Toggle Certificates (Optional)
document.querySelectorAll('.certificate-grid img').forEach(certificate => {
    certificate.addEventListener('click', function () {
        // Open the certificate in a new tab
        window.open(this.parentElement.href, '_blank');
    });
});
