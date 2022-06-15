//word id'sine ait olan elemanı buluyoruz:
const word_el = document.getElementById('word');
const popup = document.getElementById('popup-container');
const wrongLetters_el = document.getElementById('wrong-letters');


//displayWord() methodunu çağırdığımızda (fonsiyonu oluşturduktan sonra
//bütün harfleri browserda gözüküyor
//bütün harfleri göstermemek için:

const correctLetters = [];
const wrongLetters = [];
const selectedWord = getRandomWord();

//methodu her çağırdığımızda bize rastgele bir kelime getirmesi
//için bir fonsiyon yaratıyoruz:

function getRandomWord(){
    const words = ['dune', 'solaris', 'foundation', 'earthsea',
     'the word for world is forest'];
    return words[Math.floor(Math.random() * words.length)]
}

//bu methodu çalıştırmak için:
//console.log(getRandomWord());

//sonraki aşamda gelen random değeri kullanıcıya gösteriyor olmamız gerekli:
//bunu nasıl göstereceğiz: word id si içerisine
//letter classı aracılığıyla eklememiz lazım.
//her harf bir div içersine ve letter class ına sahip olacak şekilde gelmeli.
//bunun için bir method gerekli:


                         

function displayWord(){
   // const selectedWord = getRandomWord(); bunu globalde tanımlamak için 
   //yukarı alıyoruz
    //gelen kelimenin her bir harfini letter classındaki bir div içerisine 
    //yerleştirmek için ise
    //1.önce word_el id sine ait olan elemanı buluyoruz
    //2.index html'e yerleştirmek için innerHTML kullanıyoruz.
    //3. index.html'de referans olsun diye hazırladığımız letter classlı div'i 
    //value olarak word_el.innerHTMLe koyuyoruz
    //4. her harf bir div'e gelsin diye split('')
    //5. splitten gelen elemanların her birini işleyip geriye bir liste
    // göndermek için ise map methodu
    //6. liste elemanlarını string yapmak için join('')
/*     word_el.innerHTML = `
         ${selectedWord.split('').map(letter => `
            <div class="letter">
               ${letter} --> burada letterları her zaman yazdırmak yerine:
             </div>
         `).join('')
            }
    
    `; */

    word_el.innerHTML = `
    ${selectedWord.split('').map(letter => `
       <div class="letter">
          ${correctLetters.includes(letter) ? letter: ''} 
        </div>
    `).join('')
       }
    `;
//console.log(word_el.innerHTML) bütün div elementini veriyor
//console.log(word_el.innerText) sadece div in içinde yazanları veriyor
//bu kelimenin harfleri consoleda word_el.innerText >> bu şekilde alt alta log oluyor
//yan yana değil. bunu neden yapıyoruz? kullanıcının tahmin ettiğiyle aynı kelime mi diye:
//yani kullanıcıdan gelen kelime ile bizim kelimeyi karşılaştırmamız lazım:
//console.log(word_el.innerText.replace(/\n/g, ''));
const w = word_el.innerText.replace(/\n/g,''); 
if(w === selectedWord){
   console.log('You win.') 
   // bunu burada göstermek yerine popup elementine ulaşıp konsola yazdıracağız
   //style.css te bu class display: none; bunu JSde görünür hale getirmek için:
   popup.style.display = 'flex';
}
}

window.addEventListener('keydown', function(e){
    //keycodes from a to z: 65 to 90    
    //console.log(e.key); //consoleda hangi tuşa bastıysak o görünüyor
    //console.log(e.keyCode); //consoleda hangi tuşa bastıysak onun kodu görünüyor
    if(e.keyCode >= 65 && e.keyCode <= 90 || e.keyCode === 32){
        const letter = e.key;
        console.log(letter)
        if(selectedWord.includes(letter)){
            //eğer kullanıcının girdiği harf varsa kelimede, correct letters 
            //arrayine ekleyeceğiz. ama daha önce bu harf var mı yok mu
            //correct letters arrayinde bunun kontrolünü yapmak lazım

            if(!correctLetters.includes(letter)){
            //gelen bilginin daha önce olup olmadığına bu if statement ile bakıyoruz
            //eğer yoksa, bu durumda push ile arraye ekliyoruz    
                correctLetters.push(letter);
                displayWord();
            //displayWord() methodunu da çağıralım ki update edilsin:
                    
            } else {
                console.log('You already entered this letter.')
            } 
        } else {
            if (!wrongLetters.includes(letter)){
                wrongLetters.push(letter);
                //console.log('hatali harfleri browserda güncelle')
                //updateWrongLetters();
            }      
        }   
    }
});

//JS aracılığıyla gelen yanlış harf sayısına göre browserdaki Wrong Letters 
// güncellenecek ve adamın vücuduna organ eklenecek:

//hatalı harflerin eklenmesi/gosterilmesi:
function updateWrongLetters(){
    wrongLetters_el.innerHTML = `
        ${wrongLetters.length>0?'<h3></h3>':''}
        ${wrongLetters.map(letter=> `<span>${letter}<span>`)}
    `;

}



//browserda çalışıp çalışmadığını kontrol etmek için:
displayWord();


/* function initialDivs() {
    let innerHtml = ""
    selectedWord.split('').forEach(char => 
        innerHtml += "<div class='letter'></div>"
      );
    word_el.innerHTML = innerHtml
} */ 

//displayWord() fonsiyonunu çağırmayı unuttuğum için
//Markoyla bu fonksiyonu yarattık. check what happens when 
//you do not call displayWord()