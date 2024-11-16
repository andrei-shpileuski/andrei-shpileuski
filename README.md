<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
<div style="display: flex; flex-direction: column; align-items: flex-start; justify-content: center">
<h1 style="margin: 0">Andrei Shpileuski</h1>
<h3 style="margin: 0">Frontend Developer (Angular) ♦ TM ♦ TL</h3>
</div>
<hr>
<div>
<span>Responsible for ArtForIntrovert (<a href="https://new.artforintrovert.ru">RU version</a> | <a href="https://new.artforintrovert.com">En version</a>)</span>
<br>
<span>Commercial experience - <span id="experience" style="font-family: 'Courier New', monospace;">calculating...</span></span>
<br>
<span>More than 10 commercial projects: BI system, B2B auction, AR game, Education platform, Delivery platform, CMS, CRM, Internet banking, etc.</span>
</div>
<hr>
<div>
<span><b>Web Technologies: </b>HTML</span>
<br>
<span><b>Styling: </b>CSS, SCSS/SASS, Tailwind CSS, BEM methodology</span>
<br>
<span><b>UI Libraries: </b>PrimeNG, Angular material, Nebular, Taiga UI</span>
<br>
<span><b>Programming Languages: </b>JavaScript, TypeScript</span>
<br>
<span><b>Frameworks and Libraries: </b>Angular, Angular SSR, RxJS, NgRx, NGXS</span>
<br>
<span><b>Version Control and Hosting: </b>GIT, GitHub, Bitbucket, GitLab</span>
<hr>
<div style="display: flex; flex-direction: row; align-items: center; justify-content: flex-start; gap: 12px">
<a href="mailto:shpilevskiy.aa@gmail.com"><img style="height: 40px" src="/assets/images/socials/gmail.png" alt=""></a>
<a href="https://www.linkedin.com/in/andrei-shpileuski/"><img style="height: 34px" src="/assets/images/socials/linked-in.png" alt=""></a>
<a href="https://t.me/andrei_shpileuski"><img style="height: 34px" src="/assets/images/socials/telegram.png" alt=""></a>
</div>
</div>
<script>
    const START_DATE = "2022-03-01";
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
    document.addEventListener("DOMContentLoaded", () => {
        document.getElementById("experience").textContent = calculateWorkExperience(START_DATE);
    });
</script>
</body>
</html>
