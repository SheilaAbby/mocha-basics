
var should = require('chai').should();
var avengers = ['Iron man','Captain America','Hulk','Black Widow','Thor'];


describe('Chai Should', function(){

    it('should return the length of avengers as 5 ', function(){
            avengers.should.have.lengthOf(5);
    });
    it('should return the type as string of 3rd value value ', function(){
            avengers[1].should.be.a('string');
    })
    it('should return the 4th value from avengers ', function(){
            avengers[2].should.equal('Hulk');
    })
});