function drawEtch(x) {
    var boxHeight = 400 / x;
    var boxWidth = 400 / x;

    if (isNaN(x)) {
        x = 16;
    }
    for (var i = 0; i < x; i++) {
        for (var j = 0; j < x; j++) {
            $("<div class='etchGrid'></div>").appendTo("#etch");
        }
        $("<tr>").appendTo("#etch");
    }
    // $(".etchGrid").css({"height":"boxHeight","width":"boxWidth"})
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
