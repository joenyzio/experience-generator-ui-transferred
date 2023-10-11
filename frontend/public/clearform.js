function clearForm() {
  $("input[id=actormbox]").prop("checked", true);
  $("input[id=actoraccount]").prop("checked", false);
  $("input[id=objectactivity]").prop("checked", true);
  $("input[id=objectagent]").prop("checked", false);
  $("input[id=objectstmtref]").prop("checked", false);
  $("input[name=resultcbx]").prop("checked", false);
  $("input[name=contextcbx]").prop("checked", false);
  $("#results").empty();
}
