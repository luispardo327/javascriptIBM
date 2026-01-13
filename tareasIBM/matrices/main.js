const employees = [
    {id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000, specialization:'javascript'},
    {id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000, specialization:'python'},
    {id: 3, name: 'bob Johnson', age: 35, department: 'Finance', salary: 60000, specialization:'java'},
    {id: 4, name: 'Luis Pardo', age: 27, department: 'Developent', salary: 70000, specialization:'javascript'}
];

function displayEmployees (){
    const totalEmployees = employees.map(employee => `<p>${employee.id}: ${employee.name}:  ${employee.department}:  $${employee.salary}: ${employee.specialization} </p>`).join('');
    document.getElementById('employeesDetails').innerHTML = totalEmployees;
}

function  calculateTotalSalaries (){
    const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
    alert(`Total Salaries: $${totalSalaries}`);
}

function displayHREmployees (){
    const hrEmplyees = employees.filter(employee => employee.department === 'HR');
    const hrEmployeesDisplay = hrEmplyees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.age} - ${employee.department} - $${employee.salary} ${employee.specialization} </p>`).join('');
    document.getElementById('employeesDetails').innerHTML =hrEmployeesDisplay;
}


function findEmployeeById (employeeId){
    const foundEmployee = employees.find(employee => employee.id === employeeId);
    if (foundEmployee){
        document.getElementById('employeesDetails').innerHTML =`<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.age} - ${foundEmployee.department} - $${foundEmployee.salary} ${foundEmployee.specialization} </p>`;
    } else{
        document.getElementById('employeesDetails').innerHTML = 'no se ha encontrado ningún empleado con este ID';
       }
}


function findSpecialization (){
    const output = document.getElementById('filterSpecialitazion').value;
    const  camelCase = output.toLowerCase();
    const findForSpecialization = employees.filter(employee => employee.specialization == camelCase);

    if (findForSpecialization.length > 0){
        const specializationDisplay = findForSpecialization.map((employee) => `<p>${employee.id}: ${employee.name}: ${employee.age} - ${employee.department} - $${employee.salary} ${employee.specialization} </p>`).join('');
    document.getElementById('employeesDetails').innerHTML = specializationDisplay;
    }else{
        document.getElementById('employeesDetails').innerHTML = "no se encontraron especialistas en esta area";
    }

    
}




