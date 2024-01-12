const p = document.querySelector("#outputParagraph")
document.querySelector("#submit").addEventListener("click",santaThingz)
santasImega = document.querySelector("#santasImega")

function santaThingz() {
  const guess = document.querySelector("#guess").value;

  const santasGuess = Math.ceil(Math.random()*5);
  if (santasGuess == guess) {
    p.innerHTML = 'RIGHT, santa was in fact thinking about number ' + santasGuess + '!!'
    santasImega.src = '/images/verry happy santa.avif'
  } else {
    p.innerHTML = 'WRONG, santa was thinking about number ' +  santasGuess + '!!'
    santasImega.src = "/images/verry angry santa.jpg"

  }
} 
