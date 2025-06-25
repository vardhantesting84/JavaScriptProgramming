class employee
{

    id;
    name;
    designation;
    address;

    constructor(id,name,designation,address)
    {
        this.id = id
        this.name = name;
        this.designation = designation;
        this.address = address
    }


}

let emp1 = new employee(1,"Sachin","Test Manager","Bangalore");
let emp2 = new employee(2,"Dravid","Test Lead","Delhi");
let emp3 = new employee(3,"Dhoni","Test Enginner","Chennai");
let emp4 = new employee(4,"Kohli","Test Lead","Hyderabad");
console.log(emp1.id)
console.log(emp1.name)
console.log(emp1.address)
console.log(emp1.designation)
console.log(employee.CompanyName);

console.log(emp2.id)
console.log(emp2.name)
console.log(emp2.address)
console.log(emp2.designation)

console.log(emp3.id)
console.log(emp3.name)
console.log(emp3.address)
console.log(emp3.designation)

console.log(emp4.id)
console.log(emp4.name)
console.log(emp4.address)
console.log(emp4.designation)