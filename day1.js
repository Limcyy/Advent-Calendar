document.querySelector("#submit").addEventListener("click",rizzScale)
const p = document.querySelector("#outputParagraph")
const p2 = document.querySelector("#outputParagraph2")
santasImega = document.querySelector("#santasImega")

function rizzScale() {

  const playerName = document.querySelector("#playerName").value
  const Zcale = Math.floor(Math.random() * 100)
  let OutpuMesssage = (playerName)

  if (Zcale < 20){
    OutpuMesssage = 'you are not a good boy/girl D:'
    santasImega.src="https://media.istockphoto.com/id/1069518204/vector/portrait-of-an-angry-santa-claus.jpg?s=612x612&w=0&k=20&c=H4VsmDc0sacg1EWpJIubYf8ucS7Ya0zC31hOjSjiaP8="
  }
  else if (Zcale < 40){
    OutpuMesssage = 'all good, you will surely be better next year'
    santasImega.src="https://media.istockphoto.com/id/618539388/photo/sad-and-depressed-santa-claus-waiting-for-christmas.jpg?s=612x612&w=0&k=20&c=mfz1ZDgwXfWKI4v64_idHJkIpgmUaf6vcMg2ZGSAoL0="
  }
  else if (Zcale < 60){
    OutpuMesssage = 'not too bad'
    santasImega.src="https://media.istockphoto.com/id/1357890877/vector/cute-dancing-santa-claus-christmas-vector-illustration.jpg?s=612x612&w=0&k=20&c=dLLi6isaG0Qaf_8xGVVE9ishEuk5kWKWwgjxBRgj6fw="
  }
  else if (Zcale < 80){
    OutpuMesssage = 'well you were pretty good'
    santasImega.src="https://thegraphicsfairy.com/wp-content/uploads/2022/11/Santa-Drawing-Lesson-Color-GraphicsFairy.jpeg"
  }
  else if (Zcale < 100){
    OutpuMesssage = 'wow you are an angel'
    santasImega.src="https://us.123rf.com/450wm/reginast777/reginast7772208/reginast777220800003/190593116-cute-cartoon-christmas-angel-on-a-heart-background.jpg?ver=6"
  }

  p.innerHTML = 'goodness scale: ' + Zcale + '%' 
  p2.innerHTML = playerName + ', ' + OutpuMesssage
}