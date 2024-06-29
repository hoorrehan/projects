import { differenceInSeconds } from "date-fns";
import { secondsInHour } from "date-fns/constants";
import inquirer from "inquirer"


const res = await inquirer.prompt({
    name: "userInput",
    type: "input",
    message: "Please Enter the amount of second",
});

let input = res.userInput

function startTime(val: number){
    const intTime = new Date().setSeconds(new Date().getSeconds() + val)
    const intervalTime = new Date(intTime);
      setInterval(() => {
    const currentTime = new Date()
    const timeDiff = differenceInSeconds(intervalTime,currentTime)
    if (timeDiff <= 0){
        console.log("Time has expired")
        process.exit()
    }
    const minutes = Math.floor((timeDiff%(3600*24))/3600)
    const seconds = Math.floor((timeDiff%3600)/60);
    console.log(`${minutes.toString().padStart(2 , "0")}: ${seconds}`);
    
      }, 1000)

    }
    startTime(input);