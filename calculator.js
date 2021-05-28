$(document).ready(function () {
  $(".btn-outline-light").click(function () {

    if ($("input").hasClass(".needClear")) {
      if ($("this").hasClass(".btn-num")) {
        $("input").val("");
      }
      if ($("this").hasClass(".btn-act")) {
        $("input").val("");
      }
    }

    // The data() method attaches data to, or gets data from, selected elements.
    let current_val = $("input").val();
    let val = $(this).data("val");
    $("input").val(current_val + val);
  });

  $(".btn-outline-success").click(function () {
    $("input").val("");
  });

  $(".btn-outline-warning").click(function () {
    let val = $("input").val().split(" ");
    let result = "Error";

    if (val[1] == "/") {
      result = parseInt(val[0]) / parseInt(val[2]);
    }
    if (val[1] == "x") {
      result = parseInt(val[0]) * parseInt(val[2]);
    }
    if (val[1] == "+") {
      result = parseInt(val[0]) + parseInt(val[2]);
    }
    if (val[1] == "-") {
      result = parseInt(val[0]) - parseInt(val[2]);
    }

    $("input").val(result);
    $("input").addClass("needClear");
  });
});
