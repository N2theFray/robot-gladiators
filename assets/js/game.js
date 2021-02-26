// window.alert("This is an alert! Javascript is running!");
// var playerName = window.prompt ("What is your robot's name?");
// //window.alert(playerName);
// //the following is so we don't get 1000 prompts
// console.log(playerName);
// console.log("This logs a string, good for leaving yourself messages");
// //this will do math and log 20
// console.log(10 + 10);
// // what is this?
// console.log("Our robot's name is " + playerName);
// // another example of how to use console log with var
// console.log("Your robot, " + playerName ", has won!!");
// // this creatres a function named "fight"
// function fight () {
//     window.alert ("The fight has begun!");
// }
// //fight ();
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

//you can also log multiple values at once like this
//console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

// player money
var playerMoney = 10;

var fight = function () {
    window.alert("Welcomt to Robot Gladiators");

    var promptFight = window.prompt("Would you like to FIGHT or SKIP the battle? Enter 'FIGHT' or 'SKIP' to choose");
    // if player chooses to fight, the fight 
    if (promptFight === "fight" || promptFight === "FIGHT") {
        //remove enemy's health by subtracting the amound set in the playerAttack variable
        enemyHealth = enemyHealth - playerAttack;
        console.log (
            playerName + " attacked " + enemyName + ". " + enemyName + " still has " + enemyHealth + " health remainig."
        );

        // check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
        } else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }

        //remove player's health by subtracting the amount set in enemyAttack variable
        playerHealth = playerHealth - enemyAttack;
        console.log (enemyName + " attacked " + playerName + ". " + playerName + " still has " + playerHealth + " health left.");

        if (playerHealth <= 0) {
            window.alert (playerName + " has died!");
        } else {
            window.alert (playerName + " still has " + playerHealth + " health left.");
        }
        //if player chooses to skip the fight
    } else if (promptFight === "skip" || promptFight === "SKIP") {
            // confirm player wants to skip the fight
            var confirmSkip = window.confirm("Are you sure you want to quit?");

            //if yes  (true), leave fight
            if (confirmSkip){
                window.alert(playerName + " has decided to skip. Goodbye");
                //penalize the skip
                playerMoney = playerMoney - 2;
            } else {
                fight ();
            }

    } else {
            window.alert("You need to choose a valid option. Try again!")
    }

};

fight();
    // check var enemyHealth
    // if (enemyHealth <= 0) {
    //     window.alert (enemyName + " has died!");
    // }
    // else {
    //     window.alert (enemyName + " still has " + enemyHealth + " health left.");
    // }
    // console.log (enemyName + " attacked " + playerName + ". " + playerName + " still has " + playerHealth + " health remaining.");
    // if (playerHealth <= 0) {
    //     window.alert (playerName + " has died");
    // }
    // else {
    //     window.alert (playerName + " still has " + playerHealth + " health remaining.");
    // }
