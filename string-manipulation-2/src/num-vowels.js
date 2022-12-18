/* exported numVowels */

/* - Create a variable to hold the number of vowels in the given string
   - Create a variable to hold the lowercased version of the given string
   - Use a for loop to iterate through the string
   - Check if the letter (current index) is a vowel, and if so, increase
     the count by one
   - Return the count */
function numVowels(string) {
  var count = 0;
  var newString = string.toLowerCase();
  for (var i = 0; i < newString.length; i++) {
    if (newString[i] === 'a' || newString[i] === 'e' || newString[i] === 'i' || newString[i] === 'o' || newString[i] === 'u') {
      count += 1;
    }
  }
  return count;
}
