// function play(){
//     const homeScreenSection = document.getElementById('home-screen');
//     homeScreenSection.classList.add('hidden');
//     const playGroundSection = document.getElementById('play-ground');
//     playGroundSection.classList.remove('hidden');
    
// }


function handleKeyboardButtonPress(event){
    const playerPressed = event.key;
    console.log('player pressed', playerPressed);

// stop the game------

    if(playerPressed === 'Enter'){
        gameOver();
    }

    const elementPlayerPressed = document.getElementById('current-alphabet');
    const element = elementPlayerPressed.innerText;
    const expectedPressed = element.toLocaleLowerCase();
    console.log(expectedPressed, playerPressed);

    if(playerPressed === expectedPressed){
        console.log('you get a point!');

        const currentScore = getTextElementValueById('current-score');
        // console.log(currentScore);
        const updateScore = currentScore + 1;
        setTextElementValueById('current-score', updateScore)
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // console.log(currentScore);
        // const newScore = currentScore + 1;
        // currentScoreElement.innerText = newScore;
        
        removeBackgroundColorById(expectedPressed);
        continueGame();
    }
    else{
        console.log('you missed. you lost a life');

        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife - 1;
        setTextElementValueById('current-life', updatedLife);

        if(updatedLife === 0){
            gameOver();
        }

        // --------------------------------------
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);

        // const newLife = currentLife - 1;

        // currentLifeElement.innerText = newLife;
    }

}
// ---------capture keyboard keypress---------
document.addEventListener('keyup', handleKeyboardButtonPress)


function continueGame(){
    // generate a random alphabet
    const alphabet = getARandomAlphabet();
    console.log('Your random alphabet is:', alphabet);

    // set randomly generated alphabet to the screen (show it)
    const curentAlphabetElement = document.getElementById('current-alphabet');
    curentAlphabetElement.innerText = alphabet;

    setBackgroundColorId(alphabet);
}

function play(){
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');

    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);
    continueGame(); 
}

function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');

    // ---------------------update final score---------------------
    const lastScore = getTextElementValueById('current-score');
    console.log(lastScore);
    setTextElementValueById('last-score', lastScore);

    // ------clear the last selected--------
    const currentAlphabet =  getElementTextById('current-alphabet');
    console.log(currentAlphabet);
    removeBackgroundColorById(currentAlphabet);
}
