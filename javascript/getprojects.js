//api.github doesnt support repo colours so.
const languageColors = {
    "JavaScript": "#f1e05a", // kind of dark yellow
    "Python": "#3d689e", // blue
    "Java": "#b07219", // orange
    "C++": "#f34b7d", // pink/red
    "Ruby": "#701516", // red ( i think)
    "C#": "#178600",   // Dark Green for C#
    "CSS": "#563d7c", // chatgpt said its dark purple now
    "Html": "#e34c26",
    "Go": "#00ffff",
    "TypeScript": "#0070ff",
    "Powershell": "012456",
    "Kotlin": "A97BFF ",
};




fetch("https://api.github.com/users/Jbziscool/repos")
.then((response) => response.json())
.then((data) => {
    data.forEach((repo) => {
    const language = repo.language || '🗿No Language';
    const languageColor = languageColors[language] || '#888888';

    document.querySelector(".projects").innerHTML += `
        <div class="project">
        <div class="project-title">
            <a href="${repo.html_url}">${repo.name}</a>
        </div>
        <div class="project-language">
            <div class="project-language-color" style="background-color: ${languageColor};"></div>
            <div class="project-language-name">${language}</div>
        </div>
        </div>`;
    });
});
