#! /usr/bin/env node
import inquirer from "inquirer";

let myBalance = 10000; // Dollar 
let myPin = 1234;

let pinAnswer = await inquirer.prompt(
  [
    {
        name: "pin",
        message: "enter your pin",
        type: "number"
    }
  ]  
);
// 12345 === 1234 - false
if (pinAnswer.pin === myPin){
    console.log("Correct pin code!!!");
    
    let operationAnswer = await inquirer.prompt(
        [
            {

                name: "operation",
                message: "please select option",
                type: "list",
                choices: ["withdraw" , "check balance"]
            }
        ]
    );

    console.log(operationAnswer);

    if (operationAnswer === "withdraw"){
       let amountAns = await inquirer.prompt(
            [

               {
                  
                name: "amount",
                message: "enter your name",
                type: "number"
               }  

            ]        
       ) 
       // = , -= , +=
       console.log(amountAns.amount);
       
    }

}

else{
    console.log("Incoreect pin number");
    
}


