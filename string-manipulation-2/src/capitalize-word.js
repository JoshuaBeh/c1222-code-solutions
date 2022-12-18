/* exported capitalizeWord */

/* - Use an if statement to check if the word is strictly equal to the lower cased
     version of the string 'javscript'
   - If so, return the string 'JavaScript'
   - Otherwise, return  the first letter of the word capitalized plus the rest of
     the word lowercased */
function capitalizeWord(word) {
  if (word.toLowerCase() === 'javascript') {
    return 'JavaScript';
  } else {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  }
}
