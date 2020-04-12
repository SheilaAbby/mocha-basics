

var assert = require("assert");
var {isEmployeePresent,listLength} = require("../AsynchronusFunction/index");


describe('Validate Asynchronus function',function(){
    it('Should return true if employee name is present',function(done){
        isEmployeePresent('Abhishek',
            function(isPresent){
            assert.equal(isPresent,true);
            done();
        })
    })
    it('Should return employee list length as 4', function(){
        assert.equal(listLength(),4);
    })
})