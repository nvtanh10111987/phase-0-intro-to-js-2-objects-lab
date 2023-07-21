// Write your solution in this file!
let employee = {
    name: "Van",
    streetAddress: "566 homer street"
};
function updateEmployeeWithKeyAndValue(employee, key, value){
    let newEmployee = {...employee};

newEmployee[key] = value
return newEmployee
};
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
employee[key] = value
return employee
}
function deleteFromEmployeeByKey(employee, key){
    let deletedEmployee = {...employee}
    delete deletedEmployee[key]
    return deletedEmployee
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return employee
}