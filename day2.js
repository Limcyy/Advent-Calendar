const p = document.querySelector("#haf")
const submit = document.querySelector("#submit")

submit.addEventListener("click", whoWins)

function whoWins() {
    const player1 = document.querySelector("#player1").value
    const player2 = document.querySelector("#player2").value
    const player3 = document.querySelector("#player3").value
    const player4 = document.querySelector("#player4").value
    const player5 = document.querySelector("#player5").value
    let winner = ""
    // Generate a random number between 0 and 1
    const randomValue = Math.random();
    console.log(randomValue)

    // If the random number is less than 0.5, return 'a', otherwise return 'b'
    if (randomValue < 0.2) {
      winner = player1
    } else if (randomValue < 0.4) {
        winner = player2
    } else if (randomValue < 0.6) {
        winner = player3
    } else if (randomValue < 0.8) {
        winner = player4
    } else {
      winner = player5
    }
    console.log("miner")
    p.innerHTML = winner + ', ' + 'is the WINNER'
}
 