var outputResults = function (resp, thing) {
  var spanclass = "text-info";
  var text = "";
  if (resp.status >= 400) {
    spanclass = "text-danger";
    text = thing.totalErrors > 1 ? "Errors: " : "Error: ";
    for (var res in thing.results) {
      text +=
        "<br>" +
        (thing.results[res].instance.id
          ? thing.results[res].instance.id
          : "Statement " + res);
      for (var err in thing.results[res].errors) {
        text += "<br>&nbsp;&nbsp;" + thing.results[res].errors[err].trace;
        text +=
          "<br>&nbsp;&nbsp;&nbsp;&nbsp;" +
          thing.results[res].errors[err].message;
      }
    }
  } else {
    if (resp.responseText) text = "Successfully sent " + resp.responseText;
    else text = thing;
  }

  var p = $("<p>").addClass(spanclass).html(text);
  $("#results").append(p);
};

$("#sendbtn").on("click", function (ev) {
  var instmt = JSON.parse(editor.getValue());

  if (Array.isArray(instmt)) {
    console.log("sending array - multi stmt... ");
    wrapper.sendStatements(instmt, outputResults);
  } else {
    console.log("sending object - single stmt... ");
    wrapper.sendStatement(instmt, outputResults);
  }
});

$("#createstmtbtn").on("click", function (e) {
  editor.setValue(JSON.stringify(mkstmt(), null, 4));
  clearForm();
});

$("#clearbtn").on("click", function (e) {
  editor.setValue("");
  clearForm();
});

$("#makestmtform").on("change", function (ev) {
  ev.preventDefault();
  var actor = $("input[name=actorradio]:checked").val();
  var object = $("input[name=objectradio]:checked").val();
  var reschkd = $("input[name=resultcbx]:checked")
    .map(function () {
      return this.value;
    })
    .get();
  var ctxchkd = $("input[name=contextcbx]:checked")
    .map(function () {
      return this.value;
    })
    .get();
  var opts = {
    actor: actor,
    object: object,
    result: reschkd,
    ctx: ctxchkd,
  };
  editor.setValue(JSON.stringify(mkstmt(opts), null, 4));
});
