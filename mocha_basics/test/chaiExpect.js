
var expect = require('chai').expect;
var avengers = ['Iron man','Captain America','Hulk','Black Widow','Thor'];


describe('Chai Expect', function(){

    it('should return the length of avengers as 5 ', function(){
            expect(avengers,'The length should be 5').to.have.lengthOf(4);
    });
    it('should return the type as string of 3rd value value ', function(){
        expect(avengers[2]).to.be.a('string');
    })
    it('should return the 4th value from avengers ', function(){
       expect(avengers[4],'The 4th value should be Thor').to.equal('Captain America');
    })
});