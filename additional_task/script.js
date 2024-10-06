function checkPalindrome() {
   const input = document.getElementById("palindromeInput").value;
   const cleanedInput = input.toLowerCase().replace(/[^a-z0-9]/g, "");
   const reversedInput = cleanedInput.split("").reverse().join("");
   const result = cleanedInput === reversedInput ? "Це паліндром" : "Це не паліндром";
   document.getElementById("palindromeResult").innerText = result;
}

function findMax() {
   const input = document.getElementById("arrayInput").value;
   const array = input.split(",").map(Number);
   const maxNumber = Math.max(...array);
   document.getElementById("maxResult").innerText = `Найбільше число: ${maxNumber}`;
}

function countVowels() {
   const input = document.getElementById("vowelInput").value;
   const vowels = input.match(/[aeiou]/gi);
   const count = vowels ? vowels.length : 0;
   document.getElementById("vowelResult").innerText = `Кількість голосних: ${count}`;
}

function replaceSpaces() {
   const input = document.getElementById("replaceInput").value;
   const result = input.replace(/\s/g, "%20");
   document.getElementById("replaceResult").innerText = result;
}

function calculateFactorial() {
   let num = parseInt(document.getElementById("factorialInput").value);
   let result = 1;
   for (let i = 2; i <= num; i++) {
      result *= i;
   }
   document.getElementById("factorialResult").innerText = `Факторіал: ${result}`;
}

function convertToRoman() {
   let num = parseInt(document.getElementById("romanInput").value);
   const romanMap = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };
   let result = '';
   for (let key in romanMap) {
      while (num >= romanMap[key]) {
         result += key;
         num -= romanMap[key];
      }
   }
   document.getElementById("romanResult").innerText = result;
}