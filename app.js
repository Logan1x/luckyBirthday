const birthdayInput = document.getElementById("birthday-input");
const luckyNumberInput = document.getElementById("lucky-number-input");
const formSubmit = document.getElementById("form-submit");
const outputEl = document.getElementById("output-div");

formSubmit.addEventListener("submit", function handleFormSubmit(e) {
  // function to handle input submition
  e.preventDefault();
  document.body.classList.remove("bg-green-100");
  document.body.classList.remove("bg-red-100");
  const birthday = birthdayInput.value;
  const luckyNumber = luckyNumberInput.value;
  checkLuckyBirthday(birthday, luckyNumber);
});

function cleanDate(date) {
  // function to remove all non-numeric characters
  return date.replaceAll("-", "");
}

function checkLuckyBirthday(birthday, luckyNumber) {
  // function to check if birthday is lucky
  const birthdayClean = cleanDate(birthday);
  sum = 0;
  for (let i in birthdayClean) {
    sum = sum + Number(birthdayClean[i]);
  }

  isBirthdayLucky = sum % Number(luckyNumber);

  showOutput(isBirthdayLucky);
}

function showOutput(isBirthdayLucky) {
  // function to show output
  if (isBirthdayLucky) {
    outputEl.innerText = "Your Birthday is not lucky :(";
    document.body.classList.add("bg-red-100");
  } else {
    outputEl.innerText =
      "Consider Yourself Lucky, Not everyone has Birthday sum divided by Lucky Number";
    document.body.classList.add("bg-green-100");
  }
}

// navbar js

// get variables

const btn = document.querySelector("button.mobile-nav-btn");
const menu = document.querySelector(".mobile-nav");

// event toggle

btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  console.log("clicked");
});
