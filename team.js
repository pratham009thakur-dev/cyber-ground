document.addEventListener("DOMContentLoaded", loadTeams);

function loadTeams() {
    let teams = JSON.parse(localStorage.getItem("teams")) || [];
    let teamList = document.getElementById("team-list");
    teamList.innerHTML = "";

    teams.forEach((team) => {
        let li = document.createElement("li");
        li.textContent = team;
        teamList.appendChild(li);
    });
}

function createTeam() {
    let teamName = document.getElementById("team-name").value;
    if (teamName.trim() !== "") {
        let teams = JSON.parse(localStorage.getItem("teams")) || [];
        teams.push(teamName);
        localStorage.setItem("teams", JSON.stringify(teams));
        loadTeams();
    }
}
const teamList = document.getElementById("team-list");

function createTeam() {
    const teamName = document.getElementById("team-name").value.trim();
    const teamList = document.getElementById("team-list").getElementsByTagName("li");

    if (teamName === "") {
        alert("Please enter a team name!");
        return;
    }

    // Check if team already exists
    for (let i = 0; i < teamList.length; i++) {
        if (teamList[i].innerText.includes(teamName)) {
            alert("Team name already exists!");
            return;
        }
    }

    // Create new team
    const li = document.createElement("li");
    li.innerHTML = `${teamName} <button onclick="joinTeam('${teamName}')">Join</button>`;
    document.getElementById("team-list").appendChild(li);
    document.getElementById("team-name").value = ""; // Clear input field
}
window.onload = function () {
    localStorage.removeItem("teams"); // Clears stored team names
};

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".join-btn").forEach(button => {
        button.addEventListener("click", function () {
            let userName = prompt("Enter your name to join the team:");

            if (userName) {
                let teamName = this.parentElement.querySelector(".team-name").textContent.trim();
                alert(`${userName} joined ${teamName}!`);
            } else {
                alert("You must enter a name to join!");
            }
        });
    });
});
