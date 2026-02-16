const form = document.getElementById("myForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const outputDiv = document.getElementById("output");
const title = document.getElementById("formTitle");
/* now from line 1 to 6 we have grap specified element by id we needed this refrence so that jave scrip can read the value update contest or insert message dynamicaly  */
// Array to store submissions
//const submissions = [];

form.addEventListener("submit", function (event) {
  event.preventDefault(); // stop page refresh

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  // Validate fields
  if (name === "" || email === "" || message === "") {
    alert("Please fill all fields");
    return;
  }

  // Add to submissions array
//  submissions.push({ name, email, message });

  // Clear previous output
  outputDiv.innerHTML = "";

  outputDiv.innerHTML = ""; // clear previous entry
  const div = document.createElement("div");
  div.innerHTML = `<strong>Name:</strong> ${name} <br>
                 <strong>Email:</strong> ${email} <br>
                 <strong>Message:</strong> ${message}`;
  outputDiv.appendChild(div);

  // Optional: show success message above the form title
  const successMessage = document.createElement("p");
  successMessage.textContent = "Form submitted successfully!";
  successMessage.style.color = "green";
  title.before(successMessage);

  // Log submission to console
  console.log("Form Submitted!");
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);

  // Clear form fields
    nameInput.value = "";
    emailInput.value = "";
    messageInput.value = "";
  });
