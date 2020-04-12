var assert = require('assert');
let employee = ['Robart','Shyam','Abhishek','April'];

describe('Basic Mocha spec to check length and Value of an employee array', function(){
    it('Should return the size of the employee array as 4',function(){
            assert.equal(employee.length,4);
    })
    it('Should return the first name of the employee array as Robart',function(){
        assert.equal(employee[0],'Robart');
})
})