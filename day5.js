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
    coolImage.src="https://i0.wp.com/outliermedia.org/wp-content/uploads/2020/07/mariners-1.jpg?fit=1000%2C1333&ssl=1"
    
    }
    else if (powerCount < 20){
    power.innerHTML = powerCount + ' cookies, next present at 20 cookies'
    coolImage.src="https://www.dvd-premiery.cz/data/imgauto/9/0/100378.jpg"
    }
    else if (powerCount < 50){
        power.innerHTML = powerCount + ' cookies, next present at 50 cookies'
        coolImage.src="https://m.media-amazon.com/images/I/61rDctkPw6L.jpg"
        }
    else if (powerCount < 100){
            power.innerHTML = powerCount + ' cookies, next present at 100 cookies'
            coolImage.src="https://wccftech.com/wp-content/uploads/2022/11/ps5-credit-sie@2000x1270.jpg"
            }
     else if (powerCount < 150){
                power.innerHTML = powerCount + ' cookies, next present at 150 cookies'
                coolImage.src="https://i.pinimg.com/originals/a9/4b/43/a94b430bfe62460bd537c842152ae563.jpg"
                upgradex.style.backgroundColor = "#15b63d"
                upgradex.innerHTML = "upgrade"
                }
     else if (powerCount < 200){
                    power.innerHTML = powerCount + ' cookies, next present at 200 cookies'
                    coolImage.src="https://images.prismic.io/carwow/c340a77d-af56-4562-abfb-bd5518ccb292_2023+Tesla+Model+X+front+quarter+moving.jpg"
                    upgradex.style.backgroundColor = "#15b63d"
                    upgradex.innerHTML = "upgrade"
                    }
     else if (powerCount < 500){
                        power.innerHTML = powerCount + ' cookies, next present at 500 cookies'
                        coolImage.src="https://assets-news.housing.com/news/wp-content/uploads/2022/01/10145854/most-beautiful-houses2.png"
                        upgradex.style.backgroundColor = "#15b63d"
                        upgradex.innerHTML = "upgrade"
                        }
                        
     else if (powerCount < 1000){
                            power.innerHTML = powerCount + ' cookies, next present at 1000 cookies'
                            coolImage.src="https://images.squarespace-cdn.com/content/v1/5aee3c452487fd040c444dc8/1664305740221-Y1TLKFW0PZAKITBIM09O/Global+8000+ext.jpg"
                            upgradex.style.backgroundColor = "#15b63d"
                            upgradex.innerHTML = "upgrade"
                            }
      else {
                                power.innerHTML = powerCount + ' cookies, you reached the final present'
                                coolImage.src="https://www.iccsafe.org/wp-content/uploads/bsj/GettyImages-183346577-scaled.jpg" 
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
        coolImage.src="https://i0.wp.com/outliermedia.org/wp-content/uploads/2020/07/mariners-1.jpg?fit=1000%2C1333&ssl=1"
        
        }
        else if (powerCount < 20){
        power.innerHTML = powerCount + ' cookies, next present at 20 cookies'
        coolImage.src="https://www.dvd-premiery.cz/data/imgauto/9/0/100378.jpg"
        }
        else if (powerCount < 50){
            power.innerHTML = powerCount + ' cookies, next present at 50 cookies'
            coolImage.src="https://m.media-amazon.com/images/I/61rDctkPw6L.jpg"
            }
        else if (powerCount < 100){
                power.innerHTML = powerCount + ' cookies, next present at 100 cookies'
                coolImage.src="https://wccftech.com/wp-content/uploads/2022/11/ps5-credit-sie@2000x1270.jpg"
                }
         else if (powerCount < 150){
                    power.innerHTML = powerCount + ' cookies, next present at 150 cookies'
                    coolImage.src="https://i.pinimg.com/originals/a9/4b/43/a94b430bfe62460bd537c842152ae563.jpg"
                    }
         else if (powerCount < 200){
                        power.innerHTML = powerCount + ' cookies, next present at 200 cookies'
                        coolImage.src="https://images.prismic.io/carwow/c340a77d-af56-4562-abfb-bd5518ccb292_2023+Tesla+Model+X+front+quarter+moving.jpg"
                        }
         else if (powerCount < 500){
                            power.innerHTML = powerCount + ' cookies, next present at 500 cookies'
                            coolImage.src="https://assets-news.housing.com/news/wp-content/uploads/2022/01/10145854/most-beautiful-houses2.png"
                            }
         else if (powerCount < 1000){
                                power.innerHTML = powerCount + ' cookies, next present at 1000 cookies'
                                coolImage.src="https://images.squarespace-cdn.com/content/v1/5aee3c452487fd040c444dc8/1664305740221-Y1TLKFW0PZAKITBIM09O/Global+8000+ext.jpg"
                                }
          else {
                                    power.innerHTML = powerCount + ' cookies, you reached the final present'
                                    coolImage.src="https://www.iccsafe.org/wp-content/uploads/bsj/GettyImages-183346577-scaled.jpg" 
                                }
}