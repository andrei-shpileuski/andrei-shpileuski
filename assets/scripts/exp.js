const START_DATE = "2021-03-01";

function calculateWorkExperience(startDate) {
    const start = new Date(startDate);
    const now = new Date();

    let diff = now - start;

    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    diff -= years * (1000 * 60 * 60 * 24 * 365);

    const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
    diff -= months * (1000 * 60 * 60 * 24 * 30);

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    diff -= days * (1000 * 60 * 60 * 24);

    const hours = Math.floor(diff / (1000 * 60 * 60));
    diff -= hours * (1000 * 60 * 60);

    const minutes = Math.floor(diff / (1000 * 60));
    diff -= minutes * (1000 * 60);

    const seconds = Math.floor(diff / 1000);

    return `${years} yr ${months} m ${days} d ${hours} h ${minutes} min ${seconds} sec`;
}

function updateExperience() {
    document.getElementById("experience").textContent = calculateWorkExperience(START_DATE);
}

setInterval(updateExperience, 1000);
updateExperience();