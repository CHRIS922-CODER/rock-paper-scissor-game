// initializing the variables
let container = document.querySelector('.container');
let table = document.getElementById('table');
let play = true;

let choices = ['scissor','paper','rock']

// sources for the images 
let sources = {
     "scissor":'./photos/istockphoto-1168085197-170667a.jpg',
     "paper":'./photos/istockphoto-1294448183-170667a.jpg',
     "rock":'./photos/istockphoto-170215830-170667a.jpg'
}


//  getting user choice


container.addEventListener('click',(e)=>{
    if(play === true){
 let userChoice =  getUserChoice(e);
 let botChoice = getBotChoice();
 let message = determineWinner(userChoice, botChoice);
 console.log(userChoice)
 console.log(botChoice)
 console.log(message)
 setTimeout(displayResults(userChoice, botChoice,sources,message),1000)
 play = false;
    }


});

function getUserChoice(e){
    let choice;
    choice = e.target.id;
    return choice;
}




// getting bot choice upon random generation
function getBotChoice(){
    let botChoice;
    botChoice = getRandomNumber()
    return botChoice;
}

let botChoice = getBotChoice();


// awarding marks table

let results = {
    'scissor':{'paper':1,'scissor':0.5,'rock':0},
    'paper':{'rock':1,'paper':0.5,'scissor':0},
    'rock':{'scissor':1,'rock':0.5,'paper':0},
    'scores':{'wins':0,
    'loses':0,
    'draws':0,}
}

// deciding the winner 

let message;
let winner;

function determineWinner(userChoice, botChoice){
if(results[userChoice][botChoice] > results[botChoice][userChoice]){

  message = "you won the game!";
  results['scores']['wins']++;
  return message;
    
}else if(results[userChoice][botChoice] < results[botChoice][userChoice]){
     message = "you lose the game!";
     results['scores']['loses']++;
     return message

}else{
   message = "you tied in the game!";
   results['scores']['draws']++;
   return message;
}

}

console.log(results)

// displaying both choices for both the user and the bot and
// displaying the win or lose or tied message at the center 

function displayResults(userChoice,botChoice,sources,message){   
container.innerHTML = `   
<div class="first">
<img src="${sources[userChoice]}" alt="${userChoice}" id="${userChoice}" class="${userChoice}" >
</div>
<div class="second">
 <h1 id="mes">${message}</h1>
</div>
<div class="third">
<img src="${sources[botChoice]}" alt="${botChoice}" id="${botChoice}" class="${botChoice}" >
</div>
`;
table.innerHTML = `
        <div id="title">
            <h3>Results of the game</h3>         
        </div>
        <div id="state">
            <h4>Won</h4>
            <h4>Draw</h4>
            <h4>Lose</h4>
        </div>
        <div id="scores">
            <h4><span id="won">${results['scores']['wins']}</span></h4>
            <h4><span id="draw">${results['scores']['draws']}</span></h4>
            <h4><span id="lose">${results['scores']['loses']}</span></h4>
        </div>

   
    `;

console.log(results);



}



// getting random choice for the bot 

function getRandomNumber() {
    let random = Math.floor(Math.random()*choices.length);
    return choices[random];
}



// deciding the color of the text message
// proper color for win , draw or lose





// function to reset to original 

function reset(){

document.querySelector('.container').innerHTML = `
      <div class="first">
      <img src="./photos/istockphoto-1168085197-170667a.jpg" alt="scissor" id="scissor" class="scissor" >
      </div>
      <div class="second">
      <img src="./photos/istockphoto-1294448183-170667a.jpg" alt="paper" id="paper" class="paper">
      </div>
      <div class="third">
      <img src="./photos/istockphoto-170215830-170667a.jpg" alt="rock" id="rock" class="rock">
      </div>
`;



}

// newGame function that start the game afresh

function new_game(){
reset();
console.log('starting a new game!!');
table.innerHTML = `
        <div id="title">
            <h3>Results of the game</h3>         
        </div>
        <div id="state">
            <h4>Won</h4>
            <h4>Draw</h4>
            <h4>Lose</h4>
        </div>
        <div id="scores">
            <h4><span id="won">0</span></h4>
            <h4><span id="draw">0</span></h4>
            <h4><span id="lose">0</span></h4>
        </div>

    `;

    results['scores']['wins'] = 0;
    results['scores']['loses'] = 0;
    results['scores']['draws'] = 0;
    


}

// button to refresh the container
const btn_reset = document.getElementById('reset');
btn_reset.addEventListener('click',(e)=>{
    e.preventDefault();  
    play = true;
    container.innerHtml = reset();

})
const newGame = document.getElementById('newGame');
newGame.addEventListener('click',(e)=>{
    e.preventDefault(); 
   play = true;
    container.innerHtml =new_game();
})