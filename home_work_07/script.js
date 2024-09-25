function convertRomanToInteger() {
   const roman = document.getElementById('romanInput').value.toUpperCase();
   const romanToIntMap = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
   };

   let total = 0;
   for (let i = 0; i < roman.length; i++) {
      const currentVal = romanToIntMap[roman[i]];
      const nextVal = romanToIntMap[roman[i + 1]];

      if (nextVal && currentVal < nextVal) {
         total -= currentVal;
      } else {
         total += currentVal;
      }
   }

   document.getElementById('result').innerText = `Result: ${total}`;
}
