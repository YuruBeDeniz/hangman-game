const word_el = document.getElementById('word');
const wrongLetters_el = document.getElementById('wrong-letters');
const letter_el = document.getElementsByClassName('letter');
const popup = document.getElementById('popup-container');

const correctLetters = [];
const wrongLetters = [];
const selectedWord = getRandomWord();
//initialDivs() 
displayWord()


function getRandomWord(){
    const words = ['dune', 'solaris', 'foundation', 'earthsea',
     'the word for world is forest'];
    return words[Math.floor(Math.random() * words.length)]
}


function displayWord(){
    word_el.innerHTML = `
    ${selectedWord.split('').map(letter => `
       <div class="letter">
          ${correctLetters.includes(letter) ? letter: ''} 
        </div>
    `).join('')
       }
    `;
//console.log(word_el.innerHTML)    
}  


window.addEventListener('keydown', function(e){
    const letter = e.key;
    if(e.keyCode >= 65 && e.keyCode <= 90 || e.keyCode === 222){
        if(selectedWord.includes(letter)){
            correctLetters.push(letter);
            displayWord()
        }
        if(!selectedWord.includes(letter)){
            wrongLetters.push(letter);
            displayWrongLetters();
        }  
    }
})

function displayWrongLetters(){
    wrongLetters_el.innerHTML = `<h3>Wrong Letters</h3>
    <span>${wrongLetters.join(' ')}</span>`
}

function showPopUpMessage(){
    let correctGuess = ''
    for(let i = 0; i<letter_el.length; i++){
        correctGuess += letter_el[i].letter;
        if (selectedWord === letter_el){
            popup.style.display = 'flex';
        }
    }

    console.log(correctGuess);
} //this doesnt work!


console.log(letter_el)
//console.log(correctGuess)
showPopUpMessage()