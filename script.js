// Replace these with your actual app store links
const APP_STORE_URL = 'https://apps.apple.com/app/id6759267054';
const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=yar.tme.meetcounts';

// Update the store links when the page loads
document.addEventListener('DOMContentLoaded', function() {
    // Set App Store link
    const appStoreLink = document.getElementById('app-store-link');
    if (appStoreLink) {
        appStoreLink.href = APP_STORE_URL;
    }

    // Set Play Store link
    const playStoreLink = document.getElementById('play-store-link');
    if (playStoreLink) {
        playStoreLink.href = PLAY_STORE_URL;
    }

    // Add smooth scrolling
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
});
