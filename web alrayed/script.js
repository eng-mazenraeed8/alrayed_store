
// ======================================
// AL RAYED STORE - PRODUCTS DATA
// ======================================

const products = [
    {
        id: 1,
        name: "طماطم طازجة",
        category: "vegetables",
        categoryName: "خضروات",
        price: 4.5,
        image: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=600"
    },
    {
        id: 2,
        name: "خيار طازج",
        category: "vegetables",
        categoryName: "خضروات",
        price: 5,
        image: "https://images.unsplash.com/photo-1604977042946-1eecc30f269e?w=600"
    },
    {
        id: 3,
        name: "جزر طازج",
        category: "vegetables",
        categoryName: "خضروات",
        price: 6,
        image: "https://images.unsplash.com/photo-1445282768818-728615cc910a?w=600"
    },
    {
        id: 4,
        name: "تفاح أحمر",
        category: "fruits",
        categoryName: "فواكه",
        price: 9,
        image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=600"
    },
    {
        id: 5,
        name: "موز طازج",
        category: "fruits",
        categoryName: "فواكه",
        price: 7,
        image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=600"
    },
    {
        id: 6,
        name: "برتقال",
        category: "fruits",
        categoryName: "فواكه",
        price: 6.5,
        image: "https://images.unsplash.com/photo-1547514701-42782101795e?w=600"
    },
    {
        id: 7,
        name: "تمر سكري",
        category: "dates",
        categoryName: "تمور",
        price: 25,
        image: "https://i.ebayimg.com/images/g/Na8AAOSwqCpmOn42/s-l1600.webp"
    },
    {
        id: 8,
        name: "تمر مجدول",
        category: "dates",
        categoryName: "تمور",
        price: 32,
        image: "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?w=600"
    },
    {
        id: 9,
        name: "عسل طبيعي",
        category: "food",
        categoryName: "مواد غذائية",
        price: 35,
        image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=600"
    },
    {
        id: 10,
        name: "زيت زيتون",
        category: "food",
        categoryName: "مواد غذائية",
        price: 28,
        image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=600"
    },
    {
        id: 11,
        name: "فراولة طازجة",
        category: "fruits",
        categoryName: "فواكه",
        price: 12,
        image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=600"
    },
    {
        id: 12,
        name: "بروكلي",
        category: "vegetables",
        categoryName: "خضروات",
        price: 8,
        image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=600"
    }
];

// ======================================
// ELEMENTS
// ======================================

const productsGrid = document.getElementById("productsGrid");
const categories = document.getElementById("categories");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

const cartToggle = document.getElementById("cartToggle");
const cartDrawer = document.getElementById("cartDrawer");
const cartOverlay = document.getElementById("cartOverlay");
const closeCart = document.getElementById("closeCart");
const continueShopping = document.getElementById("continueShopping");

const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const cartCount = document.getElementById("cartCount");
const productsTotal = document.getElementById("productsTotal");
const toast = document.getElementById("toast");
const checkoutBtn = document.getElementById("checkoutBtn");

// ======================================
// STATE
// ======================================

let selectedCategory = "all";
let searchTerm = "";

let cart = [];

try {
    const savedCart = JSON.parse(
        localStorage.getItem("alRayedCart") || "[]"
    );

    if (Array.isArray(savedCart)) {
        cart = savedCart.filter(item =>
            products.some(product => product.id === item.id) &&
            Number.isInteger(item.quantity) &&
            item.quantity > 0
        );
    }
} catch (error) {
    cart = [];
}

// Saudi Riyal formatting
function formatPrice(price) {
    return price.toFixed(2) + " ر.س";
}

// ======================================
// DISPLAY PRODUCTS
// ======================================

function displayProducts() {

    let filteredProducts = products.filter(product => {

        const matchesCategory =
            selectedCategory === "all" ||
            product.category === selectedCategory;

        const matchesSearch =
            product.name.includes(searchTerm);

        return matchesCategory && matchesSearch;
    });

    productsTotal.textContent =
        filteredProducts.length + " منتجات";

    if (filteredProducts.length === 0) {
        productsGrid.innerHTML =
            '<div class="no-products">عذرًا، لم يتم العثور على منتجات.</div>';
        return;
    }

    productsGrid.innerHTML = filteredProducts.map(product => `

        <div class="product-card">

            <div class="product-image">
                <img
                    src="${product.image}"
                    alt="${product.name}"
                    loading="lazy"
                >
            </div>

            <div class="product-info">

                <div class="product-category">
                    ${product.categoryName}
                </div>

                <h3>${product.name}</h3>

                <div class="product-bottom">

                    <span class="product-price">
                        ${formatPrice(product.price)}
                    </span>

                    <button
                        class="add-cart-btn"
                        data-id="${product.id}">
                        + أضف للسلة
                    </button>

                </div>

            </div>

        </div>

    `).join("");
}

// ======================================
// CATEGORY FILTER
// ======================================

