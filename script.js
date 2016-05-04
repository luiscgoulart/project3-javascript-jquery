
function resizeContainer() {

	var body = $("body");
	var header = $("#navbar-top");
	var footer = $("#navbar-bottom");
	var content = $("#container");

	var contentHeight = body.outerHeight() - header.outerHeight() - footer.outerHeight();

	content.outerHeight(contentHeight);

  console.log("body height: " + body.outerHeight());
  console.log("header height: " + header.outerHeight());
  console.log("footer height: " + footer.outerHeight());
  console.log("container height: " + contentHeight);
  console.log();
}

function makeLines(numLines, lineHeight) {
  var line = "<div></div>";
  for(var i = 0; i < numLines; i++) {
    $("#container").append(line);
  }

  $("#container").children().addClass("line-style");
  $("#container").children().css("height", "" + lineHeight + "px");

  console.log("numLines: " + numLines);
  console.log("lineHeight: " + lineHeight);
}

function makeCells(numCellsPerLine,  cellHeight, cellWidth) {
  var cell = "<div></div>";
  $("#container").find(".line-style").each(function() {
    for(var i = 0; i < numCellsPerLine; i++) {
      $(this).append(cell);
    }
    $(this).children().addClass("cell-style");
    $(this).children().css({"width": cellWidth + "px", "height": cellHeight + "px"});
  });
  console.log("numCellsPerLine: " + numCellsPerLine);
  console.log("cellHeight: " + cellHeight);
  console.log("cellWidth: " + cellWidth);
  console.log();
}

$(document).ready(function() {

  $("#navbar-top").css("margin-bottom", "10px");
  $("#container").css("padding-left", "15px");

  var numLines = 0;

  $("#container").empty();

  resizeContainer();

  var numCellsPerLine = 32;

  var cellWidth = Math.floor($("#container").width() / numCellsPerLine);
  var cellHeight = cellWidth;
  var lineHeight = cellHeight;
  numLines = Math.floor($("#container").height() / cellWidth);

  makeLines(numLines, lineHeight);
  makeCells(numCellsPerLine,  cellHeight, cellWidth);

	$(window).resize(function(){

    $("#container").empty();

		resizeContainer();

    numLines = 0;

    cellWidth = Math.floor($("#container").width() / numCellsPerLine);
    cellHeight = cellWidth;
    lineHeight = cellHeight;
    numLines = Math.floor($("#container").height() / cellWidth);

    makeLines(numLines, lineHeight);
    makeCells(numCellsPerLine,  cellHeight, cellWidth);
	});



  $("#container").on("mouseenter", ".cell-style", function() {
    $(this).addClass("mouse-enter");
  });
  $("#container").on("mouseleave", ".cell-style", function() {
    $(this).removeClass("mouse-enter");
  });

  $("#reset-grid").on("click", function() {

    numCellsPerLine = Number($("#num-cells").val());
    console.log($("#num-cells").val());
    $("#container").empty();

		resizeContainer();

    numLines = 0;

    cellWidth = Math.floor($("#container").width() / numCellsPerLine);
    cellHeight = cellWidth;
    lineHeight = cellHeight;
    numLines = Math.floor($("#container").height() / cellWidth);

    makeLines(numLines, lineHeight);
    makeCells(numCellsPerLine,  cellHeight, cellWidth);
  });
});
