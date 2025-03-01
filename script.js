const toggleButton = document.getElementById('toggle-dark-mode');
const body = document.body;
const header = document.querySelector('header');

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("aboutBtn").addEventListener("click", function () {
        window.location.href = "about.html";
    });

    document.getElementById("statsBtn").addEventListener("click", function () {
        window.open("https://www.cricbuzz.com/profiles/576/rohit-sharma", "_blank");
    });

    document.getElementById("wikiBtn").addEventListener("click", function () {
        window.open("https://en.wikipedia.org/wiki/Rohit_Sharma", "_blank");
    });

    document.getElementById("contactBtn").addEventListener("click", function () {
        window.open("https://www.instagram.com/_kartikay.rattan28/", "_blank");
    });

});
let homeBtn = document.getElementById("HomeBtn");

    if (homeBtn) {
        homeBtn.addEventListener("click", function () {
            window.location.href = "index.html";
        });
    }
// Get the elements
const vsCodeText = document.getElementById('vsCodeText');
const popupModal = document.getElementById('popupModal');
const closePopup = document.getElementById('closePopup');

// Show the popup when the text is clicked
vsCodeText.addEventListener('click', () => {
    popupModal.style.display = 'block';
});

// Close the popup when the close button is clicked
closePopup.addEventListener('click', () => {
    popupModal.style.display = 'none';
});

// Close the popup if user clicks outside of the popup content
window.addEventListener('click', (event) => {
    if (event.target === popupModal) {
        popupModal.style.display = 'none';
    }
});
// Smooth scrolling for navigation links
document.querySelectorAll('.nav-btn').forEach(button => {
    button.addEventListener('click', function(event) {
        const targetId = this.id.toLowerCase();
        const targetSection = document.getElementById(targetId);
        window.scrollTo({
            top: targetSection.offsetTop - 50,  // Offset for sticky header
            behavior: 'smooth'
        });
    });
});

// Open Lightbox
function openLightbox(img) {
    document.getElementById("lightbox").style.display = "flex";
    document.getElementById("lightbox-img").src = img.src;
}

// Close Lightbox
function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

// Modal Popup - Show on Page Load
window.onload = function() {
    const popupModal = document.getElementById('popupModal');
    popupModal.style.display = 'flex';

    const closePopup = document.getElementById('closePopup');
    closePopup.addEventListener('click', function() {
        popupModal.style.display = 'none';
    });

    // Close the popup if the user clicks outside of it
    window.onclick = function(event) {
        if (event.target == popupModal) {
            popupModal.style.display = 'none';
        }
    };
};

if (localStorage.getItem('dark-mode') === 'true') {
    body.classList.add('dark-mode');
    header.classList.add('dark-mode');
}

// Toggle Dark Mode
toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    header.classList.toggle('dark-mode');
    
    // Save mode preference to local storage
    localStorage.setItem('dark-mode', body.classList.contains('dark-mode'));
});