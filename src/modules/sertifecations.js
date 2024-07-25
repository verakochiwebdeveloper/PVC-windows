const sertifecations = () => {
  document.addEventListener("DOMContentLoaded", () => {
    // Создание модального окна
    const modal = document.createElement("div");
    modal.className = "modal";
    modal.style.display = "none";

    const modalImg = document.createElement("img");
    modalImg.className = "modal-content";
    modal.appendChild(modalImg);

    const closeBtn = document.createElement("span");
    closeBtn.className = "close";
    closeBtn.innerHTML = "X";
    modal.appendChild(closeBtn);

    document.body.appendChild(modal);

    // Получение всех изображений сертификатов
    const certificateImages = document.querySelectorAll(".sertificate-document");

    // Добавление обработчика клика на каждое изображение
    certificateImages.forEach((image) => {
      image.addEventListener("click", (event) => {
        event.preventDefault(); // Предотвращаем переход по ссылке
        modal.style.display = "block";
        modalImg.src = image.href; // Используем href для получения URL
      });
    });

    // Закрытие модального окна
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });

    // Закрытие при клике вне изображения
    window.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  });
};

export default sertifecations;
