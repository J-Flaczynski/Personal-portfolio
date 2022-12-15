// Scroll logic, when you scroll up or down you go to a new panel smoothly
function home() {
  if (event.deltaY < 0) {
  } else {
    document.querySelector("#about").scrollIntoView({
      behavior: "smooth",
    });
  }
}
function about() {
  if (event.deltaY < 0) {
    document.querySelector("#home").scrollIntoView({
      behavior: "smooth",
    });
  } else {
    document.querySelector("#hobbies").scrollIntoView({
      behavior: "smooth",
    });
  }
}
function hobbies() {
  if (event.deltaY < 0) {
    document.querySelector("#about").scrollIntoView({
      behavior: "smooth",
    });
  } else {
    document.querySelector("#projects").scrollIntoView({
      behavior: "smooth",
    });
  }
}
function projects() {
  if (event.deltaY < 0) {
    document.querySelector("#hobbies").scrollIntoView({
      behavior: "smooth",
    });
  } else {
    document.querySelector("footer").scrollIntoView({
      behavior: "smooth",
    });
  }
}
function contact() {
  if (event.deltaY < 0) {
    document.querySelector("#projects").scrollIntoView({
      behavior: "smooth",
    });
  }
}
// Smooth transitioning to another page
function goHome() {
  document.querySelector("#home").scrollIntoView({
    behavior: "smooth",
  });
}
function goAbout() {
  document.querySelector("#about").scrollIntoView({
    behavior: "smooth",
  });
}
function goHobbies() {
  document.querySelector("#hobbies").scrollIntoView({
    behavior: "smooth",
  });
}
function goProjects() {
  document.querySelector("#projects").scrollIntoView({
    behavior: "smooth",
  });
}
function goContact() {
  document.querySelector("footer").scrollIntoView({
    behavior: "smooth",
  });
}
