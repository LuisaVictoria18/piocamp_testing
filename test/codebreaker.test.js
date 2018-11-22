// Import test
let test = require('assert');
var guess = require('../codebreaker');

describe( 'Test pass', function(){
  it('is true', function(){
     test.ok(true, true)
  })
})

describe('Codebreaker Test', function(){
        beforeEach(function () {
            guess.setNumber('5612')
    })

    it('Debe retornar un ox', function(){
        let result= guess.guess("0517");

        test.equal(result,"ox","Posición equivocada");
    })

    it('Debe retornar un oo', function(){
        let result=guess.guess("1345");

        test.equal(result,"oo","Posición equivocada");
    })

    it('Debe retornar un " " ', function(){
        let result=guess.guess("4899");

        test.equal(result,"","Posición equivocada");
    })

    it('Debe retornar un oo', function(){
        let result=guess.guess("7321");

        test.equal(result,"oo","Posición equivocada");
    })

    it('Debe retornar un o', function(){
        let result=guess.guess("1874");

        test.equal(result,"o","Posición equivocada");
    })

    it('Debe retornar un xx', function(){
        let result=guess.guess("9632");

        test.equal(result,"xx","Posición equivocada");
    })

    it('Debe retornar un oo', function(){
        let result=guess.guess("3056");

        test.equal(result,"oo","Posición equivocada");
    })

    it('Debe retornar un ox', function(){
        let result=guess.guess("1842");

        test.equal(result,"ox","Posición equivocada");
    })

    it('Debe retornar un xxx', function(){
        let result=guess.guess("5613");

        test.equal(result,"xxx","Posición equivocada");
    })

    it('Debe retornar un xxxx', function(){
        let result=guess.guess("5612");

        test.equal(result,"xxxx","Posición correcta");
    })
   






})