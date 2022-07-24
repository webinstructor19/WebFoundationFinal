const students = ['Adham' , 'Ebrahem' , 'Ali'];
students.push('aida')
students.unshift('mohamed')
students.sort()
// for(let i = 0; i < students.length; i++){
//     console.log(`Welcome ${students[i]}`)
// }

for(let std of students){
    console.log(`Welcome ${std}`)
}

for(let key in students){
    console.log(`Key No. ${key}`)
}

// students.forEach(function(std){
//     console.log(std)
// });

salaries = [2000 , 3000 , 5000 , 10000];

// new array 
const newSalaries = salaries.map(salary => salary * 2)