import inquirer from "inquirer"
 
// 1) computer will generate a random number - done

// 2) user input for guessing number - done

// 3) compare user input with computer generated number and shoe result - done

const randomNumber = Math.floor(Math.random() * 5 + 2 );

const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number in between 1 to 7 ",
    },
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("congratulation! you guess the right number.");
}else {
    console.log("you guessed wrong number");
}
