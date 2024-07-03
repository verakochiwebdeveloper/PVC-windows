const form = () => {
  document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('form[name="action-form"]');

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const fio = form.querySelector('input[name="fio"]').value.trim();
      const phone = form.querySelector('input[name="phone"]').value.trim();

      if (fio === "" || phone === "") {
        alert("Пожалуйста, заполните все поля формы.");
        return;
      }

      if (fio.match(/[^A-Za-zА-Яа-я\s]/)) {
        alert('Поле "Имя" должно содержать только русские и латинские буквы.');
        return;
      }

      if (!phone.match(/^\+\d{1,16}$/)) {
        alert(
          'Поле "Телефон" должно содержать только символ + и не более 16 цифр.'
        );
        return;
      }

      // Данные для отправки в JSON-формате
      const formData = {
        fio: fio,
        phone: phone,
        page: "Окна",
      };

      console.log(JSON.stringify(formData));

      // Здесь можно добавить код для отправки данных на сервер
    });
  });
};

export default form
