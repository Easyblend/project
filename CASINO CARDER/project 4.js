let card1 = document.querySelector('.card1')
let card2 = document.querySelector('.card2')
let dealerCard = document.querySelector('.dealerCard')
let dealerColor = document.querySelector('.dealerColor')
let balance = document.querySelector('.balance')
let cardSelect = document.querySelector('.cardSelect')
let startGame = document.querySelector('.startGame')
let cardA = document.querySelector('.cardA')
let cardB = document.querySelector('.cardB')
let win = document.querySelector('.win')
let loose = document.querySelector('.loose')
let num2 
let num

let gameLogic = [
    {
        color : cardA,
        colorName : 'RED' 
    },
    {
        color: cardB,
        colorName: 'Black'
    }

]



function start(){
    manipulateDealer()
  startGame.parentNode.removeChild(startGame)
  function randomGenerator(){
    num =  Math.floor((Math.random()) * 2)
      return num
      
  }
  
  function randomGeneratorDealer(){
    num2 =  Math.floor((Math.random()) * 2)
      return num2
  }

  
  function manipulate1(){
      randomGenerator()
      
     cardSelect.textContent = gameLogic[num].colorName
     if (num==0){
     card1.classList.remove('card1')
     card1.classList.add('cardA')
     }
  
     else{
      card1.classList.remove('card1')
      card1.classList.add('cardB')
     }
     setTimeout(compare, 500)
  }
  
  function manipulate2(){
      randomGenerator()
      
     cardSelect.textContent = gameLogic[num].colorName
     if (num==0){
     card2.classList.remove('card2')
     card2.classList.add('cardA')
     }
  
     else{
      card2.classList.remove('card2')
      card2.classList.add('cardB')
     }
     setTimeout(compare, 500)
    
  }
  
  function manipulateDealer(){
      randomGeneratorDealer()
      dealerCard.classList.remove('dealerCard')
      if(num2 == 0){
          dealerCard.classList.add('dealerCardA')
      }
      else{
      dealerCard.classList.add('dealerCardB')
      }
      dealerColor.textContent = gameLogic[num2].colorName
     
  }
  
  card1.addEventListener('click', function(){
    manipulate1()
    setTimeout(reset, 1200)
})

card2.addEventListener('click', function(){
    manipulate2()
    setTimeout(reset, 1200)
 
})

}

function compare(){
    if(num2 == num){
      win.textContent = "YOU WIN"
    }
    else{
        loose.textContent = "YOU LOOSE"
    }
}

startGame.addEventListener('click', function(){
  
    start()
 
})

function reset(){
    window.location.reload()
}




