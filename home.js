// home.js
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    const navLinks = document.querySelectorAll('.nav-menu a, .mobile-menu a');

    // Hamburger menu toggle
    hamburger.addEventListener('click', () => {
        mobileMenu.classList.toggle('open');
        hamburger.classList.toggle('open');
    });

    // Active link logic
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Remove active class from all links
            navLinks.forEach(item => item.classList.remove('active'));
            
            // Add active class to the clicked link
            link.classList.add('active');
            
            // Close mobile menu after clicking a link
            mobileMenu.classList.remove('open');
            hamburger.classList.remove('open');
        });
    });

    // Set initial active link based on current page URL
    const currentPath = window.location.pathname.split('/').pop();
    if (currentPath === '' || currentPath === 'index.html') {
        document.querySelector('.nav-menu a[href="index.html"]').classList.add('active');
    } else {
        const currentLink = document.querySelector(`.nav-menu a[href="${currentPath}"]`);
        if (currentLink) {
            currentLink.classList.add('active');
        }
    }
});

function createCollectionCard(image, title, description) {
  const card = document.createElement('div');
  card.classList.add('collection-card');
  card.innerHTML = `
    <img src="${image}" alt="${title}">
    <h3>${title}</h3>
    <p>${description}</p>
  `;
  return card;
}

function displayCollections() {
  const collectionsGrid = document.getElementById('collectionsGrid');
  const collections = [
    {
      title: 'Rivaah',
      description: 'Bridal masterpieces for the modern bride.',
      image: 'https://images.unsplash.com/photo-1617097309969-209d292743ff?w=400&h=400&fit=crop'
    },
    {
      title: 'Mia',
      description: 'Lightweight jewelry for the everyday woman.',
      image: 'https://images.unsplash.com/photo-1599643478518-9e6a9d7d6c6c?w=400&h=400&fit=crop'
    },
    {
      title: 'Divyam',
      description: 'Divine jewelry inspired by traditional art.',
      image: 'https://images.unsplash.com/photo-1582213782179-1e76d3f3a53d?w=400&h=400&fit=crop'
    }
  ];

  collections.forEach(collection => {
    collectionsGrid.appendChild(createCollectionCard(collection.image, collection.title, collection.description));
  });
}

document.addEventListener('DOMContentLoaded', () => {
  displayCollections();
});

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent the default form submission

            const formMessage = document.createElement('p');
            formMessage.textContent = 'Thank you for your message! We will get back to you shortly.';
            formMessage.style.color = 'green';
            formMessage.style.marginTop = '1rem';
            formMessage.style.fontWeight = 'bold';

            contactForm.appendChild(formMessage);
            contactForm.reset(); // Clear the form fields
        });
    }
});