const path1 = document.querySelector("#path1")
const path2 = document.querySelector("#path2")
const firstText = document.querySelector("#Text")
const coolImage = document.querySelector("#coolImage")


path1.addEventListener("click", disneyWorld)
path2.addEventListener("click", disneyLand)

function disneyWorld() {


   firstText.innerHTML = 'youre in the disney world, choose where you want to go first'
   path2.innerHTML = 'Elsa & Anna roller coaster'
   path1.innerHTML = 'micky restaurant'
   coolImage.src="https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1200,h_630/activities/alg3puq4hmpeobqhumjd/Walt%20Disney%20World%20Ticket%20in%20Florida%20Orlando.jpg"


   path1.addEventListener("click", quandaland)
   path2.addEventListener("click", dingeland)



   function quandaland () {
    firstText.innerHTML = 'micky restaurant was really yummy but there was a poison in the micky juice, what are you going to do'
   path2.innerHTML = 'die in mickies arms'
   path1.innerHTML = 'become spiderman'
   path1.addEventListener("click", quandaland1)
   path2.addEventListener("click", quandaland2)
   coolImage.src="https://thrillgeek.com/wp-content/uploads/2020/09/mmkh02938402948029384.jpg"

   function quandaland2 () {
    firstText.innerHTML = 'well you died but atleast fun end right'
   path2.style.display = 'none'
   path1.style.display = 'none'
   coolImage.src="https://purepng.com/public/uploads/large/purepng.com-mickey-mouse-happymickey-mousemickeymouseanimal-cartooncharacterwalt-disneyub-iwerksstudioslarge-yellow-shoered-shortswhite-gloves-1701528648838thmbp.png"
   }

   function quandaland1 () {
    firstText.innerHTML = 'you just bacame spiderman and saved the day lets goo'
    path2.style.display = 'none'
    path1.style.display = 'none'
   coolImage.src="https://cdn.administrace.tv/2023/04/07/medium_169/84d3b6a43694cfd9d67e0267b1906be2.jpg"
   }


   }

   function dingeland () {
      firstText.innerHTML = 'the roller coaster was really fun'
     path2.innerHTML = 'go for another ride'
     path1.innerHTML = 'go somewhere else'
     coolImage.src="https://w0.peakpx.com/wallpaper/75/823/HD-wallpaper-snowman-olaf-frozen-happy-snow-winter.jpg"
     path1.addEventListener("click", dingeland1)
   path2.addEventListener("click", dingeland2)

   function dingeland1 () {
    firstText.innerHTML = 'you explored the rest of disney world and had a great christmas holidays'
    path2.style.display = 'none'
    path1.style.display = 'none'
   coolImage.src="https://images.squarespace-cdn.com/content/v1/5b673710af2096c5aae01c6d/1607529173470-EQC1FVF38JNJLH1R5ITN/christmas+7.jpg"
   }

   function dingeland2 () {
    firstText.innerHTML = 'you went for another ride but the roller coaster broke and your whole family died'
    path2.style.display = 'none'
    path1.style.display = 'none'
   coolImage.src="https://m.media-amazon.com/images/I/51vZ2lAmcKL._AC_UF350,350_QL80_.jpg"
   }
     }


}

function disneyLand() {


  firstText.innerHTML = 'welcome to the Jurassic world so where do you want to go'
  path2.innerHTML = 'visit T-rex'
  path1.innerHTML = 'escape to the jungle'
  coolImage.src="https://cdn.aktivcommunication.cz/images/products/screens/7015/1920x1440x1/1.jpg"


  path1.addEventListener("click", quanda)
  path2.addEventListener("click", dinga)



  function quanda () {
   firstText.innerHTML = 'youre in the jungle and you see 2 dinos fight what are u going to do'
  path2.innerHTML = 'join the fight'
  path1.innerHTML = 'run away'
  path1.addEventListener("click", quanda1)
  path2.addEventListener("click", quanda2)
  coolImage.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST6nCqIcwL3lZl78zkJ2azQr9TNc0dGGm-Tg&usqp=CAU"

  function quanda2 () {
   firstText.innerHTML = 'you joined the fight and killed both dinos with just one punch :O'
   path2.style.display = 'none'
   path1.style.display = 'none'
  coolImage.src="https://play-lh.googleusercontent.com/iSxPiIZWr1YtL4iAmL5hLoXFXDBFq5qXfbDEhKIUdRN8Bq42Bg5h5grXvOLWSpD68t4"
  }

  function quanda1 () {
   firstText.innerHTML = 'you tried to ran away but one dino spotted you and ate you'
   path2.style.display = 'none'
   path1.style.display = 'none'
  coolImage.src="aa-3faedcc9ea7b.837b1d35-5412-4287-9e72-cbd341a22ac6?q=90&w=480&h=270"
  }


  }

  function dinga () {
     firstText.innerHTML = 'youre at the Trexs, but Trex just broke the gate what are you going to do'
    path2.innerHTML = 'throw buritto at him'
    path1.innerHTML = 'throw your mom at him'
    coolImage.src="data:image/jpeg;base64,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"
    path1.addEventListener("click", dinga1)
  path2.addEventListener("click", dinga2)

  function dinga2 () {
   firstText.innerHTML = 'he ate the buritto and said, YUMMI :D'
   path2.style.display = 'none'
   path1.style.display = 'none'
  coolImage.src="https://cdn4.vectorstock.com/i/1000x1000/24/88/happy-dino-cute-dinosaur-vector-32292488.jpg"
  }

  function dinga1 () {
   firstText.innerHTML = 'your mom was so big that the dinosaur died immediately'
   path2.style.display = 'none'
   path1.style.display = 'none'
  coolImage.src="https://pbs.twimg.com/media/EVuxyA2WoAEaBUz.jpg:large"
  }
    }


}
