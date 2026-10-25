const container = document.getElementById("container");
const registerbtn = document.getElementById("register");
const loginbtn = document.getElementById("login");

// Panel toggle
registerbtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginbtn.addEventListener("click", () => {
  container.classList.remove("active");
});

// Login form logic
document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;

  if (email && pass) {
    // Simulate login success
    sessionStorage.setItem("isLoggedIn", "true");
    window.location.href = "community.html";
  } else {
    alert("Please enter both email and password!");
  }
});
