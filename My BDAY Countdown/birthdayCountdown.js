
// birthdayCountdown.js

// Function to calculate the next birthday date
function getNextBirthday() {
    const now = new Date();
    const month = 4; // May (0-based index)
    const day = 20;
    let year = now.getFullYear();

    const birthdayThisYear = new Date(year, month, day);
    if (now > birthdayThisYear) {
        year++;
    }

    return new Date(year, month, day);
}

// Function to update the countdown
function updateCountdown() {
    const now = new Date();
    const nextBirthday = getNextBirthday();
    const diff = nextBirthday - now;

    if (diff <= 0) {
        document.getElementById("countdown").innerText = "Happy Birthday!";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("countdown").innerText = 
        \`\${days}d \${hours}h \${minutes}m \${seconds}s until My BDAY\`;

    // Update every second
    setTimeout(updateCountdown, 1000);
}

// Start the countdown when the page loads
document.addEventListener("DOMContentLoaded", updateCountdown);
