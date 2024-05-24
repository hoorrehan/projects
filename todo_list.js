import inquirer from "inquirer";
let todos = [];
let addTask = await inquirer.prompt([
    {
        name: "todo",
        types: "input",
        message: "What you want to add in your Todos?"
    },
    {
        name: "addMore",
        type: "confirm",
        message: "Do you want to add more ?",
        default: "false"
    }
]);
todos.push(addTask.todo);
console.log(todos);
