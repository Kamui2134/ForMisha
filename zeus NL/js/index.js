window.addEventListener("load", () => {
  var $html = $("html"),
    $preloader = $(".preloader"),
    $popupOverlay = $(".popup_overlay"),
    $popupWindow1 = $("#popup_window_1"),
    $popupWindow2 = $("#popup_window_2"),
    $popupWindow3 = $("#popup_window_3");
  setTimeout(function () {
    $preloader.fadeOut();
    setTimeout(function () {
      $html.addClass("hide");
    }, 700);
  }, 700);
  var $button = $(".wheel_btn"),
    $spinner = $(".wheel_spinner");
  $button.click(function () {
    if ($button.hasClass("spin")) {
      spin();
    }
  });
  function spin() {
    $button.removeClass("spin").addClass("disabled");
    $spinner
      .addClass("wheel_spinner_animated_1")
      .removeClass("wheel_spinner_animated");
    setTimeout(function () {
      localStorage.currentSpin_2311 = "2311_spin";
      $(".bonus_1").fadeIn();
      $popupOverlay.fadeIn();
      $popupWindow2.fadeIn();
    }, 4500);
  }
  function spinSecond() {
    $button.removeClass("spin").addClass("disabled");
    $spinner
      .addClass("wheel_spinner_animated_2")
      .removeClass("wheel_spinner_animated");
    setTimeout(function () {
      localStorage.currentSpin_2311_second = "2311_spin_second";
      $popupOverlay.fadeIn();
      $popupWindow3.fadeIn();
    }, 4500);
  }
  switch (localStorage.currentSpin_2311) {
    case "2311_spin":
      $popupOverlay.fadeIn();
      $popupWindow2.fadeIn();
      $spinner
        .removeClass("wheel_spinner_animated")
        .css("transform", "rotate(854deg)");
      $button.removeClass("spin").addClass("disabled");
      break;
    default:
      break;
  }
  switch (localStorage.currentSpin_2311_second) {
    case "2311_spin_second":
      $popupOverlay.fadeIn();
      $popupWindow3.fadeIn();
      $spinner
        .removeClass("wheel_spinner_animated")
        .css("transform", "rotate(854deg)");
      $button.removeClass("spin").addClass("disabled");
      break;
    default:
      break;
  }
  switch (localStorage.is_game_2_2311) {
    case "2311_game_2":
      $popupOverlay.fadeIn();
      $popupWindow2.fadeIn();
      $popupWindow1.css("display", "none");

      break;
    default:
      break;
  }
  switch (localStorage.pre_final_step_2311) {
    case "2311_true":
      $popupWindow1.css("display", "none");
      $popupWindow2.css("display", "none");
      $popupOverlay.css("display", "none");
      break;
    default:
      break;
  }
  switch (localStorage.final_step_2311) {
    case "2311_true":
      localStorage.is_game_2_2311 = "";
      localStorage.currentSpin_2311 = "";
      $popupOverlay.fadeIn();
      $popupWindow3.fadeIn();
      $popupWindow1.css("display", "none");
      $popupWindow2.css("display", "none");
      break;
    default:
      break;
  }
  $("#popup_btn_1").click(function () {
    $popupWindow1.fadeOut();
    $popupOverlay.fadeOut();
  });
  $("#popup_btn_2").click(function () {
    $popupWindow2.fadeOut();
    $popupOverlay.fadeOut();
    $("#popup_window_2").fadeOut();
    spinSecond();
    localStorage.is_game_2_2311 = "2311_game_2";
  });
});
