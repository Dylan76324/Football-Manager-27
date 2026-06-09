function startGame() {
    const team = document.getElementById("teamSelect").value;

    if (team === "") {
        document.getElementById("output").innerText = "Please choose a team first.";
        return;
    }

    document.getElementById("output").innerText = "You are now managing " + team + "!";
}

