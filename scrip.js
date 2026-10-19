document.addEventListener('DOMContentLoaded', () => {
    const clickBtn = document.getElementById('clickBtn');
    const message = document.getElementById('message');

    clickBtn.addEventListener('click', () => {
        message.textContent = 'Hello! Thank you for visiting my website. Have a great day!';
    });
});