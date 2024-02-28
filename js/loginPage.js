document
  .getElementById("login-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Предотвращаем отправку формы по умолчанию

    // Получаем данные формы
    var formData = new FormData(this);

    // Отправляем данные на сервер
    fetch("http://localhost:8080/login", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json(); // Декодируем ответ в формате JSON
      })
      .then((data) => {
        console.log("Success:", data);
        // Здесь можно добавить код для обработки успешного ответа
      })
      .catch((error) => {
        console.error("Error:", error);
        // Здесь можно добавить код для обработки ошибки
      });
  });
