function drawEtch(x) {
    if (isNaN(x)) {
        x = 16;
    }
    for (var i = 0; i < x; i++) {
        for (var j = 0; j < x; j++) {
            console.log("running");
            $("<div class='etchGrid'></div>").appendTo("#etch");
        }
        $("<br>").appendTo("#etch");
    }

}

function resetEtch() {
    $("#etch").empty();
}

$(document).ready(function() {
    drawEtch();
    $("#setSquares").click(function() {
        var num = Number(prompt("How many squares?"));
        resetEtch();
        drawEtch(num);
    });
    
    $(".etchGrid").hover(function() {
        $(this).addClass("paint");
    });
});
