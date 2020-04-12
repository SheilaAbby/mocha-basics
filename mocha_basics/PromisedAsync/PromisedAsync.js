
let listOfEmployee = ['Robart','Shyam','Abhishek','April'];
function isEmployeePresent(employeeName){
    return new Promise((resolve)=>{
        setTimeout(function(){
            resolve(listOfEmployee.indexOf(employeeName)>=0)
        },1000)
    })
}



module.exports = isEmployeePresent;