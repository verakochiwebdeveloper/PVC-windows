const sertifecations = () => {
  document.addEventListener("DOMContentLoaded", function () {
    const modal = document.createElement("div");
    modal.className = "modal";
    modal.style.display = "none";

    const modalImg = document.createElement("img");
    modalImg.className = "modal-content";
    modal.appendChild(modalImg);

    const closeBtn = document.createElement("span");
    closeBtn.className = "close";
    closeBtn.innerHTML = "&times;";
    modal.appendChild(closeBtn);

    document.body.appendChild(modal);

    const certificateImages = document.querySelectorAll(
      ".sertificate-document"
    );

    certificateImages.forEach(function (image) {
      image.addEventListener("click", function () {
        modal.style.display = "block";
        modalImg.src = this.href;
      });
    });

    closeBtn.addEventListener("click", function () {
      modal.style.display = "none";
    });

    window.addEventListener("click", function (event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  });
};

export default sertifecations;
