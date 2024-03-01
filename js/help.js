document.addEventListener("DOMContentLoaded", function () {
  const sendButton = document.querySelector(".sendEmail");

  sendButton.addEventListener("click", function (event) {
    event.preventDefault();

    // Получение значений из HTML-элементов
    const email = document.getElementById("emailInput").value;
    const emailSubject = document.getElementById("emailSubjectInput").value;
    const emailText = document.getElementById("emailTextInput").value;

    // Создание объекта FormData и добавление данных
    const formData = new FormData();
    formData.append("email", email);
    formData.append("emailSubject", emailSubject);
    formData.append("emailText", emailText);
    formData.append("email", "some@gmail.com"); // Добавляем email
    formData.append("password", "password"); // Добавляем password

    var headers = new Headers();
    headers.append("Authorization", "Basic " + btoa("some@gmail.com:password")); // добавляем заголовок Authorization

    // Отправка данных на сервер с помощью fetch запроса
    fetch("http://localhost:8080/email/send", {
      method: "POST",
      headers: headers,
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          // Обработка успешного ответа
          console.log("Email sent successfully");
        } else {
          // Обработка ошибки
          console.error("Error sending email");
        }
      })
      .catch((error) => {
        // Обработка ошибки
        console.error("Error sending email:", error);
      });
  });
});
