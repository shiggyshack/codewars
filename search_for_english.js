//Given a string of arbitrary length with any ascii characters. Write a function to determine whether the string contains the whole word "English".
//The order of characters is important -- a string "abcEnglishdef" is correct but "abcnEglishsef" is not correct.
//Upper or lower case letter does not matter -- "eNglisH" is also correct.
//Return value as boolean values, true for the string to contains "English", false for it does not.

function spEng(sentence){
  //Return the negation of the boolean returned after the sentence string is converted to lower case, and a search is conducted to looking for an instance fo the word 'english' inside or sentence string or not.
  return !(sentence.toLowerCase().indexOf('english')===-1)
}
