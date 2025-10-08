// constant variables
    const employee1 = "MARK";
    const employee2 = "JUNE";
    const employee3 = "MARIA";
    const taxRate = 0.10;

// input
    let employee1Rate = Number(prompt(employee1 + "'s rate per day is: "));
    let employee2Rate = Number(prompt(employee2 + "'s rate per day is: "));
    let employee3Rate = Number(prompt(employee3 + "'s rate per day is: "));

    let employee1DaysWorked = Number(prompt(employee1 + "'s no. of days worked  is: "));
    let employee2DaysWorked = Number(prompt(employee2 + "'s no. of days worked is: "));
    let employee3DaysWorked = Number(prompt(employee3 + "'s no. of days worked is: "));

// Salary Calculation
    let employee1Salary = employee1Rate * employee1DaysWorked;
    let employee2Salary = employee2Rate * employee2DaysWorked;
    let employee3Salary = employee3Rate * employee3DaysWorked;

    console.log("Therefore, " + employee1 + " total salary is " + employee1Salary);
    console.log("Therefore, " + employee2 + " total salary is " + employee2Salary);
    console.log("And, " + employee3 + " total salary is " + employee3Salary);

// tax calculation
    let employee1Tax = employee1Salary * taxRate;
    let employee2Tax = employee2Salary * taxRate;
    let employee3Tax = employee3Salary * taxRate;

    console.log(employee1 + "'s tax amount " + employee1Tax);
    console.log(employee2 + "'s tax amount " + employee2Tax);
    console.log(employee3 + "'s tax amount " + employee3Tax);

// total tax amount of all employees
    let totalTaxAmount = employee1Tax + employee2Tax + employee3Tax;
    console.log("Therefore, their total tax amount is " + totalTaxAmount);
// total income of all employees after tax
    let totalIncomeAfterTax = (employee1Salary - employee1Tax) + (employee2Salary - employee2Tax) + (employee3Salary - employee3Tax);
    console.log("And, their total net income is " + totalIncomeAfterTax); 

// net income of each employee after tax
    let employee1NetIncome = employee1Salary - employee1Tax;
    let employee2NetIncome = employee2Salary - employee2Tax;
    let employee3NetIncome = employee3Salary - employee3Tax;

    console.log(employee1 + "'s net income: " + employee1NetIncome);
    console.log(employee2 + "'s net income: " + employee2NetIncome);
    console.log(employee3 + "'s net income: " + employee3NetIncome);