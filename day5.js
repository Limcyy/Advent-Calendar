const power = document.querySelector("#power")
const kukie = document.querySelector("#kukie")
const coolImage = document.querySelector("#presentImega")
const upgradex = document.querySelector("#upgrade")
const upgradetext = document.querySelector("#upgradetext")

kukie.addEventListener("click",powerclick)
upgradex.addEventListener("click",upgrade)

let powerCount = 0
let suprNumber = 1


function powerclick () {
    
    
    powerCount = powerCount + suprNumber
    power.innerHTML = powerCount
    


    if (powerCount < 10){
    power.innerHTML = powerCount + ' cookies, next present at 10 cookies'
    coolImage.src="./images/trash.webp"
    
    }
    else if (powerCount < 20){
    power.innerHTML = powerCount + ' cookies, next present at 20 cookies'
    coolImage.src="./images/cars.jpg"
    }
    else if (powerCount < 50){
        power.innerHTML = powerCount + ' cookies, next present at 50 cookies'
        coolImage.src="./images/phone.jpg"
        }
    else if (powerCount < 100){
            power.innerHTML = powerCount + ' cookies, next present at 100 cookies'
            coolImage.src="./images/ps5.jpg"
            }
     else if (powerCount < 150){
                power.innerHTML = powerCount + ' cookies, next present at 150 cookies'
                coolImage.src="./images/suprsetup.jpg"
                upgradex.style.backgroundColor = "#15b63d"
                upgradex.innerHTML = "upgrade"
                }
     else if (powerCount < 200){
                    power.innerHTML = powerCount + ' cookies, next present at 200 cookies'
                    coolImage.src="./images/tesla.jpg"
                    upgradex.style.backgroundColor = "#15b63d"
                    upgradex.innerHTML = "upgrade"
                    }
     else if (powerCount < 500){
                        power.innerHTML = powerCount + ' cookies, next present at 500 cookies'
                        coolImage.src="./images/house.png"
                        upgradex.style.backgroundColor = "#15b63d"
                        upgradex.innerHTML = "upgrade"
                        }
                        
     else if (powerCount < 1000){
                            power.innerHTML = powerCount + ' cookies, next present at 1000 cookies'
                            coolImage.src="./images/plane.jpg"
                            upgradex.style.backgroundColor = "#15b63d"
                            upgradex.innerHTML = "upgrade"
                            }
      else {
                                power.innerHTML = powerCount + ' cookies, you reached the final present'
                                coolImage.src="./images/burj khal.jpg" 
                                upgradex.style.backgroundColor = "#15b63d"
                                upgradex.innerHTML = "upgrade"
                            }
}

function upgrade () {
    if (powerCount >= 100){
 suprNumber = 2
 powerCount = powerCount - 100
 kukie.style.backgroundImage = "url('https://i.ibb.co/k0hr2pV/cookiebettr.png')"
 var newElement = upgradetext;
 newElement.textContent = 'UPGRADE BOUGHT, 2 cookies per click :D';
 var oldElement = upgradex;
 oldElement.replaceWith(newElement);
    }
    if (powerCount < 10){
        power.innerHTML = powerCount + ' cookies, next present at 10 cookies'
        coolImage.src="./images/trash.webp"
        
        }
        else if (powerCount < 20){
        power.innerHTML = powerCount + ' cookies, next present at 20 cookies'
        coolImage.src="./images/cars.jpg"
        }
        else if (powerCount < 50){
            power.innerHTML = powerCount + ' cookies, next present at 50 cookies'
            coolImage.src="./images/phone.jpg"
            }
        else if (powerCount < 100){
                power.innerHTML = powerCount + ' cookies, next present at 100 cookies'
                coolImage.src="./images/ps5.jpg"
                }
         else if (powerCount < 150){
                    power.innerHTML = powerCount + ' cookies, next present at 150 cookies'
                    coolImage.src="./images/suprsetup.jpg"
                    upgradex.style.backgroundColor = "#15b63d"
                    upgradex.innerHTML = "upgrade"
                    }
         else if (powerCount < 200){
                        power.innerHTML = powerCount + ' cookies, next present at 200 cookies'
                        coolImage.src="./images/tesla.jpg"
                        upgradex.style.backgroundColor = "#15b63d"
                        upgradex.innerHTML = "upgrade"
                        }
         else if (powerCount < 500){
                            power.innerHTML = powerCount + ' cookies, next present at 500 cookies'
                            coolImage.src="./images/house.png"
                            upgradex.style.backgroundColor = "#15b63d"
                            upgradex.innerHTML = "upgrade"
                            }
                            
         else if (powerCount < 1000){
                                power.innerHTML = powerCount + ' cookies, next present at 1000 cookies'
                                coolImage.src="./images/plane.jpg"
                                upgradex.style.backgroundColor = "#15b63d"
                                upgradex.innerHTML = "upgrade"
                                }
          else {
                                    power.innerHTML = powerCount + ' cookies, you reached the final present'
                                    coolImage.src="./images/burj khal.jpg" 
                                    upgradex.style.backgroundColor = "#15b63d"
                                    upgradex.innerHTML = "upgrade"
                                }
}