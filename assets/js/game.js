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

var fight = function () {
    window.alert("Welcomt to Robot Gladiators");
     //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
        playerHealth = playerHealth - enemyAttack;
    // Log a resulting message to the console so we know that it worked.

    // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
        enemyHealth = enemyHealth - playerAttack;
    // Log a resulting message to the console so we know that it worked.
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " remaining."
    );
};

fight();
    // check var enemyHealth
    if (enemyHealth <= 0) {
        window.alert (enemyName + " has died!");
    }
    else {
        window.alert (enemyName + " still has " + enemyHealth + " health left.");
    }
    console.log (enemyName + " attacked " + playerName + ". " + playerName + " still has " + playerHealth + " health remaining.");
    if (playerHealth <= 0) {
        window.alert (playerName + " has died");
    }
    else {
        window.alert (playerName + " still has " + playerHealth + " health remaining.");
    }
