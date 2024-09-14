document.addEventListener("DOMContentLoaded", function () {
    // Obtener el ID del producto desde localStorage
    const productoID = localStorage.getItem('productoID');
    
    if (productoID) {
        // Construir la URL con el ID del producto
        const DATA_URL = `https://japceibal.github.io/emercado-api/products/${productoID}.json`;
        
        // Hacer la solicitud al archivo JSON
        fetch(DATA_URL)
            .then(response => response.json())
            .then(data => {
                if (data) {
                    const producto = data; 

                    // Mostrar los detalles del producto en la página
                    document.getElementById('product-name').textContent = producto.name;
                    document.getElementById('product-description').textContent = producto.description;
                    document.getElementById('product-price').textContent = `Precio: ${producto.currency} ${producto.cost}`;

                    // Verificar si el producto tiene imágenes
                    if (producto.images && Array.isArray(producto.images)) {
                        const imageContainer = document.getElementById('product-images');
                        imageContainer.innerHTML = ''; // Limpiar el contenedor de imágenes

                        // Iterar sobre cada imagen y crear un elemento <img> para cada una
                        producto.images.forEach(imageUrl => {
                            const imgElement = document.createElement('img');
                            imgElement.src = imageUrl;
                            imgElement.alt = producto.name;
                            imgElement.classList.add('product-images'); 
                            imageContainer.appendChild(imgElement);
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
