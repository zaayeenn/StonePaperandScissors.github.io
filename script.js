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

            player.src = "./images/" + playerChoice.toLowerCase() + "Player.png";
            computer.src = "./images/" + computerChoice.toLowerCase() + "Computer.png";

            let cPoints = parseInt(computerPoints.innerHTML);
            let pPoints = parseInt(playerPoints.innerHTML);

            let result = "";

            if (playerChoice === computerChoice) {
                result = "DRAW";
            } else if (
                (playerChoice === "STONE" && computerChoice === "SCISSORS") ||
                (playerChoice === "PAPER" && computerChoice === "STONE") ||
                (playerChoice === "SCISSORS" && computerChoice === "PAPER")
            ) {
                pPoints++;
                playerPoints.innerHTML = pPoints;
                result = "WIN";
            } else {
                cPoints++;
                computerPoints.innerHTML = cPoints;
                result = "LOSE";
            }

            // Tampilkan alert + animasi berdasarkan hasil
            if (result === "WIN") {
                Swal.fire({
                    title: "🎉 YOU WIN!",
                    text: "Great move!",
                    icon: "success",
                    timer: 1500,
                    showConfirmButton: false,
                    didOpen: () => {
                        confetti({
                            particleCount: 150,
                            spread: 70,
                            origin: { y: 0.6 }
                        });
                    }
                });
            } else if (result === "LOSE") {
                Swal.fire({
                    title: "😢 YOU LOSE!",
                    text: "Try again!",
                    icon: "error",
                    timer: 1500,
                    showConfirmButton: false,
                });
            } else {
                Swal.fire({
                    title: "😐 DRAW!",
                    text: "It's a tie!",
                    icon: "info",
                    timer: 1500,
                    showConfirmButton: false
                });
            }
        }, 900);

    });
});
