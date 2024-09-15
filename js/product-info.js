document.addEventListener("DOMContentLoaded", function () {
    const productoID = localStorage.getItem('productoID');

    if (productoID) {
        const DATA_URL = `https://japceibal.github.io/emercado-api/products/${productoID}.json`;

        fetch(DATA_URL)
            .then(response => response.json())
            .then(data => {
                if (data) {
                    const producto = data;

                    // Mostrar los detalles del producto en la página
                    document.getElementById('product-name').textContent = producto.name;
                    document.getElementById('product-description').textContent = producto.description;
                    document.getElementById('product-price').textContent = `Precio: ${producto.currency} ${producto.cost}`;

                    if (producto.images && Array.isArray(producto.images)) {
                        const mainImage = document.getElementById('main-image');
                        const thumbnailsContainer = document.getElementById('thumbnails-container');

                        // Establecer la primera imagen como la principal
                        mainImage.src = producto.images[0];
                        mainImage.alt = producto.name;

                        // Limpiar el contenedor de miniaturas
                        thumbnailsContainer.innerHTML = '';

                        // Iterar sobre cada imagen y crear miniaturas
                        producto.images.forEach((imageUrl, index) => {
                            const thumbnailElement = document.createElement('img');
                            thumbnailElement.src = imageUrl;
                            thumbnailElement.alt = producto.name;
                            thumbnailElement.classList.add('product-thumbnail');

                            // Agregar evento de clic para cambiar la imagen principal
                            thumbnailElement.addEventListener('click', function () {
                                mainImage.src = imageUrl;
                                mainImage.alt = `Imagen ${index + 1} de ${producto.name}`;
                            });

                            thumbnailsContainer.appendChild(thumbnailElement);
                        });
                    } else {
                        console.error('No se encontraron imágenes para este producto');
                    }
                } else {
                    console.error('No se encontró el producto en el JSON');
                }
            })
            .catch(error => console.error('Error al cargar los detalles del producto:', error));
    } else {
        console.error('No se encontró el ID del producto en localStorage.');
    }
});