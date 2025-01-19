document.addEventListener('DOMContentLoaded', () => {
    const appsToggle = document.getElementById('appsToggle');
    const appsDropdown = document.getElementById('appsDropdown');
    const searchInput = document.querySelector('.search-input');

    // Toggle apps dropdown with animation
    appsToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        if (appsDropdown.style.display === 'none' || !appsDropdown.style.display) {
            appsDropdown.style.display = 'block';
            appsDropdown.style.opacity = '0';
            setTimeout(() => {
                appsDropdown.style.opacity = '1';
            }, 50);
        } else {
            appsDropdown.style.opacity = '0';
            setTimeout(() => {
                appsDropdown.style.display = 'none';
            }, 150);
        }
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!appsDropdown.contains(e.target) && e.target !== appsToggle) {
            appsDropdown.style.opacity = '0';
            setTimeout(() => {
                appsDropdown.style.display = 'none';
            }, 150);
        }
    });

    // Search functionality
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const searchQuery = searchInput.value.trim();
            if (searchQuery) {
                window.location.href = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
            }
        }
    });

    // Voice search button
    document.querySelector('.voice-search').addEventListener('click', () => {
        if ('webkitSpeechRecognition' in window) {
            const recognition = new webkitSpeechRecognition();
            recognition.continuous = false;
            recognition.interimResults = false;

            recognition.onresult = (event) => {
                const text = event.results[0][0].transcript;
                searchInput.value = text;
            };

            recognition.start();
        } else {
            alert('Speech recognition is not supported in this browser.');
        }
    });

    // I'm Feeling Lucky button
    document.querySelectorAll('.search-buttons button')[1].addEventListener('click', () => {
        const searchQuery = searchInput.value.trim();
        if (searchQuery) {
            window.location.href = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}&btnI`;
        } else {
            window.location.href = 'https://www.google.com/doodles';
        }
    });
});

