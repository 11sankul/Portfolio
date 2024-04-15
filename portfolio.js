// portfolio.js

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Validation
    if (!name) {
      alert("Name is required");
      return;
    }

    if (!email) {
      alert("Email is required");
      return;
    } else {
      // Simple email validation
      const re =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!re.test(String(email).toLowerCase())) {
        alert("Email is not valid");
        return;
      }
    }

    if (!message) {
      alert("Message is required");
      return;
    }

    // Dummy AJAX request (replace with actual implementation)
    setTimeout(function () {
      alert(
        `Message sent!\nName: ${name}\nEmail: ${email}\nMessage: ${message}`
      );
      form.reset(); // Clear form after submission
    }, 1000);
  });
});
