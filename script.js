const word_el = document.getElementById('word');
const wrongLetters_el = document.getElementById('wrong-letters');
const letter_el = document.getElementsByClassName('letter');
const popup = document.getElementById('popup-container');
let bodyParts = document.querySelectorAll('.item');
const message = document.getElementById('message');
const recurring_letter = document.getElementById('recurring-letter');
const playAgainButton = document.getElementById('play-again');

let correctLetters = [];
let wrongLetters = [];
let selectedWord = getRandomWord();
 
displayWord()


function getRandomWord(){
    const words = ['dune', 'solaris', 'foundation', 'a wizard of earthsea',
     'the word for world is forest', 'harry potter'];
    return words[Math.floor(Math.random() * words.length)]
}


function displayWord(){
    word_el.innerHTML = selectedWord.split('').map(function (letter){
    if (correctLetters.includes(letter)){
        return `<div class="letter">${letter}</div>`
    }    
    if (letter === ' '){
        return '<div class="space"> </div>'
    } 
    return '<div class="letter"></div>'
}

).join('')

}  
 

window.addEventListener('keydown', function(e){
    const letter = e.key;
    if(e.keyCode >= 65 && e.keyCode <= 90 || e.keyCode === 222 /* || e.keyCode === 32 */){
        
        if(selectedWord.includes(letter)){
            correctLetters.push(letter);
            displayWord()
        }

        if(!selectedWord.includes(letter)){
/*             if(wrongLetters.includes(letter)){
               showRecurringLetterMessage() 
            } */
            if(!wrongLetters.includes(letter)){
                wrongLetters.push(letter);
               // console.log(wrongLetters)
            } 
        displayWrongLetters();    
        }  

    checkWinOrLose ()    
    }
})

 
function checkWinOrLose (){
    let allLettersCorrect = true;   
    selectedWord.split('').forEach(function (letter){
        if(letter !== ' ' && !correctLetters.includes(letter)){
            allLettersCorrect = false;
        } 
    })
    if(allLettersCorrect){
        //showPopUpMessage('You won')
        console.log('You won')
        message.innerText =  `You won????????`
        popup.style.display = 'flex';
    }

    if (wrongLetters.length > 5){
      // showPopUpMessage('You lose.')
        console.log('You lost')
        message.innerText =  `You lost????????`
        popup.style.display = 'flex';
    }
}

function displayWrongLetters(){
    wrongLetters_el.innerHTML = `<h3>Wrong Letters</h3>
    <span>${wrongLetters.join(' ')}</span>`
    showBodyParts()
}


function showBodyParts(){
    for(let i = 0; i < bodyParts.length; i++) {
        if(wrongLetters.length === 1){
            bodyParts[0].style.display = 'flex';
        }
        if (wrongLetters.length === 2){
            bodyParts[1].style.display = 'flex';
        }
        if (wrongLetters.length === 3){
            bodyParts[2].style.display = 'flex';
        }
        if (wrongLetters.length === 4){
            bodyParts[3].style.display = 'flex';
        }
        if (wrongLetters.length === 5){
            bodyParts[4].style.display = 'flex';
        }
        if (wrongLetters.length === 6){
            bodyParts[5].style.display = 'flex';
        }
    }
}


playAgainButton.addEventListener('click', function(){
/*  popup.style.display = 'none';
    wrongLetters.length = 0;
    correctLetters.length = 0;
    displayWord();
    displayWrongLetters();
    selectedWord = getRandomWord(); */
    window.location.reload()

})

//console.log(bodyParts)

/* function showPopUpMessage(message){
    if(allLettersCorrect){
      popup.innerHTML = `<h2 id='message'>${message}</h2>` 
      popup.style.display = 'flex';
    }    
} */


/* function showRecurringLetterMessage(){
    recurring_letter.innerText = 'You have already entered that letter.';
    let alertMessage = recurring_letter.innerText;
    setTimeout(function(){
        alertMessage.hide();
    }, 3000)
} */
