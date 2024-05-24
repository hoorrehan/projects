#! /usr/bin/env node 
// this line is called shebang, it tells the OS to run it with nodejs
//inmport the 'inquier' module, which is a command line interface for node.js
import inquirer from "inquirer";
// declare a constant 'answer' and assign it to the result of inquirer.prompt function.
const answers = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter your sentence to count the word: "
    }
]);
const words = answers.Sentence.trim().split(" ");
//print to the array of word to the console 
console.log(words);
//print the worrd count of the sentence to the console
console.log(`your sentence word count is ${words.length}`);
