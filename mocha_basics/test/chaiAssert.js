
var assert = require('chai').assert;
var avengers = ['Iron man','Captain America','Hulk','Black Widow','Thor'];

describe('Chai Assert', function(){

    it('should return the length of avengers as 5 ', function(){
            assert.lengthOf(avengers,5,'Length of avengers is 5');
    });
    it('should return the type as string of 1st value value ', function(){
        assert.typeOf(avengers[0],'int','The data type should be string');
    })
    it('should return the 4th value from avengers ', function(){
        assert.equal(avengers[3],'Hulk','The 4th value of avangers is Black Widow');
    })
});