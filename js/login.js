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
    let login = document.getElementById("login"); 
    login.addEventListener("click", () => {
        let usuario = document.getElementById("usuario").value;
        let contraseña = document.getElementById("contraseña").value;
          //guardo sesion con localStorage
          localStorage.setItem("usuario", JSON.stringify(usuario));
          localStorage.setItem("contraseña", JSON.stringify(contraseña));
          let ObjUsuario = JSON.parse(localStorage.getItem("usuario"));
          let ObjContraseña =JSON.parse(localStorage.getItem("contraseña"));
          if(usuario!="" && contraseña!=""){
            window.location.href= "index.html";
          }
    })
})
