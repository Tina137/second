// №1
let formOne = document.querySelector(".myformone");
formOne.addEventListener("submit", (e) => {
  e.preventDefault();
  let text = e.target.elements.text.value;
  switch (text) {
    case "понеділок":
    case "вівторок":
    case "середа":
    case "четверг":
    case "п'ятниця":
      alert("робочий день");
      break;
    case "субота":
    case "неділя":
      alert("вихідний");
      break;
  }
});
// №2
let formTwo = document.querySelector(".myformtwo");
formTwo.addEventListener("submit", (e) => {
  e.preventDefault();
  let text = e.target.elements.text.value;
  let atum = [9, 10, 11];
  let winter = [12, 1, 2];
  let spring = [3, 4, 5];
  let sumer = [6, 7, 8];
  winter.forEach((n) => {
    if (text == n) {
      alert("зима");
    }
  });
  atum.forEach((n) => {
    if (text == n) {
      alert("осінь");
    }
  });
  spring.forEach((n) => {
    if (text == n) {
      alert("весна");
    }
  });
  sumer.forEach((n) => {
    if (text == n) {
      alert("літо");
    }
  });
});
// №3
let formTree = document.querySelector(".myformtree");
formTree.addEventListener("submit", (e) => {
  e.preventDefault();
  let indexNumb = e.target.elements.text.value;
  let conv = Number(indexNumb);
  let year = [, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  alert(year[conv]);
});
// #4
let formFour = document.querySelector(".myformfour");
formFour.addEventListener("submit", (e) => {
  e.preventDefault();
  let color = e.target.elements.text.value;
  switch (color) {
    case "червоний":
      alert("стоп");
      break;
    case "зелений":
      alert("йти");
      break;
    case "жовтий":
      alert("чекати");
      break;
  }
});
// #5
let formFive = document.querySelector(".myformfive");
formFive.addEventListener("submit", (e) => {
  e.preventDefault();
  let firstNumb = Number(e.target.elements.textone.value);
  let sign = e.target.elements.sign.value;
  let secondNumb = Number(e.target.elements.texttwo.value);
  if (sign === "/" && secondNumb === 0) {
    alert("Ділення на нуль неможливе.");
  }
  switch (sign) {
    case "+":
      alert(firstNumb + secondNumb);
      break;
    case "-":
      alert(firstNumb - secondNumb);
      break;
    case "*":
      alert(firstNumb * secondNumb);
      break;
    case "/":
      alert(firstNumb / secondNumb);
      break;
  }
});
