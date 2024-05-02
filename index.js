#! /usr/bin/env node
import inquirer from "inquirer";
//initialize user balance and pin code
let myBalance = 10000;
let myPin = 2206;
//Print Welcome Message
console.log("Welcome to Ahmed Raza ATM-Machine");
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your pin code:",
    },
]);
if (pinAnswer.pin === myPin) {
    console.log("pin is correct, Login Successfully!");
    console.log(`Current Account balance is  ${myBalance}`);
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "Select an Operation:",
            choices: ["Withdraw Amount", "Check Balance"],
        },
    ]);
    if (operationAns.operation === "Withdraw Amount") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter the amount to Withdraw:",
            },
        ]);
        if (amountAns.amount > myBalance) {
            console.log("Insufficient Balance");
        }
        else {
            myBalance -= amountAns.amount;
            console.log(`${amountAns.amount} Withdraw Successfully`);
            console.log(`your remaining balance is: ${myBalance}`);
        }
    }
    else if (operationAns.operation === "Check Balance") {
        console.log(`your account Balance is ${myBalance}`);
    }
}
else {
    console.log("pin is incorrect Try Again!");
}
