document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("autos").addEventListener("click", function() {
        localStorage.setItem("catID", 101);
        window.location = "products.html"
    });
    document.getElementById("juguetes").addEventListener("click", function() {
        localStorage.setItem("catID", 102);
        window.location = "products.html"
    });
    document.getElementById("muebles").addEventListener("click", function() {
        localStorage.setItem("catID", 103);
        window.location = "products.html"
    });
});

//validar que el localStorage esta en el navegador(si se inicia sesión)
letObjUsuario =JSON.parse(localStorage.getItem("username"));
if(!localStorage.getItem("usuario") && !localStorage.getItem("password")) {
    location.href = "login.html"
}
if (localStorage.getItem("username") && localStorage.getItem("password")) {
    document.getElementById("user").innerHTML = "Cliente:" + letObjUsuario;
}
