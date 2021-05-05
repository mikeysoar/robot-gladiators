var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roberto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

//Game States
// "WIN" - Player robot has defeted all enemy-robots
//  * Fight all enemy-robot's
//  * Defeat each enemy-robot      
// "LOSE" - Player robot's health is zero or less

var fight = function(enemyName) {
    // fight function statements
    window.alert("Welcome to Robot Galdiators!'");

    //Alert players that they are startying the round
    window.alert("Welcome to Robot Gladiators!");

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'fight' or 'skip' tpo choose.");
    
    console.log(promptFight);

    if (promptFight === "fight" || promptFight === "FIGHT") {
        // remove enemy's health by subtracting the amount set in the playerAttack varible
        enenyHealth = enemyHealth - playerAttack;
        console.log (
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enenyHealth + " health remaining."
        );

        //check enemy's health
        if (enenyHealth <= 0) {
            window.alert(enemyName + " had died!");
        } else {
            window.alert(enemyName + " still has " + enenyHealth + " health left.");
        }

        //remove player's health by subtracting the amount set in the enemyAtack variable
        playerHealth = playerHealth - enemyAttack;
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );

        //check player's health
        if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
        // if player choses to skip
    } else if (promptFight === "skip" || promptFight == "SKIP") {
        //confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        //if yes (true), leave fight
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            //subtract money from playerMoney for skipping
            playerMoney = playerMoney - 2;            
        }
        // if no (false), ask question again by running fight() again
        else {
            fight()
        }
    }
       
     else {
        window.alert("You need to choose a valid option. Try agian!");
    }

    //Subtract the value of the 'playerAttack' from the value of 'enemyhealth' and use the result to update the value in the 'enemyHealth' varible
    enemyHealth = enemyHealth - playerAttack;
    //Log a resulting message to the console so we know that it worked.
    console.log (
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );

    //check enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    //Subtract the value off 'enemyAttack from the value of 'playerHealth' and use that result to update the value in the 'playerHealth' varible.
    playerHealth = playerHealth - enemyAttack;
    
    //Log a resulting message to the console se we know it worked.
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );

    //Check player's health
    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
    }
    else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
};

    //execute function
for(var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
}