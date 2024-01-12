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
   coolImage.src="/images/disney world.jpg"


   path1.addEventListener("click", quandaland)
   path2.addEventListener("click", dingeland)



   function quandaland () {
    firstText.innerHTML = 'micky restaurant was really yummy but there was a poison in the micky juice, what are you going to do'
   path2.innerHTML = 'die in mickies arms'
   path1.innerHTML = 'become spiderman'
   path1.addEventListener("click", quandaland1)
   path2.addEventListener("click", quandaland2)
   coolImage.src="/images/mickey in dw.jpg"

   function quandaland2 () {
    firstText.innerHTML = 'well you died but atleast fun end right'
   path2.style.display = 'none'
   path1.style.display = 'none'
   coolImage.src="/images/mickey.png"
   }

   function quandaland1 () {
    firstText.innerHTML = 'you just bacame spiderman and saved the day lets goo'
    path2.style.display = 'none'
    path1.style.display = 'none'
   coolImage.src="/images/spiderman.jpg"
   }


   }

   function dingeland () {
      firstText.innerHTML = 'the roller coaster was really fun'
     path2.innerHTML = 'go for another ride'
     path1.innerHTML = 'go somewhere else'
     coolImage.src="/images/olaf.jpg"
     path1.addEventListener("click", dingeland1)
   path2.addEventListener("click", dingeland2)

   function dingeland1 () {
    firstText.innerHTML = 'you explored the rest of disney world and had a great christmas holidays'
    path2.style.display = 'none'
    path1.style.display = 'none'
   coolImage.src="/images/disney christmas.jpg"
   }

   function dingeland2 () {
    firstText.innerHTML = 'you went for another ride but the roller coaster broke and your whole family died'
    path2.style.display = 'none'
    path1.style.display = 'none'
   coolImage.src="/images/happy olaf.jpg"
   }
     }


}

function disneyLand() {


  firstText.innerHTML = 'welcome to the Jurassic world so where do you want to go'
  path2.innerHTML = 'visit T-rex'
  path1.innerHTML = 'escape to the jungle'
  coolImage.src="/images/jurassic world.jpg"


  path1.addEventListener("click", quanda)
  path2.addEventListener("click", dinga)



  function quanda () {
   firstText.innerHTML = 'youre in the jungle and you see 2 dinos fight what are u going to do'
  path2.innerHTML = 'join the fight'
  path1.innerHTML = 'run away'
  path1.addEventListener("click", quanda1)
  path2.addEventListener("click", quanda2)
  coolImage.src="/images/2 dino fight.jpeg"

  function quanda2 () {
   firstText.innerHTML = 'you joined the fight and killed both dinos with just one punch :O'
   path2.style.display = 'none'
   path1.style.display = 'none'
  coolImage.src="/images/satima.png"
  }

  function quanda1 () {
   firstText.innerHTML = 'you tried to ran away but one dino spotted you and ate you'
   path2.style.display = 'none'
   path1.style.display = 'none'
  coolImage.src="/images/extreme dino.jpg"
  }


  }

  function dinga () {
     firstText.innerHTML = 'youre at the Trexs, but Trex just broke the gate what are you going to do'
    path2.innerHTML = 'throw buritto at him'
    path1.innerHTML = 'throw your mom at him'
    coolImage.src="/images/trex.jpeg"
    path1.addEventListener("click", dinga1)
  path2.addEventListener("click", dinga2)

  function dinga2 () {
   firstText.innerHTML = 'he ate the buritto and said, YUMMI :D'
   path2.style.display = 'none'
   path1.style.display = 'none'
  coolImage.src="/images/happy dino.jpg"
  }

  function dinga1 () {
   firstText.innerHTML = 'your mom was so big that the dinosaur died immediately'
   path2.style.display = 'none'
   path1.style.display = 'none'
  coolImage.src="/images/your mom.jpeg"
  }
    }


}
