const sendForm = ({formId, someElem = []}) => {
    const form = document.getElementById(formId);
    const statusBlock = document.createElement('div');
    const loadText = 'Загрузка';
    const errorText = 'Ошибка';
    const successText = 'Отправлено, менеджер свяжется с вами';

    const validatePhone = (phone) => {
        return /^[\d()+-]*$/.test(phone);
    };

    const validateName = (name) => {
        return /^[А-Яа-яЁё\s]+$/.test(name);
    };

    const validateMessage = (message) => {
        return /^[А-Яа-яЁё\s\d,.!?]+$/.test(message);
    };

    const validate = (formElements) => {
        let success = true;

        formElements.forEach(input => {
            if (input.name === 'user_phone' && !validatePhone(input.value)) {
                success = false;
            } else if (input.name === 'user_name' && !validateName(input.value)) {
                success = false;
            } else if (input.name === 'user_message' && !validateMessage(input.value)) {
                success = false;
            }
        });

        return success;
    };

    const sendData = (data) => {
        return fetch('', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json());
    };

    const submitForm = () => {
        const formElements = form.querySelectorAll('input');
        const formData = new FormData(form);
        const formBody = {};

        formData.forEach((val, key) => {
            formBody[key] = val;
        });

        someElem.forEach(elem => {
            const element = document.getElementById(elem.id);
            if (elem.type === 'block') {
                formBody[elem.id] = element.textContent;
            } else if (elem.type === 'input') {
                formBody[elem.id] = element.value;
            }
        });

        if (validate(formElements)) {
            sendData(formData).then(data => {
                statusBlock.textContent = successText;
                formElements.forEach(input => {
                    input.value = '';
                });
            }).catch(error => {
                statusBlock.textContent = errorText;
            });
        }
    };

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        statusBlock.textContent = loadText;
        form.append(statusBlock);

        submitForm();
    });
};

export default sendForm;
