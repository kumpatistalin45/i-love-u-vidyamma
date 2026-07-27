// ===============================
// Background Music Controller
// ===============================

const bgMusic = document.getElementById("bgMusic");

// Determine current page filename (e.g., home.html)
const currentPage = location.pathname.split('/').pop();
const isHome = !currentPage || currentPage === 'home.html' || currentPage === 'index.html';

// Restore previous music position on non-home pages
const savedTime = localStorage.getItem("bgMusicTime");
const wasPlaying = localStorage.getItem("bgMusicPlaying");

if (!isHome) {
    if (savedTime !== null) {
        bgMusic.currentTime = parseFloat(savedTime);
    }

    // If music was playing previously, resume
    if (wasPlaying === "true") {
        bgMusic.play().catch(() => {});
    }
} else {
    // When opening the home page, start from the beginning
    try { bgMusic.currentTime = 0; } catch(e){}
    // Try to play; if autoplay blocked, click handler below will take over
    bgMusic.play().catch(() => {});
}

// Ensure music can start on user interaction if autoplay is blocked
document.addEventListener("click", function startMusic() {
    if (bgMusic.paused) {
        bgMusic.play().catch(() => {});
    }
    document.removeEventListener("click", startMusic);
});

// Save music position every second
setInterval(() => {
    localStorage.setItem("bgMusicTime", bgMusic.currentTime);
    localStorage.setItem("bgMusicPlaying", (!bgMusic.paused).toString());
}, 1000);

// Save before page refresh or navigation
window.addEventListener("beforeunload", () => {
    localStorage.setItem("bgMusicTime", bgMusic.currentTime);
    localStorage.setItem("bgMusicPlaying", (!bgMusic.paused).toString());
});

// ===============================
// Video Integration (Only if Page has Video)
// ===============================

const video = document.getElementById("memoryVideo");

if (video) {

    // Pause BGM when video starts
    video.addEventListener("play", () => {
        bgMusic.pause();
    });

    // Resume BGM when video ends
    video.addEventListener("ended", () => {
        bgMusic.play().catch(() => {});
    });

    // Resume BGM if user pauses video
    video.addEventListener("pause", () => {
        if (video.currentTime < video.duration) {
            bgMusic.play().catch(() => {});
        }
    });

}