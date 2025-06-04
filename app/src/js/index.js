console.log('JavaScript is working!');

// Navigation scroll behavior
const navbar = document.getElementById('navbar');
const navLogo = document.getElementById('navLogo');
let lastScrollY = window.scrollY;

// Load YouTube API
let tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('heroVideo', {
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    event.target.playVideo();
    event.target.mute(); // Ensure video is muted for autoplay
}

function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.ENDED) {
        player.playVideo(); // Replay when ended
    }
}

const updateNavbar = () => {
    if (window.scrollY > 50) {
        navbar.classList.add('bg-white/80', 'shadow-md');
        navbar.classList.remove('bg-transparent');
        // Change logo to grey version
        navLogo.src = '/images/Bluepartner-Logo-Grey.png';
        // Change text color when background is white
        document.querySelectorAll('#navbar a').forEach(link => {
            link.classList.remove('text-white', 'hover:text-blue-200');
            link.classList.add('text-gray-700', 'hover:text-blue-600');
        });
    } else {
        navbar.classList.remove('bg-white/80', 'shadow-md');
        navbar.classList.add('bg-transparent');
        // Change logo back to white version
        navLogo.src = '/images/BP_white-130x62.png';
        // Change text color when background is transparent
        document.querySelectorAll('#navbar a').forEach(link => {
            link.classList.remove('text-gray-700', 'hover:text-blue-600');
            link.classList.add('text-white', 'hover:text-blue-200');
        });
    }
};

// Initial call to set correct state
updateNavbar();

// Add scroll event listener
window.addEventListener('scroll', updateNavbar);

// Intersection Observer for fade-in animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeIn');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    section.classList.add('opacity-0');
    observer.observe(section);
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add logo carousel animation styles
const style = document.createElement('style');
style.textContent = `
  @keyframes logo-scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }

  .animate-logo-scroll {
    animation: logo-scroll 70s linear infinite;
    will-change: transform;
    backface-visibility: hidden;
    -webkit-font-smoothing: antialiased;
  }

  .animate-logo-scroll:hover {
    animation-play-state: paused;
  }

  /* Add a wrapper to prevent layout shifts */
  .logo-carousel-wrapper {
    overflow: hidden;
    position: relative;
    width: 100%;
    transform: translateZ(0);
    isolation: isolate;
    padding: 0;
    margin: 0;
  }

  /* Ensure the carousel doesn't affect other elements */
  .logo-carousel-wrapper::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 100px;
    background: linear-gradient(to right, transparent, white);
    pointer-events: none;
    z-index: 1;
  }

  .logo-carousel-wrapper::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100px;
    background: linear-gradient(to left, transparent, white);
    pointer-events: none;
    z-index: 1;
  }
`;
document.head.appendChild(style);

// Automatically update copyright year
const copyrightElement = document.getElementById('copyright-year');
if (copyrightElement) {
  const currentYear = new Date().getFullYear();
  // Assuming the format is "© YYYY Name. All rights reserved."
  // We replace the hardcoded year (2025) with the current year
  copyrightElement.textContent = copyrightElement.textContent.replace('2025', currentYear);
}
