function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username.trim() === '' || password.trim() === ''){
        alert("Por favor, complete ambos campos.")
    } else {
        window.location.href = 'index.html';
    }
}

document.addEventListener("DOMContentLoaded", () => {
    let login = document.getElementById("loginForm"); 
    login.addEventListener("click", () => {
        let usuario = document.getElementById("username").value;
        let contraseña = document.getElementById("password").value;
          //guardo sesion con localStorage
          localStorage.setItem("username", JSON.stringify(username));
          localStorage.setItem("password", JSON.stringify(password));
          let ObjUsuario = JSON.parse(localStorage.getItem("password"));
          let ObjContraseña =JSON.parse(localStorage.getItem("password"));
          if(username!="" && password!=""){
            window.location.href= "index.html";
          }
    })
})
