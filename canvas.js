$("#canvas").click(function (event) {
    // Convert page coordinates to coordinates inside this area.
    let x = event.pageX - $("#canvas").offset().left;
    let y = event.pageY - $("#canvas").offset().top;

    // Create a new mark for every click, keeping the earlier marks.
    let mark = $("<div class='mark'></div>");
    mark.css("left", x);
    mark.css("top", y);
    $("#canvas").append(mark);
});