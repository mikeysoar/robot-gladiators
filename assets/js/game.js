var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roberto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames.length);
// console,log(enemyNames[0]);
// console.log(enemyNames[3]);

//fight function (nowwith parameter for enemy's name)
var fight = function(enemyName) {   
    while(enemyHealth > 0 && enemyHealth > 0) {
        //ask player if they want to fight or run
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'fight' or 'skip' tpo choose.");
        
//if player picks "skip" confirm and then stop the loop
        if (promptFight === "skip" || promptFight === "SKIP") {
            //confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            //if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerName + ' has decided to skip this fight. Goodbye!')
            }
            
            




        enenyHealth = enemyHealth - playerAttack;
        console.log (
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enenyHealth + " health remaining."
        );

        //check enemy's health
        if (enenyHealth <= 0) {
            window.alert(enemyName + " had died!");
            break;
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
        // if player picks to "skip" confirm and then stop the loop
        } if (promptFight === "skip" || promptFight == "SKIP") {
        //confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        //if yes (true), leave fight
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            //subtract money from playerMoney for skipping
            playerMoney = playerMoney - 10;
            console.log("playerMoney", playerMoney);
            break;            
        }
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
        
        // award player money for winning
        playerMoney = playerMoney + 20;

        //leave while() loop since enemy is dead
        break;
        } else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }

        //Subtract the value off 'enemyAttack from the value of 'playerHealth' and use that result to update the value in the 'playerHealth' varible.
        playerHealth = playerHealth - enemyAttack;        
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );

        //Check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
        break;        
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    }
};

    //execute function
for(var i = 0; i < enemyNames.length; i++) {    
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;    
    fight(pickedEnemyName);
}