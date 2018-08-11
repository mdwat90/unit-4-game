$(document).ready(function () {
    console.log("ready!");


    var characterAttack;
    var characterHealth;
    var defenderAttack;
    var defenderHealth;


    $("#luke").data({
        "health": 100,
        "attack": 6,
    })
    $("#obi-wan").data({
        "health": 120,
        "attack": 10,
    })
    $("#darth-s").data({
        "health": 180,
        "attack": 15,
    })
    $("#darth-m").data({
        "health": 150,
        "attack": 12,
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
        characterHealth = $("#yourCharacter").find("button").data("health");
        characterAttack = $("#yourCharacter").find("button").data("attack");
        $("#characterHealth").text("Health: " + characterHealth).show();
        $("#characterAttack").text("Attack Strength: " + characterAttack).show();
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
        defenderAttack = $("#defender").find("button").data("attack");
        defenderHealth = $("#defender").find("button").data("health");
        $("#defenderHealth").text("Health: " + defenderHealth).show();
        $("#defenderAttack").text("Attack Strength: " + defenderAttack).show();
    }


    $("#yourCharacter").click(function () {
        gameStart();
    });

    $("#enemies").click(function () {
        chooseDefender();
        // turns off click ability after enemy has been chosen
        $("#enemies").off("click");
    });

    // function for when attack button is clicked:
    // player's base attack power brings down health of defender
    // player's health goes down by attack power of defender
    // increases player's attack power by base attack power
    $("#attack").click(function () {
        characterHealth -= defenderAttack;
        defenderHealth -= characterAttack;
        characterAttack += $("#yourCharacter").find("button").data("attack");
        $("#characterHealth").text("Health: " + characterHealth);
        $("#characterAttack").text("Attack Strength: " + characterAttack);
        $("#defenderHealth").text("Health: " + defenderHealth);
        $("#defenderAttack").text("Attack Strength: " + defenderAttack);

        $("#defender").fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

        // // If defender's value goes down to zero and player's health is > 0, defender is defeated, select new enemy
        if (defenderHealth <= 0 && characterHealth >= 0) {
            alert("Choose new defender!");
            $("#defender").find("button").remove();
            $("#defenderHealth").text("Health: " + defenderHealth).hide();
            $("#defenderAttack").text("Attack Strength: " + defenderAttack).hide();
            $("#enemies").click(function () {
                chooseDefender();
                // turns off click ability after enemy has been chosen
                $("#enemies").off("click");
            });
        }
        // If character health is 0, game over 
        else if (characterHealth <= 0) {
            alert("You Lose!");
            $("#newGame").show();
            $("#characterHealth").text("Health: " + characterHealth).hide();
            $("#characterAttack").text("Attack Strength: " + characterAttack).hide();
            $("#defenderHealth").text("Health: " + defenderHealth).hide();
            $("#defenderAttack").text("Attack Strength: " + defenderAttack).hide();
            $("#attack").hide();
            $("#defenderName").hide();
            $("#enemiesToAttack").hide();
            $("#defender").hide();
            $("#enemies").hide();
        }

        // if no more defenders in the "enemies to attack" div, you win
        // if ($("#enemies")) {
        //     alert("You Won!");
        //     $("#newGame").show();
        // }

        // if no defender in the "defender" div, you can not execute attack button

    });

    // play music automatically on page load

    $("#newGame").click(function () {
        location.reload(true);
    });
});