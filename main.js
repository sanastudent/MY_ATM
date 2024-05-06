#!/usr/bin/env node
import inquirer from "inquirer";
let myBalance = 5000;
let myPin = 1234;
console.log("Welcome to the ATM Machine");
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        types: "number",
        message: "Enter your pin code",
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("Pin is correct,login successfully");
}
let operationAns = await inquirer.prompt([
    {
        name: "operation",
        type: "list",
        message: "Select an operation:",
        choices: ["Withdraw Amount", "Check Balance"]
    }
]);
if (operationAns.operation === "Withdraw Amount") {
    let withdrawAns = await inquirer.prompt([
        {
            name: "WithdrawMethod",
            type: "list",
            message: "Select a withdraw method",
            choices: ["Fast Cash", "Enter Amount"]
        }
    ]);
    if (withdrawAns.WithdrawMethod === "Fast Cash") {
        let fastCashAns = await inquirer.prompt([
            {
                name: "fastCash",
                type: "list",
                message: "Select your amount:",
                choices: ["1000", "2000", "5000", "20000", "50000"]
            }
        ]);
        if (fastCashAns.fastCash > myBalance) {
            console.log("Insufficient Balance");
        }
        else {
            myBalance -= fastCashAns.fastCash;
            console.log(`${fastCashAns.fastCash} withdraw Successfully`);
            console.log(`Your remaining balance is ${myBalance}`);
        }
    }
    else if (withdrawAns.WithdrawMethod === "Enter Amount") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter the amount to withdraw:"
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log("Insufficient Balance");
        }
        else {
            myBalance -= amountAns.amount;
            console.log(`${amountAns.amount} Withdraw Successfully`);
            console.log(`Your remaining balance is: ${myBalance}`);
        }
    }
    else if (operationAns.operation === "Check Balance") {
        console.log(`Your Account Balance is: ${myBalance}`);
    }
    ;
}
