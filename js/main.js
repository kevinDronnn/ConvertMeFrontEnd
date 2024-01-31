// Function to open the modal
function openModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "block";

  // Get the modal content by class name
  var modalContent = document.querySelector(".modal-content");
  modalContent.style.display = "block";
}

// Function to close the modal
function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";

  // Get the modal content by class name
  var modalContent = document.querySelector(".modal-content");
  modalContent.style.display = "none";
}

// Function to close the modal if clicked outside the modal content
window.onclick = function (event) {
  var modal = document.getElementById("myModal");
  if (event.target == modal) {
    modal.style.display = "none";

    // Get the modal content by class name
    var modalContent = document.querySelector(".modal-content");
    modalContent.style.display = "none";
  }
};
