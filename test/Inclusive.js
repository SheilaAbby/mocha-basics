
var assert = require('assert');
var isEmployeePresent = require('../Hooks/hooks');

describe('Validate first two employees are present on the list', function(){
    it('Should return true if employee is present',function(){
           let isPresent = isEmployeePresent('Robart');
           assert.equal(isPresent,true);

    });
    it.skip('Should return true if employee is present',function(){
        let isPresent = isEmployeePresent('Shyam');
        assert.equal(isPresent,true);
    });
 
})

describe('Validate Last two employees are present on the list', function(){
  
 it('Should return true if employee is present',function(){
    let isPresent = isEmployeePresent('Abhishek');
    assert.equal(isPresent,true);

});
it.skip('Should return true if employee is present',function(){
let isPresent = isEmployeePresent('April');
assert.equal(isPresent,true);

})
})