// Copyright (c) 2023 by Noah Smith All rights reserved
//
// Created By: Noah Smith
// Created On: March 2023
// This file contains the JS functions for index.html

  function calculatePay() {
    
    // this function gets number of hours worked and their hourly rate
    const TAX_RATE = 0.2005
    
    let hoursWorked = parseFloat(document.getElementById("hours-worked").value)
    // get hours worked from text field and cast it to integer
  
    let hourlyRate = parseFloat(document.getElementById("hourly-rate").value)
    // get hourly rate from text field and cast it to integer

    let totalPay = hoursWorked * hourlyRate;
    let tax = totalPay * TAX_RATE;
    let takeHomeSalary = totalPay - tax
    
    // display pay and how much the government will take
    document.getElementById("take-home-salary").innerHTML = "Your pay will be $" + takeHomeSalary.toFixed(2) + "."
    document.getElementById("tax-paid").innerHTML = " The government will take $" + tax.toFixed(2) + "."
}