// Scroll logic, when you scroll up or down you go to a new panel.
function scrollToTwoUp() {
  if (event.deltaY < 0) {
    document.querySelector("#panel-2").scrollIntoView({
      behavior: "smooth",
    });
  }
}
function scrollToThreeUp() {
  if (event.deltaY < 0) {
    document.querySelector("#panel-3").scrollIntoView({
      behavior: "smooth",
    });
  } else {
    document.querySelector("#panel-1").scrollIntoView({
      behavior: "smooth",
    });
  }
}
function scrollToFourUp() {
  if (event.deltaY < 0) {
    document.querySelector("#panel-4").scrollIntoView({
      behavior: "smooth",
    });
  } else {
    document.querySelector("#panel-2").scrollIntoView({
      behavior: "smooth",
    });
  }
}
function scrollToFiveUp() {
  if (event.deltaY < 0) {
  } else {
    document.querySelector("#panel-3").scrollIntoView({
      behavior: "smooth",
    });
  }
}
