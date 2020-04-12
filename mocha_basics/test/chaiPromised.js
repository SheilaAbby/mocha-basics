
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised).should();
var isEmployeePresent = require("../PromisedAsync/PromisedAsync");


describe('Validate Promised Asynchronus function',function(){
    it('Should return true if employee name is present',function(){
        isEmployeePresent('April').should.eventually.be.true;
    })
})