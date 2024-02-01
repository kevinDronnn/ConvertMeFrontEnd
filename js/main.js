
function openModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "block";


  var modalContent = document.querySelector(".modal-content");
  modalContent.style.display = "block";
}


function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";


  var modalContent = document.querySelector(".modal-content");
  modalContent.style.display = "none";
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


showVideo();
