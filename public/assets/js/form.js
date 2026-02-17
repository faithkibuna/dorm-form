const form = document.getElementById("age Form");
const nameInput = document.getElementById("name");
const birthYearInput = document.getElementById("birthyear");
const resultDiv = document.getElementById("result");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // stop page refresh

  const birthYear = parseInt(birthYearInput.value);
  const currentYear = new Date().getFullYear();

  const age = currentYear - birthYear;
  const willTurn = age;

  // Check odd or even
  const oddOrEven = age % 2 === 0 ? "Even" : "Odd";

  // Check leap year
  const isLeap =
    (birthYear % 4 === 0 && birthYear % 100 !== 0) || birthYear % 400 === 0;

  // Check generation
  let generation = "";

  if (birthYear >= 1997 && birthYear <= 2012) {
    generation = "Gen Z";
  } else if (birthYear >= 1981 && birthYear <= 1996) {
    generation = "Millennial";
  } else if (birthYear >= 1965 && birthYear <= 1980) {
    generation = "Gen X";
  } else {
    generation = "Other Generation";
  }

  resultDiv.innerHTML = `
    <p>Current Age: ${age}</p>
    <p>This age is: ${oddOrEven}</p>
    <p>Generation: ${generation}</p>
    <p>Born in Leap Year: ${isLeap ? "Yes" : "No"}</p>
    
  `;
});
