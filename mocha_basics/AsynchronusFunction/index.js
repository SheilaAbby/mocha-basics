

let listOfEmployee = ['Robart','Shyam','Abhishek','April'];
function isEmployeePresent(employeeName,callback){
    setTimeout(function(){
        callback(listOfEmployee.indexOf(employeeName)>=0)
    },1000)
}

function listLength(){
    return listOfEmployee.length;
}


module.exports = {isEmployeePresent,listLength};