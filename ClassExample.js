class employee
{

    id;
    name;
    designation;
    address;
    salary;
    mobile_number;

    getAddress()
    {
        return this.address;
    }

}

//let/var obj = new class_name()
let emp1 = new employee();//memory will be occupied
emp1.name = "Sachin";
emp1.id = 1;
emp1.designation = "Test Manager"
emp1.address = "Bangalore"
emp1.salary = 35000.00
emp1.mobile_number = "91234"

console.log(emp1.id)
console.log(emp1.name)
console.log(emp1.address)
console.log(emp1.designation)

let address = emp1.getAddress();
console.log(address);

let obj = new employee();
obj.id = 2;
obj.name="Dravid";


getAddress();