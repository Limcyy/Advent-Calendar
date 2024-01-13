document.querySelector("#submit").addEventListener("click",rizzScale)
const p = document.querySelector("#outputParagraph")
const p2 = document.querySelector("#outputParagraph2")
santasImega = document.querySelector("#santasImega")

function rizzScale() {

  const playerName = document.querySelector("#playerName").value
  const Zcale = Math.floor(Math.random() * 100)
  let OutpuMesssage = (playerName)

  if (Zcale < 20){
    OutpuMesssage = 'you are NOT a good boy/girl D:'
    santasImega.src="images/angr santa.jpg"
  }
  else if (Zcale < 40){
    OutpuMesssage = 'all good, you will surely be better next year'
    santasImega.src="images/hopeless santa.jpg"
  }
  else if (Zcale < 60){
    OutpuMesssage = 'not too bad'
    santasImega.src="images/noy yoo bad santa.jpg"
  }
  else if (Zcale < 80){
    OutpuMesssage = 'well you were pretty good'
    santasImega.src="images/noy yoo bad santa.jpg"
  }
  else if (Zcale < 100){
    OutpuMesssage = 'wow you are an angel'
    santasImega.src="images/angel.jpg"
  }

  p.innerHTML = 'goodness scale: ' + Zcale + '%' 
  p2.innerHTML = playerName + ', ' + OutpuMesssage
}