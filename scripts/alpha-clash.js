// function play(){
//     const homeScreenSection = document.getElementById('home-screen');
//     homeScreenSection.classList.add('hidden');
//     const playGroundSection = document.getElementById('play-ground');
//     playGroundSection.classList.remove('hidden');
    
// }


function handleKeyboardButtonPress(event){
    const playerPressed = event.key;
    console.log('player pressed', playerPressed);

    const elementPlayerPressed = document.getElementById('current-alphabet');
    const element = elementPlayerPressed.innerText;
    const expectedPressed = element.toLocaleLowerCase();
    console.log(expectedPressed, playerPressed);

    if(playerPressed === expectedPressed){
        console.log('you get a point!');

        const currentScoreElement = document.getElementById('current-score');
        const currentScoreText = currentScoreElement.innerText;
        console.log(currentScoreText);
        
        removeBackgroundColorById(expectedPressed);
        continueGame();
    }
    else{
        console.log('you missed. you lost a life');
    }

}
// ---------capture keyboard keypress---------
document.addEventListener('keyup', handleKeyboardButtonPress)


function continueGame(){
    // generate a random alphabet
    const alphabet = getARandomAlphabet();
    console.log('Your random alphabet is:', alphabet);

    // set randomly generated alphabet to the screen (show it)
    const cuurentAlphabetElement = document.getElementById('current-alphabet');
    cuurentAlphabetElement.innerText = alphabet;

    setBackgroundColorId(alphabet);
}

function play(){
    hideScreenSection('home-screen');
    showGroundSection('play-ground');
    continueGame(); 
}

