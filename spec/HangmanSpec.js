describe('Hangman', function(){
  var hangman

  beforeEach(function() {
    hangman = new Hangman()
  })

  describe('Attributes', function() {
    describe('Dictionary', function() {
      it('should have a dictionary as an array', function() {
        expect(Array.isArray(hangman.dictionary)).toBe(true)
      })
      it('should not be empty', function() {
        expect(hangman.dictionary.length > 0).toBe(true)
      })
    })
    describe('letters', function(){
      it('should be an array', function(){
        expect(Array.isArray(hangman.letters)).toBe(true)
      })
      it('should be empty', function() {
        expect(hangman.letters.length == 0).toBe(true)
      })
    })
    describe('mysteriousWord', function() {
      it('should be an array', function() {
        expect(Array.isArray(hangman.mysteriousWord)).toBe(true)
      })
    })
  })

  describe('Functions', function() {
    describe('getWord', function() {
      it('should be a function', function() {
        expect(typeof(hangman.getWord)).toBe('function')
      })
      it('should return a string', function() {
        expect(typeof(hangman.getWord())).toBe('string')
      })
      it('should return a non empty string', function() {
        expect(hangman.getWord().length > 0).toBe(true)
      })
      it('should return a random word', function() {
        var word1 = hangman.getWord()
        var word2 = hangman.getWord()
        expect(word1 !== word2).toBe(true)
      })
    })
    describe('randomNumber', function() {
      it('should be a function', function() {
        expect(typeof(hangman._randomNumber)).toBe('function')
      })
      it('should return a random number between 0 and dictionary.length', function() {
        var l = hangman.dictionary.length
        expect(hangman._randomNumber(l) != hangman._randomNumber(l)).toBe(true)
      })
    })
    describe('pushLetters', function() {
      it('should be a function', function() {
        expect(typeof(hangman.pushLetters)).toBe('function')
      })
      it('should push letters into letters attribute', function() {
        hangman.pushLetters('a')
        expect(hangman.letters[0] === 'a').toBe(true)
      })
    })
  })
})
