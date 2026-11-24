const products = [
    {
        id: 1,
        name: "Kırmızı Ev Sahibi Forması",
        price: 1299,
        image: "https://placehold.co/500x500/e9eeee/222?text=HOME+JERSEY"
    },
    {
        id: 2,
        name: "Mavi Deplasman Forması",
        price: 1199,
        image: "https://placehold.co/500x500/e9eeee/222?text=AWAY+JERSEY"
    },
    {
        id: 3,
        name: "Siyah Alternatif Forma",
        price: 1399,
        image: "https://placehold.co/500x500/e9eeee/222?text=THIRD+JERSEY"
    },
    {
        id: 4,
        name: "Beyaz Klasik Forma",
        price: 1099,
        image: "https://placehold.co/500x500/e9eeee/222?text=CLASSIC+JERSEY"
    }
];

let cart = [];

function renderProducts() {
    const container = document.getElementById("product-list");

    container.innerHTML = products.map(product => `
        <article class="product">
            <img src="${product.image}" alt="${product.name}">
            <div class="product-info">
                <h3>${product.name}</h3>
                <div class="price">${product.price.toLocaleString("tr-TR")} TL</div>
                <button onclick="addToCart(${product.id})">Sepete Ekle</button>
            </div>
        </article>
    `).join("");
}

function addToCart(id) {
    cart.push(products.find(product => product.id === id));
    document.getElementById("cart-count").textContent = cart.length;
    alert("Ürün sepete eklendi!");
}

function showCart() {
    if (cart.length === 0) {
        alert("Sepetiniz şu anda boş.");
        return;
    }

    const total = cart.reduce((sum, product) => sum + product.price, 0);
    const items = cart.map(product => product.name).join("\n");

    alert(
        "SEPETİNİZ\n\n" +
        items +
        "\n\nToplam: " +
        total.toLocaleString("tr-TR") +
        " TL"
    );
}

renderProducts();