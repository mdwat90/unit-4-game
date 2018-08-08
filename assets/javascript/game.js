$(document).ready(function () {
    console.log("ready!");


    $("#luke").data({
        "health": 100,
        "attack": 6
    })
    $("#obi-wan").data({
        "health": 120,
        "attack": 10
    })
    $("#darth-s").data({
        "health": 180,
        "attack": 15
    })
    $("#darth-m").data({
        "health": 150,
        "attack": 12
    })


    $("#enemiesToAttack").hide();
    $("#attack").hide();
    $("#defenderName").hide();
    $("#newGame").hide();

    function gameStart() {
        var target = $(event.target);
        if (target.is("#luke")) {
            $("#lukerow").removeClass("col-2");
            $("#lukerow").addClass("col-12");
            $("#obi-wan").appendTo("#enemies");
            $("#darth-s").appendTo("#enemies");
            $("#darth-m").appendTo("#enemies");
        }
        if (target.is("#obi-wan")) {
            $("#obi-wanrow").removeClass("col-2");
            $("#obi-wanrow").addClass("col-12");
            $("#luke").appendTo("#enemies");
            $("#darth-s").appendTo("#enemies");
            $("#darth-m").appendTo("#enemies");
        }
        if (target.is("#darth-s")) {
            $("#darth-srow").removeClass("col-2");
            $("#darth-srow").addClass("col-12");
            $("#luke").appendTo("#enemies");
            $("#obi-wan").appendTo("#enemies");
            $("#darth-m").appendTo("#enemies");
        }
        if (target.is("#darth-m")) {
            $("#darth-mrow").removeClass("col-2");
            $("#darth-mrow").addClass("col-12");
            $("#luke").appendTo("#enemies");
            $("#obi-wan").appendTo("#enemies");
            $("#darth-s").appendTo("#enemies");
        }
        $("#yourCharacterName").text("Your Character");
        $("#enemiesToAttack").show();
    }


    function chooseDefender() {
        var target = $(event.target);
        if (target.is("#luke")) {
            $("#lukerow").removeClass("col-2");
            $("#lukerow").addClass("col-12");
            $("#luke").appendTo("#defender");
        }
        if (target.is("#obi-wan")) {
            $("#obi-wanrow").removeClass("col-2");
            $("#obi-wanrow").addClass("col-12");
            $("#obi-wan").appendTo("#defender");
        }
        if (target.is("#darth-s")) {
            $("#darth-srow").removeClass("col-2");
            $("#darth-srow").addClass("col-12");
            $("#darth-s").appendTo("#defender");
        }
        if (target.is("#darth-m")) {
            $("#darth-mrow").removeClass("col-2");
            $("#darth-mrow").addClass("col-12");
            $("#darth-m").appendTo("#defender");
        }
        $("#attack").show();
        $("#defenderName").show();
    }



    $("#yourCharacter").click (function () {
        gameStart();
    });

    $("#enemies").click (function () {
        chooseDefender();
    });

    // function for when attack button is clicked:
    // player's base attack power brings down health of defender
    // player's health goes down by attack power of defender
    // increases player's attack power by base attack power
    $("#attack").click(function () {
        if ($("#yourCharacter").find("button").data("health") > 0) {
            console.log($("#yourCharacter").find("button").data("health") - $("#defender").find("button").data("attack"));
            console.log($("#defender").find("button").data("health") - $("#yourCharacter").find("button").data("attack"));
            console.log($("#yourCharacter").find("button").data("attack") + $("#yourCharacter").find("button").data("attack"));
        }
        
        // else if all enemies defeated, player wins
        else if ($("#enemies") === 0) {
            alert("You Won!");
            $("#newGame").show();
        } 
        
        // Else player's health goes down to 0 or below, game over
        else {
            alert("Game Over!");
            $("#newGame").show();
        }
    });


    // If defender's value goes down to zero and player's health is > 0, defender is defeated, select new enemy
    


    // To Do:
    // display "value" (health) attribute for each character
});