function myFunction() {
  const a = document.getElementById("199");
  if (a.innerHTML === "19.99") {
    a.innerHTML = "199.99";
  } else {
    a.innerHTML = "19.99";
  }
  const b = document.getElementById("249");
  if (b.innerHTML === "24.99") {
    b.innerHTML = "249.99";
  } else {
    b.innerHTML = "24.99";
  }
  const c = document.getElementById("399");
  if (c.innerHTML === "39.99") {
    c.innerHTML = "399.99";
  } else {
    c.innerHTML = "39.99";
  }
}