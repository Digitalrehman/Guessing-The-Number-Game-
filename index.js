#! /usr/bin/env node
import inquirer from "inquirer";
let number = Math.floor(Math.random() * 10);
let answer = await inquirer.prompt([
    {
        name: "guessTheNumber",
        message: "Guess The Number 1-10 : ",
        type: "number",
    }
]);
while (number !== answer.guessTheNumber) {
    answer = await inquirer.prompt([
        {
            name: "guessTheNumber",
            message: "Guess The Number 1-10 : ",
            type: "number",
        }
    ]);
}
console.log("You Guessed The Right Number");
