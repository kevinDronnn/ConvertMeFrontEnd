function formatModal(element) {
  // Получаем родительский элемент <li> для элемента, на котором произошло событие
  var liElement = element.parentElement;
  // Получаем элемент с классом "format-modal2" внутри родительского элемента <li>
  var fileFormat = liElement.querySelector(".format-modal2");
  var buttonFormat = document.getElementById("listOfFormars");

  // Получаем текстовое значение из элемента с классом "format-modal2"
  var buttonText = fileFormat.textContent;

  // Устанавливаем текстовое значение кнопки равным тексту из элемента ".format-modal2"
  buttonFormat.innerText = buttonText;

  closeModal();
  closeModal2();
  closeModal3();
  closeModal4();
}

function getAudioInfo(file) {
  var url = "http://localhost:8080/audio/getAudioInfo";
  var formData = new FormData();
  formData.append("file", file);

  var options = {
    method: "POST",
    body: formData,
  };

  fetch(url, options)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      handleAudioInfo(data);
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
}

function getVideoInfo(file) {
  var url = "http://localhost:8080/video/getVideoInfo";
  var formData = new FormData();
  formData.append("file", file);

  var options = {
    method: "POST",
    body: formData,
  };

  fetch(url, options)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      handleVideoInfo(data);
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
}

function handleAudioInfo(audioData) {
  var audio_bitrate = audioData.bitRateAudio;
  var audio_samplingRate = audioData.samplingRateAudio;

  var sizeContainer = document.getElementById("sizeOfFile");

  var audio_bitrateContainer = document.getElementById("audio_bitrate3");
  var audio_samplingRateContainer = document.getElementById(
    "audio_samplingRate3"
  );

  sizeContainer.innerText = audioData.sizeAudio + " MB";

  audio_bitrateContainer.value = audio_bitrate;
  audio_samplingRateContainer.value = audio_samplingRate;
}

function handleVideoInfo(videoData) {
  var videoSize = videoData.sizeVideo;
  var video_bitrate = videoData.bitRateVideo;
  var video_framerate = videoData.frameRateVideo;

  var audio_bitrate = videoData.bitRateAudio;
  var audio_samplingRate = videoData.samplingRateAudio;

  var sizeContainer = document.getElementById("sizeOfFile");
  var video_bitrateContainer = document.getElementById("video_bitrate");
  var video_framerateContainer = document.getElementById("video_framerate");

  var audio_bitrateContainer = document.getElementById("audio_bitrate");
  var audio_samplingRateContainer =
    document.getElementById("audio_samplingRate");

  sizeContainer.innerText = videoSize + " MB";
  video_bitrateContainer.value = video_bitrate;
  video_framerateContainer.value = video_framerate;

  audio_bitrateContainer.value = audio_bitrate;
  audio_samplingRateContainer.value = audio_samplingRate;
}

function handleFileSelect() {
  var fileInput = document.getElementById("fileInput");
  var fileContainer = document.getElementById("fileContainer");
  var resultContainer = document.getElementById("resultContainer");

  if (fileInput.files.length > 0) {
    // Скрыть первый контейнер
    fileContainer.style.display = "none";

    var file = fileInput.files[0];

    if (fileInput.files.length > 0) {
      var fileName = fileInput.files[0].name;
      var fileExtension = fileName.split(".").pop().toLowerCase();

      if (
        fileExtension === "mp3" ||
        fileExtension === "wav" ||
        fileExtension === "aac" ||
        fileExtension === "flac" ||
        fileExtension === "ogg" ||
        fileExtension === "mp2"
      ) {
        getAudioInfo(file);
      } else {
        getVideoInfo(file);
      }
    }
    // Отобразить имя файла во втором контейнере
    document.getElementById("fileName").innerText = fileInput.files[0].name;
    // Отобразить второй контейнер
    resultContainer.style.display = "inline-flex";
  }
}

function openModalControl() {
  var fileInput = document.getElementById("fileInput");

  if (fileInput.files.length > 0) {
    var fileName = fileInput.files[0].name;
    var fileExtension = fileName.split(".").pop().toLowerCase();

    if (
      fileExtension === "mp3" ||
      fileExtension === "wav" ||
      fileExtension === "aac" ||
      fileExtension === "flac" ||
      fileExtension === "ogg" ||
      fileExtension === "mp2"
    ) {
      openModal3();
    } else {
      openModal();
    }
  }
}
function openModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "block";

  var modalContent = document.querySelector(".modal-content");
  modalContent.style.display = "block";

  modal.style.display = "block";
}

function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";

  var modalContent = document.querySelector(".modal-content");
  modalContent.style.display = "none";

  modal.style.display = "none";
}

window.onclick = function (event) {
  var modal = document.getElementById("myModal");
  if (event.target == modal) {
    modal.style.display = "none";

    var modalContent = document.querySelector(".modal-content");
    modalContent.style.display = "none";
  }
};

