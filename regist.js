document.getElementById('registrationForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const response = await fetch('https://127.0.0.1:8000/api/v1/register/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, email, password })
    });

    const result = await response.json();

    const messageElement = document.getElementById('message');
    if (response.ok) {
        messageElement.textContent = 'Регистрация успешна!';
        messageElement.style.color = 'green';
    } else {
        messageElement.textContent = 'Ошибка: ' + result.message;
        messageElement.style.color = 'red';
    }
});
