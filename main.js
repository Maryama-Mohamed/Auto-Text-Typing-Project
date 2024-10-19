const typedText = document.querySelector('.typed-text');
const cursor = document.querySelector('.cursor');
// console.log(typedText);
// console.log(cursor);
let words = ['Awesome !', 'Fun !', 'Cool !', 'Life !','Famous !', 'Worth While !'];
const  typingDelay = 200;
const erasingDelay = 200;
const newLetterDelay = 300;
let index = 0;  
let charIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
    if(words.length){
        setTimeout(type, typingDelay);
    }else{  
    setTimeout(erase, typingDelay);
    }
})

function type(){
   if(charIndex < words[index].length){
    typedText.textContent += words[index].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
   }else{
    setTimeout(erase, newLetterDelay);
   }
}

function erase(){
    if(charIndex > 0){
        typedText.textContent = words[index].substring(0,  charIndex -1);
        charIndex--;
    setTimeout(erase, newLetterDelay);
    }else{
        index++;
        if(index >= words.length){
            index = 0;            
        }
        setTimeout(type, typingDelay + 1100)
    }
}