function registerTournament() {
    let playerName = document.getElementById("player-name").value;
    if (playerName.trim() !== "") {
        alert(playerName + ", you are successfully registered for the tournament!");
        document.getElementById("player-name").value = "";
    }
}
