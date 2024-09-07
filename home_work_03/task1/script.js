const infoDivs = [document.getElementById('info_div1'), document.getElementById('info_div2')];

let texts = [
   'To be, or not to be, that is the question...\n\n',
   'William Shakespeare, from Hamlet'
];

let currentTextIndex = 0;
let charIndex = 0;

function getRandomInt(min, max) {
   return Math.floor(Math.random() * (max - min + 1)) + min;
}

function AddTextDiv() {
   if (charIndex < texts[currentTextIndex].length) {
      infoDivs[currentTextIndex].innerHTML += texts[currentTextIndex][charIndex];
      charIndex++;
      setInterval(AddTextDiv, getRandomInt(50, 500));
   }
   else if (currentTextIndex < texts.length - 1) {
      currentTextIndex++;
      charIndex = 0;
      setTimeout(AddTextDiv, 500);
   }
}

AddTextDiv();

