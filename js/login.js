function login() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    // Verificar que ambos campos estén completos
    if (username === "" || password === "") {
        // Mostrar una alerta si los campos están incompletos
        alert("Por favor, complete ambos campos.");
    } else {
        // Guardar el inicio de sesión en sessionStorage
        sessionStorage.setItem('isLoggedIn', true);
        // Almacenar el nombre de usuario en localStorage
        localStorage.setItem('username', username);
        // Redirigir a la página index.html
        window.location.href = "index.html";
    }
}

// Asociar la función al evento click del botón de registro
document.getElementById('button').addEventListener('click', login);
