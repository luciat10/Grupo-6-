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
document.getElementById('registerButton').addEventListener('click', login);

document addEventListener("DomContentLoaded", => {
    let login= document.getElementById(login); 
    login.addEventListener("click", () => {
        let usuario = document.getElementById("usuario").value;
        let contraseña = document.getElementById("contraseña").value;
          //guardo sesion con localStorage
          localStorage.setItem("usuario", JSON.stringify(ususario));
          localStorage.setItem("contraseña", JSON.stringify(contraseña));
          let ObjUsuario = JSON.parse(localStorage.getItem("usuario"));
          let ObjContraseña =JSON.parse(localStorage.getItem("contraseña"));
          if(usuario!="" && contraseña!=""){
            window.location.href= "index.html";
          }
    })
})