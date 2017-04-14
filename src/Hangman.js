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
}

Hangman.prototype.getWord = function() {
  return this.dictionary[this.randomNumber(this.dictionary.length)]
}

Hangman.prototype.randomNumber = function(max) {
  return Math.floor(Math.random() * max)
}

Hangman.prototype.pushLetters = function(letter){
  return this.letters.push(letter)
}
