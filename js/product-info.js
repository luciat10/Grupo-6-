function cambioImagen() {
    var imagen = document.getElementById("imagen");
    if ( imagen.src.includes("img/prod50921_2.jpg")) {
        imagen.src = "img/prod50921_1.jpg";
    } else {
        imagen.src = "img/prod50921_2.jpg";
    }
}
function cambioImagen4() {
    var imagen = document.getElementById("imagen");
    if ( imagen.src.includes("img/prod50921_4.jpg")) {
        imagen.src = "img/prod50921_1.jpg";
    } else {
        imagen.src = "img/prod50921_4.jpg";
    }
}

function cambioImagen3() {
    var imagen = document.getElementById("imagen");
    if ( imagen.src.includes("img/prod50921_3.jpg")) {
        imagen.src = "img/prod50921_1.jpg";
    } else {
        imagen.src = "img/prod50921_3.jpg";
    }
}

function cambioImagen5() {
    var imagen = document.getElementById("imagen");
    if ( imagen.src.includes("img/prod50921_5.jpg")) {
        imagen.src = "img/prod50921_1.jpg";
    } else {
        imagen.src = "img/prod50921_5.jpg";
    }
}


    // Almacenar el ID del producto cuando se haga clic en "Ver detalles"
    document.querySelectorAll('.select-product-btn').forEach(button => {
        button.addEventListener('click', function() {
          const productId = this.getAttribute('data-id'); // Obtiene el ID del producto
          localStorage.setItem('selectedProductId', productId); // Almacena en localStorage
          window.location.href = 'product-info.html'; // Redirige a product-info.html
        });
      });


// Recuperar el identificador del producto almacenado en localStorage
const productId = localStorage.getItem('selectedProductId');

if (productId) {
    // Simulación de datos del producto
    const fakeProductData = {
        "50921": {
            name: "Chevrolet Onix Joy",
            description: "Generación 2019. Variedad de colores, modelo 1.0, ideal para la ciudad.",
            price: "USD 13.500",
            category: "Autos",
            soldCount: 14,
            image: "img/prod50921_1.jpg"
        }
    };

    // Obtener los detalles del producto basado en el productId
    const productData = fakeProductData[productId];

    if (productData) {
        // Actualizar la información en la página
        document.getElementById('product-name').textContent = productData.name;
        document.getElementById('product-description').textContent = productData.description;
        document.getElementById('product-price').textContent = productData.price;
        document.getElementById('product-category').textContent = productData.category;
        document.getElementById('product-sold-count').textContent = `Cantidad vendida: ${productData.soldCount}`;
        document.getElementById('product-image').src = productData.image;
    } else {
        console.log('Producto no encontrado');
    }
} else {
    console.log('No se seleccionó ningún producto.');
}



