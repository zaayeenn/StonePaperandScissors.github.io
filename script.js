const computer = document.querySelector(".computer img");
const player = document.querySelector(".player img");
const computerPoints = document.querySelector(".computerPoints");
const playerPoints = document.querySelector(".playerPoints");
const options = document.querySelectorAll(".options button");

options.forEach((option) => {
    option.addEventListener("click", () => {
        computer.classList.add("shakeComputer");
        player.classList.add("shakePlayer");

        setTimeout(() => {
            computer.classList.remove("shakeComputer");
            player.classList.remove("shakePlayer");

            const playerChoice = option.innerHTML.toUpperCase();
            const computerChoices = ["STONE", "PAPER", "SCISSORS"];
            const computerChoice = computerChoices[Math.floor(Math.random() * 3)];

            // Set image sesuai pilihan
            player.src = "./images/" + playerChoice.toLowerCase() + "Player.png";
            computer.src = "./images/" + computerChoice.toLowerCase() + "Computer.png";

            // Hitung skor
            let cPoints = parseInt(computerPoints.innerHTML);
            let pPoints = parseInt(playerPoints.innerHTML);

            if (playerChoice === "STONE") {
                if (computerChoice === "PAPER") cPoints++;
                else if (computerChoice === "SCISSORS") pPoints++;
            } else if (playerChoice === "PAPER") {
                if (computerChoice === "SCISSORS") cPoints++;
                else if (computerChoice === "STONE") pPoints++;
            } else if (playerChoice === "SCISSORS") {
                if (computerChoice === "STONE") cPoints++;
                else if (computerChoice === "PAPER") pPoints++;
            }

            computerPoints.innerHTML = cPoints;
            playerPoints.innerHTML = pPoints;

        }, 900);
    });
});
