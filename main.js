import inquirer from "inquirer";
//---games variable---
let enemies = ["Skeleton", "Zombie", "Warrior", " assassin"];
let maxEnemyHealth = 75;
let enemyAttackDamageToHero = 25;
//---player variable---
let heroHealth = 100;
let heroAttackDamageToEnemy = 50;
let numHealthPotion = 3;
let healthPotionHealAmount = 30;
let heathPotionDropChance = 70;
//---While loop condition---
let gameRunning = true;
console.log("Wellcome to Deadzone!");
Game: while (gameRunning) {
    let enemyHealth = Math.floor(Math.random() * maxEnemyHealth + 1);
    let enemyIndex = Math.floor(Math.random() * enemies.length);
    let enemy = enemies[enemyIndex];
    console.log(`# ${enemy} has appeared #\n`);
    while (enemyHealth > 0) {
        console.log(`Your Health ${heroHealth}`);
        console.log(`${enemy} Health: ${enemyHealth}`);
        let options = await inquirer.prompt({
            name: "ans",
            type: "list",
            message: "What would you like to do?",
            choices: ["1. Attack", "2. Take Health Potion", "3. Run"]
        });
        if (options.ans === "1. Attack") {
            let heroAttackDamageToEnemy = 50;
            let damageToEnemy = Math.floor(Math.random() * heroAttackDamageToEnemy + 1);
            let damageToHero = Math.floor(Math.random() * enemyAttackDamageToHero + 1);
            enemyHealth -= damageToEnemy;
            heroHealth -= damageToHero;
            console.log(`You strike the ${enemy} for ${damageToEnemy}`);
            console.log(`${enemy} strike you for ${damageToHero} damage`);
            if (heroHealth < 1) {
                console.log("You have taken too much damage. you are too weak to continue.");
                break;
            }
        }
        else if (options.ans === "2. Take ") {
            if (numHealthPotion > 0) {
                heroHealth += healthPotionHealAmount;
                numHealthPotion--;
                console.log(`you use health potion for ${healthPotionHealAmount}`);
                console.log(`you now have ${heroHealth} health`);
                console.log(`you have ${numHealthPotion} health potions left.`);
            }
            else {
                console.log(`you have no health potions left. defeat enemy for a chance get health potion`);
            }
        }
        else if (options.ans === "3. Run") {
            console.log(`you run away from ${enemy}`);
            continue Game;
        }
    }
    if (heroHealth < 1) {
        console.log(`you are out from battle. you are too weak.`);
        break;
    }
    console.log(`${enemy} was defeated!`);
    console.log(`you have ${heroHealth} health.`);
    let randomNumber = Math.floor(Math.random() * 100 + 1);
    if (randomNumber < heathPotionDropChance) {
        numHealthPotion++;
        console.log(`enemy give you health potion`);
        console.log(`your health is ${heroHealth}`);
        console.log(`your health potion is ${numHealthPotion}`);
    }
    let userOption = await inquirer.prompt({
        name: "ans",
        type: "list",
        message: "what would you like to do now",
        choices: ["1. Continue", "2. Exit"]
    });
    if (userOption.ans === "1. Continue") {
        console.log("you are continue on your advanture");
    }
    else {
        console.log("you successfully Exit from DeadZone");
        break;
    }
    console.log("Thanks for playing.");
}
