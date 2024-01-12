const p = document.querySelector("#outputParagraph")
document.querySelector("#submit").addEventListener("click",santaThingz)
santasImega = document.querySelector("#santasImega")

function santaThingz() {
  const guess = document.querySelector("#guess").value;

  const santasGuess = Math.ceil(Math.random()*5);
  if (santasGuess == guess) {
    p.innerHTML = 'RIGHT, santa was in fact thinking about number ' + santasGuess + '!!'
    santasImega.src = 'https://img.freepik.com/premium-vector/happy-boxing-day-cute-funny-santa-claus-with-red-boxing-glove-excited-isolated-white-background-santa-clause-winter-new-year-holidays-happy-santa-claus-cartoon-character_209425-496.jpg?w=2000'
  } else {
    p.innerHTML = 'WRONG, santa was thinking about number ' +  santasGuess + '!!'
    santasImega.src = "https://banner2.cleanpng.com/20180211/ipq/kisspng-santa-claus-clip-art-angry-santa-claus-vector-5a80a5df092e31.8097234915183805110376.jpg"

  }
} 
