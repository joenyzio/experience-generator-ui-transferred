var editor = ace.edit("stmtinput");
editor.$blockScrolling = Infinity;
editor.setTheme("ace/theme/twilight");
editor.getSession().setMode("ace/mode/json");

editor.getSession().on("change", function (e) {
  $("#results").empty();
});