categories.addEventListener("click", function(event) {

    const button = event.target.closest(".category-btn");

    if (!button) return;

    document.querySelectorAll(".category-btn").forEach(btn => {
        btn.classList.remove("active");
    });

    button.classList.add("active");

    selectedCategory = button.dataset.category;

    displayProducts();
});

// ======================================
// SEARCH
// ======================================

function performSearch() {
    searchTerm = searchInput.value.trim();
    displayProducts();
}

searchBtn.addEventListener("click", performSearch);

searchInput.addEventListener("input", performSearch);

searchInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        performSearch();
    }
});

// ======================================
// ADD TO CART
// ======================================

productsGrid.addEventListener("click", function(event) {

    const button = event.target.closest(".add-cart-btn");

    if (!button) return;

    const productId = Number(button.dataset.id);

    addToCart(productId);
});

function addToCart(productId) {

    const existingItem = cart.find(
        item => item.id === productId
    );

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            id: productId,
            quantity: 1
        });
    }

    saveCart();

    updateCart();

    showToast("تمت إضافة المنتج إلى السلة ✓");
}

// ======================================
// SAVE CART
// ======================================

function saveCart() {
    localStorage.setItem(
        "alRayedCart",
        JSON.stringify(cart)
    );
}

// ======================================
// DISPLAY CART
// ======================================

function updateCart() {

    let total = 0;
    let totalQuantity = 0;

    if (cart.length === 0) {

        cartItems.innerHTML = `
            <div class="empty-cart">
                <h3>🛒</h3>
                <p>سلة المشتريات فارغة</p>
                <small>ابدأ بإضافة منتجاتك المفضلة</small>
            </div>
        `;

    } else {

        cartItems.innerHTML = cart.map(item => {

            const product = products.find(
                p => p.id === item.id
            );

            const subtotal = product.price * item.quantity;

            total += subtotal;
            totalQuantity += item.quantity;

            return `

                <div class="cart-item">

                    <img
                        src="${product.image}"
                        alt="${product.name}"
                    >

                    <div class="cart-item-info">

                        <h4>${product.name}</h4>

                        <strong>
                            ${formatPrice(subtotal)}
                        </strong>

                        <div class="quantity-controls">

                            <button
                                data-action="increase"
                                data-id="${product.id}">
                                +
                            </button>

                            <span>${item.quantity}</span>

                            <button
                                data-action="decrease"
                                data-id="${product.id}">
                                -
                            </button>

                        </div>

                    </div>

                    <button
                        class="remove-item"
                        data-action="remove"
                        data-id="${product.id}"
                        title="حذف المنتج">
                        ✕
                    </button>

                </div>

            `;

        }).join("");
    }

    if (cart.length === 0) {
        totalQuantity = 0;
    }

    cartTotal.textContent = formatPrice(total);
    cartCount.textContent = totalQuantity;

    saveCart();
}

// ======================================
// CART QUANTITY CONTROLS
// ======================================

cartItems.addEventListener("click", function(event) {

    const button = event.target.closest("[data-action]");

    if (!button) return;

    const id = Number(button.dataset.id);
    const action = button.dataset.action;

    const item = cart.find(item => item.id === id);

    if (!item) return;

    if (action === "increase") {
        item.quantity++;
    }

    if (action === "decrease") {
        item.quantity--;

        if (item.quantity <= 0) {
            cart = cart.filter(item => item.id !== id);
        }
    }

    if (action === "remove") {
        cart = cart.filter(item => item.id !== id);
        showToast("تم حذف المنتج من السلة");
    }

    updateCart();
});

// ======================================
// OPEN AND CLOSE CART
// ======================================

function openCart() {
    cartDrawer.classList.add("open");
    cartOverlay.classList.add("show");
    document.body.style.overflow = "hidden";
}

function closeCartDrawer() {
    cartDrawer.classList.remove("open");
    cartOverlay.classList.remove("show");
    document.body.style.overflow = "";
}

cartToggle.addEventListener("click", function(event) {
    event.preventDefault();
    openCart();
});

closeCart.addEventListener("click", closeCartDrawer);

continueShopping.addEventListener("click", closeCartDrawer);

cartOverlay.addEventListener("click", closeCartDrawer);

// Close using Escape key
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        closeCartDrawer();
    }
});

// ======================================
// NOTIFICATION
// ======================================

let toastTimer;

function showToast(message) {

    toast.textContent = message;

    toast.classList.add("show");

    clearTimeout(toastTimer);

    toastTimer = setTimeout(() => {
        toast.classList.remove("show");
    }, 2500);
}

// ======================================
// CHECKOUT DEMO
// ======================================

checkoutBtn.addEventListener("click", function() {

    if (cart.length === 0) {
        showToast("السلة فارغة، أضف منتجات أولًا");
        return;
    }

    showToast("السلة جاهزة! نحتاج ربط نظام الطلبات لإتمام الشراء.");

});

// ======================================
// INITIALIZE WEBSITE
// ======================================

displayProducts();
updateCart();
