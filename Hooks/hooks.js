
var isEmployeePresent = function(employeeName){
    let employeePresentFlag = false;
    let listOfEmployee = ['Robart','Shyam','Abhishek','April'];

    if(listOfEmployee.indexOf(employeeName)>=0){
        return employeePresentFlag = true;
    }

    return employeePresentFlag;

}

module.exports = isEmployeePresent;