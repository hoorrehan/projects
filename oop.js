import inquirer from "inquirer";
class Student {
    name;
    constructor(n) {
        this.name = n;
    }
}
class Person {
    student = [];
    addStudent(obj) {
        this.student.push(obj);
    }
}
const persons = new Person();
const programStart = async (persons) => {
    console.log("Welcome!");
    const ans = await inquirer.prompt({
        name: "select",
        type: "list",
        message: "Who would you like to interact with?",
        choices: ["staff", "student", "exit"]
    });
    if (ans.select == "staff") {
        console.log("You approch the staff room. Please feel free to ask any questions");
    }
    else if (ans.select == "student") {
        const ans = await inquirer.prompt({
            name: "Student",
            type: "input",
            message: "Enter the name of the student you wish to engage with:"
        });
        const student = persons.student.find(val => val.name == ans.Student);
        if (!student) {
            const name = new Student(ans.Student);
            persons.addStudent(name);
            console.log(`Hello i am ${Student.name}. Nice to meet you!`);
            console.log("New student added");
            console.log("Current student list:");
            console.log(persons.student);
        }
        else {
            console.log(`Hello i am ${Student.name}. Nice to see you again!`);
            console.log("Existing student list:");
            console.log(persons.student);
        }
    }
    else if (ans.select == "exit") {
        console.log("Existing the program...");
    }
};
programStart(persons);
