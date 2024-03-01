document.addEventListener("DOMContentLoaded", function () {
  var signupForm = document.getElementById("login-form");
  if (signupForm) {
    signupForm.addEventListener("submit", function (event) {
      event.preventDefault();

      email = document.getElementById("email").value;
      password = document.getElementById("password").value;

      var data = {
        email: email,
        password: password,
      };

      fetch("http://localhost:8080/auth/loginUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          if (response.ok) {
            console.log("Sign in successful");
            fetch("http://localhost:8080/auth/setData", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data),
            });
            window.location.href = "Main.html";
          } else {
            console.error("Sign in failed");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    });
  }
});
