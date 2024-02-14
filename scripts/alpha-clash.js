// function play() {
//     // console.log('Start Play Now')
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden')
//     // console.log(homeSection.classList)
//     //Step-1 : Hide The Home Screen. means to add the  hidden class to the home  section

//     //nStep-2 : Show The Playground
//     const PlaygroundSection = document.getElementById('play-ground');
//     PlaygroundSection .classList.remove('hidden')
// }

function continueGame(){
    //step-1 : Generate e random alphabet
    const alphabet = getARandomAlphabet();
    // console.log(alphabet);

    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;
    
    //set Randomly Generated Alphabet to The Screen
    addBackgroundById(alphabet);
}

function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();

}