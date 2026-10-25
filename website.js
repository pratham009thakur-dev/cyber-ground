// Script to handle interactive elements, such as "Read More" for updates.
document.addEventListener("DOMContentLoaded", () => {
    const readMoreElements = document.querySelectorAll(".read-more");

    readMoreElements.forEach((element) => {
        element.addEventListener("click", () => {
            alert("This is where the full update details will go!");
        });
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("join-community-btn");
    if (btn) {
      btn.addEventListener("click", () => {
        // Redirect to login page (you can change to check login in future)
        window.location.href = "login.html";
      });
    }
  });
  