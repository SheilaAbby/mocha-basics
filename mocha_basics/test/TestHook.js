

var assert = require('assert');
var isEmployeePresent = require('../Hooks/hooks');
let count = 0;
describe('hooks steps', function() {
    before(function() {
      console.log("Start Test");
    });
  
    after(function() {
        console.log("End Test");
    });
  
    beforeEach(function() {
      
      console.log("Currently checking for: "+count);
    });
    describe('Validate employee is present on the list', function(){
        it('Should return true if employee is present',function(){
               let isPresent = isEmployeePresent('Robart');
               assert.equal(isPresent,true);
    
        });
        it.skip('Should return true if employee is present',function(){
            let isPresent = isEmployeePresent('Shyam');
            assert.equal(isPresent,true);
 
     });
     it('Should return true if employee is present',function(){
        let isPresent = isEmployeePresent('Abhishek');
        assert.equal(isPresent,true);

    });
    it('Should return true if employee is present',function(){
    let isPresent = isEmployeePresent('April');
    assert.equal(isPresent,true);

    })
    })
  
    afterEach(function() {
        ++count;
      console.log("Now checking for: "+count);
    });
  
    // test cases
  });