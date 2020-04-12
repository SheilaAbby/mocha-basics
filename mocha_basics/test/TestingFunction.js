
var assert = require('assert');
var isEmployeePresent = require('../TestFunction/Index');


describe('Validate employee is present on the list', function(){
    it('Should return true if employee is present',function(){
           let isPresent = isEmployeePresent('April');
           assert.equal(isPresent,true);

    })
})