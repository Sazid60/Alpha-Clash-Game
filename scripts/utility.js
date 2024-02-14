function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden')
}

function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden')
}

function getARandomAlphabet(){
    //Create a alphabet Array
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');

    //get a randomm index between 0-25
    const randomNumber = Math.random()*25;
    const randomIndex = Math.round(randomNumber);
    const alphabet = alphabets[randomIndex];
    return alphabet;
}

//set Background Color
function addBackgroundById(alphabetElementId){
const alphabetElement = document.getElementById(alphabetElementId);
alphabetElement.classList.add('bg-orange-400');

}