function showVideo() {
  hideAllLabelPairs();
  document
    .querySelectorAll(".label-select-pair-video")
    .forEach(function (element) {
      element.style.display = "flex";
    });
  adjustModalHeight(200);
}

function showAudio() {
  hideAllLabelPairs();
  document
    .querySelectorAll(".label-select-pair-audio")
    .forEach(function (element) {
      element.style.display = "flex";
    });
  adjustModalHeight(300);
}

function hideAllLabelPairs() {
  document.querySelectorAll(".label-select-pair").forEach(function (element) {
    element.style.display = "none";
  });
  document
    .querySelectorAll(".label-select-pair-video")
    .forEach(function (element) {
      element.style.display = "none";
    });
  document
    .querySelectorAll(".label-select-pair-audio")
    .forEach(function (element) {
      element.style.display = "none";
    });
}

function adjustModalHeight(height) {
  var modalContent = document.querySelector(".modal-content");
  modalContent.style.height = height + "px";
}

function updateVolume(value) {
  document.getElementById("volumeValue").innerText = value + "%";
}

// showVideo();

//---------------------------------------------------------

function openModalControl2() {
  var fileInput = document.getElementById("fileInput");

  if (fileInput.files.length > 0) {
    var fileName = fileInput.files[0].name;
    var fileExtension = fileName.split(".").pop().toLowerCase();

    // switch (fileExtension) {
    //   case "docx":
    //     openModal4();
    //     break;
    //   default:
    //     openModal2();
    // }
    if (
      fileExtension === "mp3" ||
      fileExtension === "wav" ||
      fileExtension === "aac" ||
      fileExtension === "flac" ||
      fileExtension === "ogg" ||
      fileExtension === "mp2"
    ) {
      openModal4();
    } else {
      openModal2();
    }
  }
}

function openModal2() {
  var modal = document.getElementById("myModal2");
  modal.style.display = "block";

  var modalContent = document.querySelector(".modal-content2");
  modalContent.style.display = "block";

  modal.style.display = "block";
  showVideo2();
}

function closeModal2() {
  var modal = document.getElementById("myModal2");
  modal.style.display = "none";

  var modalContent = document.querySelector(".modal-content2");
  modalContent.style.display = "none";

  modal.style.display = "none";
}

window.onclick = function (event) {
  var modal = document.getElementById("myModal2");
  if (event.target == modal) {
    modal.style.display = "none";

    var modalContent = document.querySelector(".modal-content2");
    modalContent.style.display = "none";
  }
};

function showVideo2() {
  hideAllLabelPairs2();
  document.querySelectorAll(".video-format2").forEach(function (element) {
    element.style.display = "flex";
  });
}

function showAudio2() {
  hideAllLabelPairs2();
  document.querySelectorAll(".audio-format2").forEach(function (element) {
    element.style.display = "flex"; // переопределить стиль display на flex
  });
}

function hideAllLabelPairs2() {
  document.querySelectorAll(".video-format2").forEach(function (element) {
    element.style.display = "none";
  });
  document.querySelectorAll(".audio-format2").forEach(function (element) {
    element.style.display = "none";
  });
}

//------------------------------------------------------------------

function openModal3() {
  var modal = document.getElementById("myModal3");
  modal.style.display = "block";

  var modalContent = document.querySelector(".modal-content3");
  modalContent.style.display = "block";

  modal.style.display = "block";
  showAudio3();
}

function closeModal3() {
  var modal = document.getElementById("myModal3");
  modal.style.display = "none";

  var modalContent = document.querySelector(".modal-content3");
  modalContent.style.display = "none";

  modal.style.display = "none";
}

window.onclick = function (event) {
  var modal = document.getElementById("myModal3");
  if (event.target == modal) {
    modal.style.display = "none";

    var modalContent = document.querySelector(".modal-content3");
    modalContent.style.display = "none";
  }
};

function showAudio3() {
  document
    .querySelectorAll(".label-select-pair-audio3")
    .forEach(function (element) {
      element.style.display = "flex";
    });
  adjustModalHeight3(300);
}

function adjustModalHeight3(height) {
  var modalContent = document.querySelector(".modal-content3");
  modalContent.style.height = height + "px";
}

function updateVolume3(value) {
  document.getElementById("volumeValue3").innerText = value + "%";
}

//------------------------------------------------------------------

function openModal4() {
  var modal = document.getElementById("myModal4");
  modal.style.display = "block";

  var modalContent = document.querySelector(".modal-content4");
  modalContent.style.display = "block";

  modal.style.display = "block";
}

function closeModal4() {
  var modal = document.getElementById("myModal4");
  modal.style.display = "none";

  var modalContent = document.querySelector(".modal-content4");
  modalContent.style.display = "none";

  modal.style.display = "none";
}

