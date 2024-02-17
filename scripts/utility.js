function hideScreenSection(elementId){
    const homeScreen = document.getElementById(elementId);
    homeScreen.classList.add('hidden');
}
function showGroundSection(elementId){
    const playGround = document.getElementById(elementId);
    playGround.classList.remove('hidden');
}

function setBackgroundColorId(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}

function removeBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}


function getARandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    // console.log(alphabets);

    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);
    // console.log(index);

    const alphabet = alphabets[index];
    // console.log(alphabet, index);
    return alphabet;
}