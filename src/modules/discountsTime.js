const discountsTime = () => {
    const countdowns = document.querySelectorAll('.countdown');

    countdowns.forEach(countdown => {
        const days = countdown.getAttribute('data-days');
        const spans = countdown.querySelectorAll('span');
        const now = new Date();
        const targetDate = new Date(now.getTime() + days * 24 * 60 * 60 * 1000);

        function updateTimer() {
            const newTimer = new Date();
            const timeLeft = targetDate - newTimer;

            if (timeLeft <= 0) {
                clearInterval(timerInterval); // Остановить таймер, если время вышло
                spans.forEach(span => span.textContent = '00'); // Установить нули
                return;
            }

            const seconds = Math.floor((timeLeft / 1000) % 60);
            const minutes = Math.floor((timeLeft / 1000 / 60) % 60);
            const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
            const daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));

            spans[0].textContent = daysLeft.toString().padStart(2, '0');
            spans[1].textContent = hours.toString().padStart(2, '0');
            spans[2].textContent = minutes.toString().padStart(2, '0');
            spans[3].textContent = seconds.toString().padStart(2, '0');
        }

        // Использование setInterval для обновления таймера каждую секунду
        const timerInterval = setInterval(updateTimer, 1000);
    });
};

export default discountsTime;
