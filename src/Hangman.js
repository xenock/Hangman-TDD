function Hangman() {
  this.dictionary = [
    "Ant",
    "APL",
    "AutoHotkey scripting language",
    "AutoIt scripting language",
    "BASIC",
    "DATABUS",
    "DM",
    "Eiffel",
    "Forth",
    "FPr",
    "Game Maker Language",
    "Groovy",
    "Haskell",
    "J",
    "Julia",
    "JavaScript",
    "Lisp",
    "Tea",
    "LPC",
    "Lua",
    "MUMPS",
    "Maple",
    "Mathematica",
    "MATLAB",
    "Oriel",
    "Pascal",
    "PCASTL",
    "Perl",
    "PHP",
    "Pikt",
    "PostScript",
    "PROSE",
    "Python",
    "REXX",
    "R",
    "Ruby",
    "S-Lang",
    "Standard ML",
    "Spin",
    "Tcl",
    "TI-BASIC",
    "TorqueScript",
    "thinBasic scripting language",
    "VBScript",
    "Windows PowerShell",
    "Wolfram Language",
    "Some scripting languages",
  ]
  this.letters = []
  this.mysteriousWord = []
  this.chosenWord = []
}

Hangman.prototype.getWord = function() {
  return this.dictionary[this._randomNumber(this.dictionary.length)]
}

Hangman.prototype._randomNumber = function(max) {
  return Math.floor(Math.random() * max)
}

Hangman.prototype.pushLetters = function(letter){
  return this.letters.push(letter)
}

Hangman.prototype.initGame = function(){
  return this.chosenWord.push(this.getWord())
}

Hangman.prototype._searchForCoincidences = function(){
  var letter = this._lastLetterIntroduced()
  var word = this.chosenWord[0]
  var indexes = []
  for(var i=0; i<word.length;i++){
    if(word[i] === letter) indexes.push(i)
  }
  return indexes
}

Hangman.prototype._lastLetterIntroduced = function() {
  return this.letters[this.letters.length-1]
}
