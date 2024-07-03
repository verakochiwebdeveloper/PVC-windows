// discountsTime.js
const discountsTime = () => {
    function updateTimer() {
        const countdown = document.querySelector('.countdown');
        const days = countdown.getAttribute('data-days');
        const spans = countdown.querySelectorAll('span');

        const now = new Date();
        const targetDate = new Date(now.getTime() + days * 24 * 60 * 60 * 1000);

        const timeLeft = targetDate - now;
        const seconds = Math.floor((timeLeft / 1000) % 60);
        const minutes = Math.floor((timeLeft / 1000 / 60) % 60);
        const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
        const daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));

        spans[0].textContent = daysLeft.toString().padStart(2, '0');
        spans[1].textContent = hours.toString().padStart(2, '0');
        spans[2].textContent = minutes.toString().padStart(2, '0');
        spans[3].textContent = seconds.toString().padStart(2, '0');
    }

    setInterval(updateTimer, 1000);
};

export default discountsTime;
