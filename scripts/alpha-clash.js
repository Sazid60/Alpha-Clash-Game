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

const audio = new Audio();
let isGamePlayOn = false; 
function play() {
    //Hie verything except Playground
    hideElementById('home-screen');
    showElementById('play-ground');
    //akbar gam Oever howar por ekhane disi
    hideElementById('final-score');
    // evabe game over howar por button click kore abar game calu korte caile score & life reset hobe na so we have to do it

    //resent score & life
    setElementValueById('current-life', 5)
    setElementValueById('current-Score', 0)
    isGamePlayOn = true;
    continueGame();

}

function continueGame() {
    //step-1 : Generate e random alphabet
    const alphabet = getARandomAlphabet();
    console.log('Your Random Alphabet :', alphabet)
    // console.log(alphabet);

    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;


    //set Randomly Generated Alphabet to The Screen
    addBackgroundById(alphabet);
}

//pura document ar keyup dilam

document.addEventListener('keyup', handleKeyboardButtonPress);
//FUNCTION CALL ER PORE JODI () DEI TAHLE FUNCTION KHALI AKBAR CALL HOBE NA DILE Joto bar press totobar dekhabe


function handleKeyboardButtonPress(event) {
    // console.log('button Pressed')

    if(isGamePlayOn === false) return;

    const playerPressed = event.key;
    // console.log('Player Pressed :', playerPressed)
    //event.target.value use kori nai because eta kuno input field e na

    //stop game
    if(playerPressed === 'Escape'){
        gameOver();
    }

    //get the expected Press
    //continueGame e set korsi & ekhane get korlam 
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPressed, expectedAlphabet)

    //check matched or not
    if (playerPressed === expectedAlphabet) {
        console.log('You Have Got a pont');

        audio.src = "../audio/click_click.mp3";
        audio.play();
        // ---------------------------------------------------------------
        // //Update Score:
        // //1. get the current score
        // const currentScoreElement = document.getElementById('current-Score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);

        // //2. increase score by 1
        // const newScore = currentScore + 1;
        // //3. show the updated score
        // currentScoreElement.innerText = newScore;

        //uporer kaj ta sSame kaj akta function diye korasye anbo
        const currentScore = getElementValueById('current-Score');

        const newScore = currentScore + 1;

        // console.log(newScore)

        //Setting New Score
        setElementValueById('current-Score', newScore)


        //Start a new Round
        removeBackgroundById(expectedAlphabet);
        continueGame();
    }
    else {
        console.log('You Lost a Life');

        audio.src = "../audio/Bruh .mp3"
        audio.play();
        
        //------------------------------------------------------------
        //         //Update Life:
        // //1. get the current life
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);

        // //2. decrease life by 1
        // const newLife = currentLife - 1;
        // //3. show the updated life
        // currentLifeElement.innerText = newLife;
        //-----------------------------------------------------------

        //uporer kaj tta sasme vabe korbo olpoo line e same as it is but if er utlity function re use  korbpo ar ki

        const currentLife = getElementValueById('current-life');
        const newLife = currentLife - 1;
        const newScorePercentage = (newLife / 5) * 100;
        const artBoard = document.getElementById('art-board');
        artBoard.style.background = `linear-gradient(#FFFFFFB3 ${newScorePercentage}%,red)`
        setElementValueById('current-life', newLife)

        if(newLife === 0){
            gameOver();
        }
    }
}

function gameOver(){
    
    hideElementById('play-ground');
    showElementById('final-score');

    //update final Score
    //1.get the final score
    const lastScore = getElementValueById('current-Score');
    setElementValueById('last-score', lastScore)

    const artBoard = document.getElementById('art-board');
    artBoard.style.background = `linear-gradient(#FFFFFFB3 100%,red)`

    //clear the last selected alphabet highlight
    const currentAlphabet = getElementTextById('current-alphabet');
    removeBackgroundById(currentAlphabet)

    audio.src = "../audio/game_over.mp3"
    audio.play();
    isGamePlayOn = false;
} 


//game over