window.onclick = function (event) {
  var modal = document.getElementById("myModal4");
  if (event.target == modal) {
    modal.style.display = "none";

    var modalContent = document.querySelector(".modal-content4");
    modalContent.style.display = "none";
  }
};

function showAudio4() {
  document.querySelectorAll(".audio-format4").forEach(function (element) {
    element.style.display = "flex";
  });
}

function converterOfFileHandler() {
  var fileInput = document.getElementById("fileInput");

  var fileName = fileInput.files[0].name;
  var fileExtension = fileName.split(".").pop().toLowerCase();

  if (
    fileExtension === "mp3" ||
    fileExtension === "wav" ||
    fileExtension === "aac" ||
    fileExtension === "flac" ||
    fileExtension === "ogg" ||
    fileExtension === "mp2"
  ) {
    convertAudio(fileInput.files[0]);
  } else {
    convertVideo(fileInput.files[0]);
  }
}

function convertAudio(file) {
  var url = "http://localhost:8080/audio/converter";
  var formData = new FormData();

  var fileInput = document.getElementById("fileInput");
  var file = fileInput.files[0];
  var fileName = fileInput.files[0].name;
  var fileExtension = fileName.split(".").pop().toLowerCase();

  var future = document.getElementById("listOfFormars");

  var final = "";
  final = fileName;

  var volume = document.getElementById("volumeValue3");
  var channels = document.getElementById("audio_channels3");
  var audio_codec = document.getElementById("audio_codec3");
  var audio_bitrateContainer = document.getElementById("audio_bitrate3");
  var audio_samplingRateContainer = document.getElementById(
    "audio_samplingRate3"
  );

  formData.append("file", file);
  formData.append("codec", audio_codec.value);
  formData.append("bit_Rate", audio_bitrateContainer.value * 1000);
  formData.append("sampling_rate", audio_samplingRateContainer.value);
  formData.append("volume", volume.innerText.replace("%", ""));
  formData.append("channels", channels.value);
  formData.append("future_extension", future.textContent.toLowerCase());
  formData.append("original_extension", fileExtension);

  var options = {
    method: "POST",
    body: formData,
  };

  fetch(url, options)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.blob(); // Получаем данные в формате Blob
    })
    .then((blob) => {
      // Создаем ссылку на Blob
      var url = window.URL.createObjectURL(blob);

      // Создаем ссылку на скачивание
      var a = document.createElement("a");
      a.href = url;
      a.download = final
        .replace(
          fileExtension,
          future.tagName.toLowerCase() === "input"
            ? future.value
            : future.textContent
        )
        .toLowerCase(); // Имя файла для скачивания
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url); // Освобождаем ресурсы
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
}

function convertVideo(file) {
  var url = "http://localhost:8080/video/converter";

  var fileInput = document.getElementById("fileInput");
  var file = fileInput.files[0];
  var fileName = fileInput.files[0].name;
  var fileExtension = fileName.split(".").pop().toLowerCase();

  var future = document.getElementById("listOfFormars");

  var final = "";
  final = fileName;

  var formData = new FormData();
  var volume = document.getElementById("volumeValue");
  var channels = document.getElementById("audio_channels");
  var audio_codec = document.getElementById("audio_codec");
  var video_codec = document.getElementById("video_codec");
  var video_bitrateContainer = document.getElementById("video_bitrate");
  var video_framerateContainer = document.getElementById("video_framerate");
  var future = document.getElementById("listOfFormars");
  var audio_bitrateContainer = document.getElementById("audio_bitrate");
  var audio_samplingRateContainer =
    document.getElementById("audio_samplingRate");
  formData.append("file", file);
  formData.append("video_codec", video_codec.value);
  formData.append("video_bitrate", video_bitrateContainer.value);
  formData.append("video_framerate", video_framerateContainer.value);
  formData.append("audio_codec", audio_codec.value);
  formData.append("audio_bitrate", audio_bitrateContainer.value * 1000);
  formData.append("sampling_rate", audio_samplingRateContainer.value);
  formData.append("volume", volume.innerText.replace("%", ""));
  formData.append("audio_channels", channels.value);
  formData.append("future_extension", future.textContent.toLowerCase());
  formData.append("original_extension", fileExtension);
  var options = {
    method: "POST",
    body: formData,
  };

  fetch(url, options)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.blob(); // Получаем данные в формате Blob
    })
    .then((blob) => {
      // Создаем ссылку на Blob
      var url = window.URL.createObjectURL(blob);

      // Создаем ссылку на скачивание
      var a = document.createElement("a");
      a.href = url;
      a.download = final
        .replace(
          fileExtension,
          future.tagName.toLowerCase() === "input"
            ? future.value
            : future.textContent
        )
        .toLowerCase(); // Имя файла для скачивания
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url); // Освобождаем ресурсы
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
}
