fetch('https://japceibal.github.io/emercado-api/cats_products/101.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Error en la carga de datos'); // Maneja errores si la carga del JSON falla
        }
        return response.json(); // Convierte la respuesta en un objeto JSON
    })
    .then(data => {
        let productosOriginales = data.products; // Guardar los productos originales para restaurar al eliminar filtros
        let productosFiltrados = [...productosOriginales]; // Inicialmente los productos filtrados son los mismos

        // Función para renderizar los productos en el HTML
        const renderizarProductos = (products) => {
            const container = document.querySelector('#products-grid');
            container.innerHTML = '';
            products.forEach(item => {
                const productCard = document.createElement('div');
                productCard.className = 'col-lg-3 col-md-4 col-sm-6 col-12 mb-4';
                productCard.innerHTML = `
                    <div id="articulos-autos" class="product-card">    
                        <div class="product-image">
                            <img src="${item.image}" alt="${item.name}">
                        </div>
                        <div>
                            <h3>${item.name}</h3>
                            <p>${item.description}</p>
                            <p>Precio: ${item.currency} ${item.cost}</p>
                            <p>Cantidad vendida: ${item.soldCount} artículos</p>
                        </div>
                    </div>
                `;
                container.appendChild(productCard);
            });
        };

        // Funciones para manejar la ordenación
        const ordenarProductoPorRelev = (items) => {
            const productosOrdenados = [...items].sort((a, b) => b.soldCount - a.soldCount);
            renderizarProductos(productosOrdenados);
        };

        const ordenarProductoPorPrecioAsc = (items) => {
            const productosOrdenados = [...items].sort((a, b) => a.cost - b.cost);
            renderizarProductos(productosOrdenados);
        };

        const ordenarProductoPorPrecioDesc = (items) => {
            const productosOrdenados = [...items].sort((a, b) => b.cost - a.cost);
            renderizarProductos(productosOrdenados);
        };

        // Función para filtrar productos por precio
        const filtrarProductosPorPrecio = () => {
            const precioMin = parseFloat(document.getElementById('filtMin').value) || 0;
            const precioMax = parseFloat(document.getElementById('filtMax').value) || Infinity;

            productosFiltrados = productosOriginales.filter(producto => {
                return producto.cost >= precioMin && producto.cost <= precioMax;
            });

            renderizarProductos(productosFiltrados);
        };

        // Función para limpiar filtros y mostrar todos los productos
        const limpiarFiltros = () => {
            productosFiltrados = [...productosOriginales]; // Restaurar la lista completa de productos
            renderizarProductos(productosFiltrados);
            document.getElementById('filtMin').value = ''; // Limpiar los campos de filtro
            document.getElementById('filtMax').value = '';
        };

        // Añadir eventos a los botones de ordenación
        document.querySelector('#sortByCount').addEventListener('click', () => ordenarProductoPorRelev(productosFiltrados));
        document.querySelector('#sortAsc').addEventListener('click', () => ordenarProductoPorPrecioAsc(productosFiltrados));
        document.querySelector('#sortDesc').addEventListener('click', () => ordenarProductoPorPrecioDesc(productosFiltrados));

        // Añadir eventos a los botones de filtrado
        document.getElementById('filtrar').addEventListener('click', filtrarProductosPorPrecio);
        document.getElementById('limpiarFiltros').addEventListener('click', limpiarFiltros);

        // Renderizado inicial de los productos (en cualquier orden)
        renderizarProductos(productosOriginales);
    })
    .catch(error => {
        console.error('Error al cargar los datos:', error); // Maneja errores en caso de que la carga de datos falle
    });
