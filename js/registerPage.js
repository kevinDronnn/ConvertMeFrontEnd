document
  .getElementById("signup-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var data = {
      email: email,
      password: password,
    };
    fetch("http://localhost:8080/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Registration successful");
          window.location.href = "loginPage.html";
        } else {
          console.error("Registration failed");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });
