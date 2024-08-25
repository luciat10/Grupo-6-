const DATA_URL = "https://japceibal.github.io/emercado-api/cats_products/101.json";

document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("products-grid");

    function showData(dataArray) {
        for (const item of dataArray) {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.innerHTML = `
                <div class="product-image">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <p>Precio: ${item.currency} ${item.cost}</p>
                <p>Cantidad vendida: ${item.soldCount} artículos</p>
            `;
            container.appendChild(productCard);
        }
    }

    fetch(DATA_URL)
        .then(response => response.json())
        .then(data => {
            showData(data.products);
        })
        .catch(error => console.error('Error fetching products:', error));
});
