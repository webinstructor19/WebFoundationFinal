/**
 * Employee
 *  id
 *  username
 *  salary 
 */

// class Employee{
//     // Variable => attribute , data member , fields 
//     id;
//     username;
//     salary;

//     // action ==> function
//     getEmployeeInfo(){}

// }

// const ahmed = new Employee()

// const sana = new Employee()
// [{} , {} , {}]
const employee1 = {
    id : 1 , 
    name : "ali" , 
    salary : 5000 , 
    getEmployeeInfo : function(){
        return `Employee Id = ${this.id} \n Employee Name is ${this.name} \n Employee Salary is ${this.salary}`
    }
}


console.log(employee1.getEmployeeInfo())



const employees = [
    {
        id : 1 , 
        name : 'sana'
    },
    {
        id: 2 ,
        name : 'ahmed'
    }
]