var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roberto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);

//fight function (nowwith parameter for enemy's name)
var fight = function (enemyName) {
    while (enemyHealth > 0 && enemyHealth > 0) {
        //ask player if they want to fight or run
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'fight' or 'skip' tpo choose.");

        //if player picks "skip" confirm and then stop the loop
        if (promptFight === "skip" || promptFight === "SKIP") {
            //confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            //if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerName + ' has decided to skip this fight. Goodbye!')
                //subtract money from playerMoney for skipping
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney);
                break;
            }
        }
        // remove enemy's health by subtracting the amount set in the playerAttack varible
        enemyHealth = enemyHealth - playerAttack;
        console.log(
            playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
        );

        //check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " had died!");

            // award player money for winning            
            playerMoney = playerMoney + 20;

            // leave while () loop since enemy is dead
            break;
        } else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }

        //remove player's health by subtracting the amount set in the enemyAtack variable
        playerHealth = playerHealth - enemyAttack;
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );

        //check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
            // leave while() loop if player is dead
            break;
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    }
};

// function to start a new game
var startGame = function () {
    // reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;
    }

    // fight each enemy-robot by looping over them and fighting them one at a time
    for (var i = 0; i < enemyNames.length; i++) {
    //if player is still alive, keep fighting
    if (playerHealth > 0) {
        //let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
        window.alert('Welcome to robot Gladiators! Round' + (i + 1));

        // pick new enemy to fight based on the index of the enemyNames array    
        var pickedEnemyName = enemyNames[i];

        // rest enemyHealth before starting new fight
        enemyHealth = 50;

        // pass the pickedEnemyName variabl's value into the fight function, where it will assu,me the value of the enemyName parameter
        fight(pickedEnemyName);
    }

    // if player isn't alive, stop the game
    else {
        window.alert('You have lost your robot in battle! Game Over!');
        break;
    }

    //after loo ends, player is either out of health or enemies to fight. so run the endGame function
    endGame();
};

//function to end game the entire game
var endGame = function() {
    // if palyer is still alive, player wins
    if (playerHealth > 0) {
        window.alert("Great job, you've survived  the game! You now have a score of " + playerMoney + ".");
    }
    else {
        window.alert("You've lost your robot in battle.");
    }

    //ask player if they'd like to play aagain
    var playAgainConfirm = window.confirm('would you like to play again?');

    if (playAgainConfirm) {        
        startGame();
    } else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};




// start the game when the page loads
startGame();