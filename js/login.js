function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username.trim() === '' || password.trim() === ''){
        alert("Por favor, complete ambos campos.")
    } else {
        window.location.href = 'index.html';
    }
}

