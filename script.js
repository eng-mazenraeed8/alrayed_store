// ======================================
// 1. HIDE PRELOADER IMMEDIATELY & SAFELY
// ======================================
function hidePageLoader() {
    const loader = document.getElementById("pageLoader");
    if (loader && !loader.classList.contains("hidden")) {
        loader.classList.add("hidden");
        setTimeout(() => {
            loader.style.display = "none";
        }, 800);
    }
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => setTimeout(hidePageLoader, 1100));
} else {
    setTimeout(hidePageLoader, 1100);
}
setTimeout(hidePageLoader, 2500);

// ======================================
// AL RAYED STORE - PRODUCTS DATA
// ======================================
const products = [
    // --- خضروات ---
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
        id: 12,
        name: "بروكلي",
        category: "vegetables",
        categoryName: "خضروات",
        price: 8,
        image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=600"
    },

    // --- فواكه ---
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
        id: 11,
        name: "فراولة طازجة",
        category: "fruits",
        categoryName: "فواكه",
        price: 12,
        image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=600"
    },

    // --- تمور سعودية فاخرة ---
    {
        id: 7,
        name: "تمر سكري ملكي (1 كجم)",
        category: "dates",
        categoryName: "تمور",
        price: 28,
        image: "https://i.ebayimg.com/images/g/Na8AAOSwqCpmOn42/s-l1600.webp"
    },
    {
        id: 8,
        name: "تمر مجدول فاخر (1 كجم)",
        category: "dates",
        categoryName: "تمور",
        price: 45,
        image: "https://cdn.salla.sa/bvYXx/MVjVJcdTBmyxcb2pK56EfAZ4YtLqdkWkkXroSWmF.jpg"
    },
    {
        id: 21,
        name: "تمر عجوة المدينة (500 جم)",
        category: "dates",
        categoryName: "تمور",
        price: 55,
        image: "https://m.media-amazon.com/images/I/91j2btmiJ+L.jpg"
    },
    {
        id: 22,
        name: "تمر خلاص الأحساء مكنوز (1 كجم)",
        category: "dates",
        categoryName: "تمور",
        price: 22,
        image: "https://cdn.mafrservices.com/sys-master-root/h14/h06/11148243337246/571066_main.jpg?im=Resize=376"
    },
    {
        id: 23,
        name: "تمر صقعي فاخر (1 كجم)",
        category: "dates",
        categoryName: "تمور",
        price: 34,
        image: "https://i.ebayimg.com/images/g/eqMAAOSwloJlNNtL/s-l1600.webp"
    },

    // --- مواد غذائية ---
    {
        id: 9,
        name: "عسل طبيعي",
        category: "food",
        categoryName: "مواد غذائية",
        price: 35,
        image: "https://i.ebayimg.com/images/g/XrkAAOSwvkdl9i02/s-l1600.webp"
    },
    {
        id: 10,
        name: "زيت زيتون بكر",
        category: "food",
        categoryName: "مواد غذائية",
        price: 28,
        image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=600"
    },
    {
        id: 13,
        name: "أرز بسمتي هندي (5 كجم)",
        category: "food",
        categoryName: "مواد غذائية",
        price: 38,
        image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600"
    },
    {
        id: 14,
        name: "سكر أبيض ناعم (2 كجم)",
        category: "food",
        categoryName: "مواد غذائية",
        price: 9.5,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHf073WoZH3FkDhOSjzbDjwiS39hS-7cfqimNbPoT1TQ&s=10"
    },
    {
        id: 15,
        name: "زيت طبخ نباتي (1.5 لتر)",
        category: "food",
        categoryName: "مواد غذائية",
        price: 16,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6vqvQTB33nvQrG3pBuJYMuKt9LYv8AF7eA5VptvQIcg&s=10"
    },
    {
        id: 16,
        name: "مكرونة إيطالية",
        category: "food",
        categoryName: "مواد غذائية",
        price: 6,
        image: "https://images.unsplash.com/photo-1551462147-ff29053bfc14?w=600"
    },

    // --- سناكس وعصائر ---
    {
        id: 17,
        name: "شيبسي بطاطس بالملح والخل",
        category: "snacks",
        categoryName: "سناكس ومشروبات",
        price: 5.5,
        image: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=600"
    },
    {
        id: 18,
        name: "شيبسي بالجبنة المتبلة",
        category: "snacks",
        categoryName: "سناكس ومشروبات",
        price: 5.5,
        image: "https://images.unsplash.com/photo-1621447504864-d8686e12698c?w=600"
    },
    {
        id: 19,
        name: "عصير برتقال طبيعي (1 لتر)",
        category: "snacks",
        categoryName: "سناكس ومشروبات",
        price: 8,
        image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600"
    },
    {
        id: 20,
        name: "عصير مانجو طازج (1 لتر)",
        category: "snacks",
        categoryName: "سناكس ومشروبات",
        price: 9,
        image: "https://images.unsplash.com/photo-1546173159-315724a31696?w=600"
    }
];

// ======================================
// ELEMENTS & CONFIG
// ======================================
const STORE_WHATSAPP = "966597098044";
const FREE_SHIPPING_GOAL = 100;

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
const CLOUD_PRODUCT_ID_OFFSET = 1000000;

let selectedCategory = "all";
let searchTerm = "";
let cart = [];
let wishlist = JSON.parse(localStorage.getItem("alRayedWishlist") || "[]");

try {
    const savedCart = JSON.parse(localStorage.getItem("alRayedCart") || "[]");
    if (Array.isArray(savedCart)) {
        cart = savedCart.filter(item =>
            (products.some(p => p.id === item.id) || item.id === 99 || item.id >= CLOUD_PRODUCT_ID_OFFSET) &&
            Number.isInteger(item.quantity) &&
            item.quantity > 0
        );
    }
} catch (error) {
    cart = [];
}

function formatPrice(price) {
    return price.toFixed(2) + " ر.س";
}

// ======================================
// NOTIFICATION (TOAST)
// ======================================
let toastTimer;
function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
        toast.classList.remove("show");
    }, 2500);
}

// ======================================
// SCROLL REVEAL OBSERVER
// ======================================
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }
    });
}, { threshold: 0.12 });

function applyScrollAnimations() {
    document.querySelectorAll(".section-heading, .categories, .footer-column").forEach(sec => {
        sec.classList.add("reveal");
        revealObserver.observe(sec);
    });

    document.querySelectorAll(".product-card").forEach((card, index) => {
        card.classList.add("reveal");
        card.style.transitionDelay = `${(index % 4) * 0.08}s`;
        revealObserver.observe(card);
    });
}

// ======================================
// DISPLAY PRODUCTS + BADGES + WISHLIST
// ======================================
function displayProducts() {
    if (!productsGrid) return;

    const filteredProducts = products.filter(product => {
        if (product.id === 99) return false;
        const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
        const matchesSearch = product.name.includes(searchTerm);
        return matchesCategory && matchesSearch;
    });

    if (productsTotal) {
        productsTotal.textContent = filteredProducts.length + " منتجات";
    }

    if (filteredProducts.length === 0) {
        productsGrid.innerHTML = '<div class="no-products">عذرًا، لم يتم العثور على منتجات.</div>';
        return;
    }

    productsGrid.innerHTML = filteredProducts.map((product, index) => {
        const isLiked = wishlist.includes(product.id);
        let badgeHTML = "";
        let priceHTML = formatPrice(product.price);

        if (index % 3 === 0) {
            badgeHTML = `<span class="product-badge gold">الأكثر طلبًا ⭐</span>`;
            const oldVal = (product.price * 1.2).toFixed(2);
            priceHTML = `${product.price.toFixed(2)} ر.س <span class="old-price">${oldVal}</span>`;
        } else if (index % 4 === 1) {
            badgeHTML = `<span class="product-badge">طازج اليوم 🌿</span>`;
        }

        return `
            <div class="product-card">
                ${badgeHTML}
                <button class="wishlist-btn ${isLiked ? "liked" : ""}" data-wishlist-id="${product.id}" title="أضف للمفضلة">
                    ${isLiked ? "❤️" : "🤍"}
                </button>

                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}" loading="lazy">
                </div>

                <div class="product-info">
                    <div class="product-category">${product.categoryName}</div>
                    <h3>${product.name}</h3>
                    <div class="product-bottom">
                        <span class="product-price">${priceHTML}</span>
                        <button class="add-cart-btn" data-id="${product.id}">+ أضف للسلة</button>
                    </div>
                </div>
            </div>
        `;
    }).join("");

    applyScrollAnimations();
}

// ======================================
// CATEGORY & SEARCH
// ======================================
if (categories) {
    categories.addEventListener("click", (event) => {
        const button = event.target.closest(".category-btn");
        if (!button) return;

        document.querySelectorAll(".category-btn").forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
        selectedCategory = button.dataset.category;
        displayProducts();
    });
}

function performSearch() {
    searchTerm = searchInput ? searchInput.value.trim() : "";
    displayProducts();
}

if (searchBtn) searchBtn.addEventListener("click", performSearch);
if (searchInput) {
    searchInput.addEventListener("input", performSearch);
    searchInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") performSearch();
    });
}

// ======================================
// CART FUNCTIONS
// ======================================
function saveCart() {
    localStorage.setItem("alRayedCart", JSON.stringify(cart));
}

function addToCart(productId) {
    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ id: productId, quantity: 1 });
    }

    saveCart();
    updateCart();
    showToast("تمت إضافة المنتج إلى السلة ✓");

    if (cartToggle) {
        cartToggle.classList.remove("bump");
        void cartToggle.offsetWidth;
        cartToggle.classList.add("bump");
    }
}

function updateCart() {
    let total = 0;
    let totalQuantity = 0;

    if (cart.length === 0) {
        if (cartItems) {
            cartItems.innerHTML = `
                <div class="empty-cart">
                    <h3>🛒</h3>
                    <p>سلة المشتريات فارغة</p>
                    <small>ابدأ بإضافة منتجاتك المفضلة</small>
                </div>
            `;
        }
    } else if (cartItems) {
        cartItems.innerHTML = cart.map(item => {
            const product = products.find(p => p.id === item.id);
            if (!product) return "";
            const subtotal = product.price * item.quantity;
            total += subtotal;
            totalQuantity += item.quantity;

            return `
                <div class="cart-item">
                    <img src="${product.image}" alt="${product.name}">
                    <div class="cart-item-info">
                        <h4>${product.name}</h4>
                        <strong>${formatPrice(subtotal)}</strong>
                        <div class="quantity-controls">
                            <button data-action="increase" data-id="${product.id}">+</button>
                            <span>${item.quantity}</span>
                            <button data-action="decrease" data-id="${product.id}">-</button>
                        </div>
                    </div>
                    <button class="remove-item" data-action="remove" data-id="${product.id}" title="حذف المنتج">✕</button>
                </div>
            `;
        }).join("");
    }

    if (cartTotal) cartTotal.textContent = formatPrice(total);
    if (cartCount) cartCount.textContent = totalQuantity;

    const shippingText = document.getElementById("shippingText");
    const shippingProgress = document.getElementById("shippingProgress");
    if (shippingText && shippingProgress) {
        if (total >= FREE_SHIPPING_GOAL) {
            shippingText.innerHTML = "مبروك! حصلت على <strong>توصيل مجاني 🎉🚚</strong>";
            shippingProgress.style.width = "100%";
            shippingProgress.style.backgroundColor = "#15803D";
        } else {
            const remaining = (FREE_SHIPPING_GOAL - total).toFixed(2);
            const percentage = Math.min((total / FREE_SHIPPING_GOAL) * 100, 100);
            shippingText.innerHTML = `أضف منتجات بقيمة <strong>${remaining} ر.س</strong> للحصول على توصيل مجاني 🚚`;
            shippingProgress.style.width = `${percentage}%`;
            shippingProgress.style.backgroundColor = "var(--primary-main)";
        }
    }

    saveCart();
}

// ======================================
// CART CONTROLS & DRAWER OPEN/CLOSE
// ======================================
if (cartItems) {
    cartItems.addEventListener("click", (event) => {
        const button = event.target.closest("[data-action]");
        if (!button) return;

        const id = Number(button.dataset.id);
        const action = button.dataset.action;
        const item = cart.find(i => i.id === id);
        if (!item) return;

        if (action === "increase") item.quantity++;
        if (action === "decrease") {
            item.quantity--;
            if (item.quantity <= 0) cart = cart.filter(i => i.id !== id);
        }
        if (action === "remove") {
            cart = cart.filter(i => i.id !== id);
            showToast("تم حذف المنتج من السلة");
        }

        updateCart();
    });
}

let isCheckoutStep = false;
const checkoutFields = document.getElementById("checkoutFields");

function resetCheckoutState() {
    isCheckoutStep = false;
    if (checkoutFields) checkoutFields.style.display = "none";
    if (checkoutBtn) {
        checkoutBtn.textContent = "إتمام الطلب";
        checkoutBtn.style.backgroundColor = "";
    }
}

const ORDER_SAVE_TIMEOUT_MS = 5000;

async function saveOrderToFirestore(orderData) {
    if (!window.AlRayedDB) {
        console.error("Firestore is not ready; order was not saved to the cloud.");
        return null;
    }
    const timeout = new Promise(resolve => setTimeout(() => resolve(null), ORDER_SAVE_TIMEOUT_MS));
    return Promise.race([window.AlRayedDB.saveOrderToCloud(orderData), timeout]);
}

function openCart() {
    if (cartDrawer) cartDrawer.classList.add("open");
    if (cartOverlay) cartOverlay.classList.add("show");
    document.body.style.overflow = "hidden";
}

function closeCartDrawer() {
    if (cartDrawer) cartDrawer.classList.remove("open");
    if (cartOverlay) cartOverlay.classList.remove("show");
    document.body.style.overflow = "";
    resetCheckoutState();
}

if (cartToggle) {
    cartToggle.addEventListener("click", (e) => {
        e.preventDefault();
        openCart();
    });
}
if (closeCart) closeCart.addEventListener("click", closeCartDrawer);
if (continueShopping) continueShopping.addEventListener("click", closeCartDrawer);
if (cartOverlay) cartOverlay.addEventListener("click", closeCartDrawer);

// ======================================
// LIVE ORDER TRACKING (5 MINUTES TIMER)
// ======================================
const orderTrackerCard = document.getElementById("orderTrackerCard");
const trackerBadge = document.getElementById("trackerBadge");
const trackerTitle = document.getElementById("trackerTitle");
const trackerDesc = document.getElementById("trackerDesc");
const trackerTimer = document.getElementById("trackerTimer");
const tLine2 = document.getElementById("tLine2");
const tStep3 = document.getElementById("tStep3");
const closeTracker = document.getElementById("closeTracker");

let trackingInterval = null;

function setOrderDispatchedState() {
    if (!orderTrackerCard) return;
    trackerBadge.textContent = "✅ تم التجهيز";
    trackerBadge.classList.add("ready");
    trackerTitle.textContent = "الطلب طلع مع المندوب 🛵🎉";
    trackerDesc.textContent = "مندوب متجر الرايد في الطريق إليك الآن!";
    trackerTimer.style.display = "none";
    if (tLine2) tLine2.classList.add("active");
    if (tStep3) tStep3.classList.add("active");
}

function renderOrderTracker() {
    const endTime = Number(localStorage.getItem("alRayedOrderEndTime"));
    if (!endTime || !orderTrackerCard) return;

    orderTrackerCard.style.display = "block";
    clearInterval(trackingInterval);

    function updateTrackerTick() {
        const remainingMs = endTime - Date.now();

        if (remainingMs <= 0) {
            clearInterval(trackingInterval);
            setOrderDispatchedState();
            return;
        }

        const totalSecs = Math.ceil(remainingMs / 1000);
        const mins = String(Math.floor(totalSecs / 60)).padStart(2, "0");
        const secs = String(totalSecs % 60).padStart(2, "0");

        trackerBadge.textContent = "⏳ جاري التجهيز";
        trackerBadge.classList.remove("ready");
        trackerTitle.textContent = "جاري تجهيز طلبك بعناية 📦";
        trackerDesc.textContent = "الوقت المتبقي لجهوزية الطلب:";
        trackerTimer.style.display = "block";
        trackerTimer.textContent = `${mins}:${secs}`;
    }

    updateTrackerTick();
    trackingInterval = setInterval(updateTrackerTick, 1000);
}

function startOrderTracking() {
    const fiveMinutesFromNow = Date.now() + (5 * 60 * 1000);
    localStorage.setItem("alRayedOrderEndTime", String(fiveMinutesFromNow));
    renderOrderTracker();
}

if (closeTracker) {
    closeTracker.addEventListener("click", () => {
        orderTrackerCard.style.display = "none";
        localStorage.removeItem("alRayedOrderEndTime");
        clearInterval(trackingInterval);
    });
}

renderOrderTracker();

// ======================================
// PAYMENT METHODS & WHATSAPP CHECKOUT
// ======================================
const customerName = document.getElementById("customerName");
const customerPhone = document.getElementById("customerPhone");
const customerAddress = document.getElementById("customerAddress");
const transferInfoBox = document.getElementById("transferInfoBox");
const transferDetailsText = document.getElementById("transferDetailsText");

const savedCustomer = JSON.parse(localStorage.getItem("alRayedCustomer") || "{}");
if (customerName && savedCustomer.name) customerName.value = savedCustomer.name;
if (customerPhone && savedCustomer.phone) customerPhone.value = savedCustomer.phone;
if (customerAddress && savedCustomer.address) customerAddress.value = savedCustomer.address;

document.querySelectorAll(".pay-option").forEach(option => {
    option.addEventListener("click", () => {
        document.querySelectorAll(".pay-option").forEach(o => o.classList.remove("active"));
        option.classList.add("active");
        const radio = option.querySelector("input");
        if (radio) radio.checked = true;

        if (transferInfoBox && transferDetailsText && radio) {
            if (radio.value.includes("تحويل بنكي")) {
                transferInfoBox.style.display = "block";
                transferDetailsText.innerHTML = "🏦 <strong>مصرف الراجحي:</strong> Al Rayed Store<br><strong>IBAN:</strong> SA0000000000000000000000<br><em>يرجى إرسال صورة الإيصال في واتساب بعد تأكيد الطلب.</em>";
            } else if (radio.value.includes("STC Pay")) {
                transferInfoBox.style.display = "block";
                transferDetailsText.innerHTML = "📱 <strong>محفظة STC Pay:</strong> 0500000000<br><em>يرجى إرفاق لقطة التحويل في واتساب لتأكيد الطلب.</em>";
            } else {
                transferInfoBox.style.display = "none";
            }
        }
        if (cartDrawer) cartDrawer.scrollTop = cartDrawer.scrollHeight;
    });
});

if (checkoutBtn) {
    checkoutBtn.addEventListener("click", async (e) => {
        e.preventDefault();
        if (checkoutBtn.disabled) return;

        if (cart.length === 0) {
            showToast("السلة فارغة، أضف منتجات أولًا");
            return;
        }

        if (!isCheckoutStep) {
            if (checkoutFields) checkoutFields.style.display = "flex";
            checkoutBtn.textContent = "تأكيد وإرسال الطلب عبر واتساب 💬";
            checkoutBtn.style.backgroundColor = "#15803D";
            isCheckoutStep = true;
            if (cartDrawer) cartDrawer.scrollTop = cartDrawer.scrollHeight;
            if (customerName && !customerName.value) customerName.focus();
            return;
        }

        const name = customerName ? customerName.value.trim() : "";
        const phone = customerPhone ? customerPhone.value.trim() : "";
        const address = customerAddress ? customerAddress.value.trim() : "";
        const selectedPayment = document.querySelector('input[name="paymentMethod"]:checked')?.value || "الدفع عند الاستلام 💵";

        if (!name || !phone || !address) {
            showToast("من فضلك أكمل الاسم ورقم الجوال والعنوان");
            return;
        }

        localStorage.setItem("alRayedCustomer", JSON.stringify({ name, phone, address }));

        let orderDetails = `*طلب جديد من متجر الرايد 🛒*\n━━━━━━━━━━━━━━\n`;
        orderDetails += `👤 *الاسم:* ${name}\n`;
        orderDetails += `📞 *الجوال:* ${phone}\n`;
        orderDetails += `📍 *العنوان:* ${address}\n`;
        orderDetails += `💳 *طريقة الدفع:* ${selectedPayment}\n`;
        orderDetails += `━━━━━━━━━━━━━━\n`;
        orderDetails += `*المنتجات المطلوبة:*\n`;

        let totalAmount = 0;
        cart.forEach((item, idx) => {
            const p = products.find(prod => prod.id === item.id);
            if (p) {
                const sub = p.price * item.quantity;
                totalAmount += sub;
                orderDetails += `${idx + 1}. ${p.name} (×${item.quantity}) = ${sub.toFixed(2)} ر.س\n`;
            }
        });

        const shippingStatus = totalAmount >= FREE_SHIPPING_GOAL ? "مجاني 🎉" : "يُحدد حسب المنطقة";
        orderDetails += `━━━━━━━━━━━━━━\n`;
        orderDetails += `🚚 *التوصيل:* ${shippingStatus}\n`;
        orderDetails += `💰 *الإجمالي:* ${totalAmount.toFixed(2)} ر.س`;

        const orderItems = cart.reduce((list, item) => {
            const p = products.find(prod => prod.id === item.id);
            if (p) list.push({ name: p.name, qty: item.quantity, price: p.price });
            return list;
        }, []);

        checkoutBtn.disabled = true;
        showToast("جاري حفظ طلبك... ⏳");

        const orderId = await saveOrderToFirestore({
            customerName: name,
            customerPhone: phone,
            customerAddress: address,
            paymentMethod: selectedPayment,
            items: orderItems,
            total: Number(totalAmount.toFixed(2))
        });

        checkoutBtn.disabled = false;
        if (orderId) orderDetails += `\n🔖 *رقم الطلب:* ${orderId}`;

        startOrderTracking();
        closeCartDrawer();

        const cleanPhone = String(STORE_WHATSAPP).replace(/\D/g, "");
        const whatsappUrl = `https://api.whatsapp.com/send?phone=${cleanPhone}&text=${encodeURIComponent(orderDetails)}`;

        showToast("تم تأكيد طلبك! جاري فتح واتساب... 💬");
        setTimeout(() => {
            window.location.href = whatsappUrl;
        }, 600);
    });
}

// ======================================
// PRODUCT GRID CLICKS (CART, WISHLIST, QUICK VIEW)
// ======================================
const qvOverlay = document.getElementById("qvOverlay");
const closeQv = document.getElementById("closeQv");
const qvImage = document.getElementById("qvImage");
const qvCategory = document.getElementById("qvCategory");
const qvName = document.getElementById("qvName");
const qvPrice = document.getElementById("qvPrice");
const qvDesc = document.getElementById("qvDesc");
const qvQtyValue = document.getElementById("qvQtyValue");
const qvIncrease = document.getElementById("qvIncrease");
const qvDecrease = document.getElementById("qvDecrease");
const qvAddBtn = document.getElementById("qvAddBtn");

let currentQvProductId = null;
let currentQvQty = 1;

const categoryDescriptions = {
    vegetables: "خضروات طازجة تُقطف يوميًا وتُحفظ بعناية لتصلك بأعلى قيمة غذائية ونضارة تامة.",
    fruits: "فواكه موسمية طازجة منتقاة بعناية فائقة بطعم غني وجودة ممتازة لكل أفراد العائلة.",
    dates: "تمور سعودية فاخرة من أجود المزارع، مغلفة بعناية للحفاظ على طراوتها ومذاقها الأصيل.",
    food: "منتجات غذائية أساسية عالية الجودة لا غنى عنها في مطبخك اليومي.",
    snacks: "مشروبات وسناكس منعشة ولذيذة بأفضل جودة لتناسب جميع أوقاتك."
};

function openQuickView(productId) {
    const product = products.find(p => p.id === productId);
    if (!product || !qvOverlay) return;

    currentQvProductId = product.id;
    currentQvQty = 1;

    qvImage.src = product.image;
    qvImage.alt = product.name;
    qvCategory.textContent = product.categoryName;
    qvName.textContent = product.name;
    qvPrice.textContent = formatPrice(product.price);
    qvDesc.textContent = categoryDescriptions[product.category] || "منتج عالي الجودة من متجر الرايد.";
    qvQtyValue.textContent = currentQvQty;

    qvOverlay.classList.add("show");
    document.body.style.overflow = "hidden";
}

function closeQuickViewModal() {
    if (!qvOverlay) return;
    qvOverlay.classList.remove("show");
    document.body.style.overflow = "";
}

if (productsGrid) {
    productsGrid.addEventListener("click", (event) => {
        const addBtn = event.target.closest(".add-cart-btn");
        if (addBtn) {
            addToCart(Number(addBtn.dataset.id));
            return;
        }

        const wishBtn = event.target.closest(".wishlist-btn");
        if (wishBtn) {
            const id = Number(wishBtn.dataset.wishlistId);
            if (wishlist.includes(id)) {
                wishlist = wishlist.filter(w => w !== id);
                wishBtn.classList.remove("liked");
                wishBtn.innerHTML = "🤍";
                showToast("تمت الإزالة من المفضلة");
            } else {
                wishlist.push(id);
                wishBtn.classList.add("liked");
                wishBtn.innerHTML = "❤️";
                showToast("تمت الإضافة للمفضلة ❤️");
            }
            localStorage.setItem("alRayedWishlist", JSON.stringify(wishlist));
            return;
        }

        const card = event.target.closest(".product-card");
        if (card) {
            const btn = card.querySelector(".add-cart-btn");
            if (btn) openQuickView(Number(btn.dataset.id));
        }
    });
}

if (qvOverlay) {
    if (qvIncrease) qvIncrease.addEventListener("click", () => { currentQvQty++; qvQtyValue.textContent = currentQvQty; });
    if (qvDecrease) qvDecrease.addEventListener("click", () => { if (currentQvQty > 1) { currentQvQty--; qvQtyValue.textContent = currentQvQty; } });
    if (qvAddBtn) {
        qvAddBtn.addEventListener("click", () => {
            if (!currentQvProductId) return;
            const existing = cart.find(i => i.id === currentQvProductId);
            if (existing) existing.quantity += currentQvQty;
            else cart.push({ id: currentQvProductId, quantity: currentQvQty });

            saveCart();
            updateCart();
            closeQuickViewModal();
            showToast(`تمت إضافة ${currentQvQty} إلى السلة ✓`);
        });
    }
    if (closeQv) closeQv.addEventListener("click", closeQuickViewModal);
    qvOverlay.addEventListener("click", (e) => { if (e.target === qvOverlay) closeQuickViewModal(); });
}

// ======================================
// AUTH MODAL (LOGIN / REGISTER)
// ======================================
const loginBtn = document.querySelector(".login-btn");
const authOverlay = document.getElementById("authOverlay");
const closeAuth = document.getElementById("closeAuth");
const authTabs = document.querySelectorAll(".auth-tab");
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const authTitle = document.getElementById("authTitle");
const authSubtitle = document.getElementById("authSubtitle");

function closeAuthModal() {
    if (authOverlay) authOverlay.classList.remove("show");
    document.body.style.overflow = "";
}

if (loginBtn && authOverlay) {
    loginBtn.addEventListener("click", () => {
        authOverlay.classList.add("show");
        document.body.style.overflow = "hidden";
    });
    if (closeAuth) closeAuth.addEventListener("click", closeAuthModal);
    authOverlay.addEventListener("click", (e) => { if (e.target === authOverlay) closeAuthModal(); });

    authTabs.forEach(tab => {
        tab.addEventListener("click", () => {
            authTabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");
            if (tab.dataset.tab === "login") {
                loginForm.classList.add("active");
                registerForm.classList.remove("active");
                authTitle.textContent = "مرحبًا بعودتك 🌿";
                authSubtitle.textContent = "سجل دخولك لمتابعة طلباتك وعروض متجر الرايد";
            } else {
                registerForm.classList.add("active");
                loginForm.classList.remove("active");
                authTitle.textContent = "انضم لعائلة الرايد 🛒";
                authSubtitle.textContent = "أنشئ حسابك في ثوانٍ واستمتع بتجربة تسوق أسهل";
            }
        });
    });

    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            closeAuthModal();
            loginBtn.textContent = "أهلاً بك ✓";
            showToast("تم تسجيل الدخول بنجاح!");
        });
    }
    if (registerForm) {
        registerForm.addEventListener("submit", (e) => {
            e.preventDefault();
            closeAuthModal();
            loginBtn.textContent = "أهلاً بك ✓";
            showToast("تم إنشاء حسابك بنجاح!");
        });
    }
}

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        closeCartDrawer();
        closeQuickViewModal();
        closeAuthModal();
    }
});

// ======================================
// DEALS, DARK MODE & AMBIENT UI
// ======================================
let totalSeconds = (14 * 3600) + (45 * 60) + 30;
const hoursEl = document.getElementById("hoursVal");
const minsEl = document.getElementById("minsVal");
const secsEl = document.getElementById("secsVal");

if (hoursEl && minsEl && secsEl) {
    setInterval(() => {
        if (totalSeconds <= 0) totalSeconds = 12 * 3600;
        totalSeconds--;
        hoursEl.textContent = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
        minsEl.textContent = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
        secsEl.textContent = String(totalSeconds % 60).padStart(2, "0");
    }, 1000);
}

products.push({
    id: 99,
    name: "بوكس التمور الملكية والعسل (عرض خاص)",
    category: "dates",
    categoryName: "عروض حصرية",
    price: 119,
    image: "./assets/royal-box.jpg"
});

const orderDealBtn = document.getElementById("orderDealBtn");
if (orderDealBtn) {
    orderDealBtn.addEventListener("click", () => {
        addToCart(99);
        openCart();
    });
}

const cursorGlow = document.createElement("div");
cursorGlow.classList.add("cursor-glow");
document.body.appendChild(cursorGlow);

let mouseX = window.innerWidth / 2, mouseY = window.innerHeight / 2;
let glowX = mouseX, glowY = mouseY;

document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateGlow() {
    glowX += (mouseX - glowX) * 0.08;
    glowY += (mouseY - glowY) * 0.08;
    cursorGlow.style.left = `${glowX}px`;
    cursorGlow.style.top = `${glowY}px`;
    requestAnimationFrame(animateGlow);
}
animateGlow();

const progressBar = document.createElement("div");
progressBar.classList.add("scroll-progress-bar");
document.body.appendChild(progressBar);

const backToTopBtn = document.createElement("button");
backToTopBtn.classList.add("back-to-top");
backToTopBtn.innerHTML = "↑";
backToTopBtn.setAttribute("aria-label", "العودة للأعلى");
document.body.appendChild(backToTopBtn);

const headerEl = document.querySelector(".header");

window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    progressBar.style.width = docHeight > 0 ? `${(scrollTop / docHeight) * 100}%` : "0%";
    backToTopBtn.classList.toggle("show", scrollTop > 350);
    if (headerEl) headerEl.classList.toggle("scrolled", scrollTop > 40);
});

backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

const headerActions = document.querySelector(".header-actions");
if (headerActions) {
    const themeBtn = document.createElement("button");
    themeBtn.classList.add("theme-toggle-btn");
    themeBtn.innerHTML = "🌙";
    themeBtn.title = "تبديل الوضع الليلي";
    headerActions.prepend(themeBtn);

    themeBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        const isDark = document.body.classList.contains("dark-mode");
        themeBtn.innerHTML = isDark ? "☀️" : "🌙";
        showToast(isDark ? "تم تفعيل الوضع الليلي الفخم 🌙" : "تم تفعيل الوضع النهاري ☀️");
    });
}

const floatingWa = document.createElement("a");
floatingWa.classList.add("floating-wa");
floatingWa.href = `https://wa.me/${STORE_WHATSAPP}?text=${encodeURIComponent("مرحباً متجر الرايد، أود الاستفسار عن المنتجات 🌿")}`;
floatingWa.target = "_blank";
floatingWa.rel = "noopener noreferrer";
floatingWa.innerHTML = `<span class="wa-online-dot"></span> خدمة العملاء`;
document.body.appendChild(floatingWa);

// ======================================
// INITIALIZE
// ======================================
displayProducts();
updateCart();
// ======================================
// 22. LEGAL POLICIES MODAL & PROMO CODE
// ======================================

// 1. محتوى السياسات القانونية (متوافق مع نظام التجارة الإلكترونية السعودي)
const policiesContent = {
    privacy: {
        title: "سياسة الخصوصية وحماية البيانات 🔒",
        body: `
            <p>نلتزم في <strong>متجر الرايد (Al Rayed Store)</strong> بحماية خصوصية بيانات عملائنا وفق نظام حماية البيانات الشخصية في المملكة العربية السعودية.</p>
            <h4>أولاً: البيانات التي نجمعها</h4>
            <ul>
                <li>الاسم الكامل، رقم الجوال، وعنوان التوصيل لغرض تجهيز وتوصيل الطلبات فقط.</li>
                <li>سجل الطلبات المفضلة لتحسين تجربة التسوق وتقديم عروض مخصصة لك.</li>
            </ul>
            <h4>ثانياً: مشاركة البيانات</h4>
            <p>لا نقوم ببيع أو مشاركة بياناتك مع أي طرف ثالث باستثناء شركات التوصيل المعتمدة وبوابات الدفع لإتمام طلبك بأمان.</p>
        `
    },
    terms: {
        title: "الشروط والأحكام 📜",
        body: `
            <p>باستخدامك لموقع <strong>متجر الرايد</strong> وإتمام أي طلب، فإنك توافق على الشروط التالية:</p>
            <ul>
                <li>جميع الأسعار المعروضة بالريال السعودي (ر.س) وشاملة لضريبة القيمة المضافة.</li>
                <li>يتم تأكيد الطلبات وتحديد موعد التوصيل خلال ساعات العمل الرسمية (8 صباحاً حتى 11 مساءً).</li>
                <li>يحق للمتجر تعديل الأسعار أو العروض الترويجية دون إشعار مسبق، ولا يسري التعديل على الطلبات المؤكدة مسبقاً.</li>
            </ul>
        `
    },
    refund: {
        title: "سياسة الاستبدال والاسترجاع 🔄",
        body: `
            <p>حرصاً على سلامة وصحة عملائنا، تخضع المنتجات الغذائية والتمور للضوابط التالية:</p>
            <h4>1. المنتجات الطازجة والغذائية</h4>
            <ul>
                <li>نظراً لطبيعة المنتجات الغذائية (التمور، العسل، الخضروات، والفواكه)، لا يمكن استرجاعها أو استبدالها بعد الاستلام والفتح حفاظاً على الصحة العامة.</li>
            </ul>
            <h4>2. حالات الاستبدال أو التعويض الفوري</h4>
            <ul>
                <li>في حال وصول منتج تالف أو غير مطابق للمواصفات المطلوبة، يحق للعميل طلب الاستبدال أو استرداد كامل المبلغ خلال <strong>24 ساعة</strong> من وقت الاستلام عبر التواصل معنا على واتساب.</li>
            </ul>
        `
    }
};

const policyOverlay = document.getElementById("policyOverlay");
const closePolicy = document.getElementById("closePolicy");
const policyTitle = document.getElementById("policyTitle");
const policyBody = document.getElementById("policyBody");

document.querySelectorAll("[data-policy]").forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const key = link.dataset.policy;
        const data = policiesContent[key];
        if (data && policyOverlay) {
            policyTitle.textContent = data.title;
            policyBody.innerHTML = data.body;
            policyOverlay.classList.add("show");
            document.body.style.overflow = "hidden";
        }
    });
});

function closePolicyModal() {
    if (policyOverlay) policyOverlay.classList.remove("show");
    document.body.style.overflow = "";
}

if (closePolicy) closePolicy.addEventListener("click", closePolicyModal);
if (policyOverlay) {
    policyOverlay.addEventListener("click", (e) => {
        if (e.target === policyOverlay) closePolicyModal();
    });
}

// 2. نظام كود الخصم (Promo Code: RAYED10)
let activeDiscountPercent = 0;
const promoInput = document.getElementById("promoInput");
const applyPromoBtn = document.getElementById("applyPromoBtn");
const promoMsg = document.getElementById("promoMsg");

const VALID_PROMOS = {
    "RAYED10": 10,
    "WELCOME15": 15
};

if (applyPromoBtn && promoInput) {
    applyPromoBtn.addEventListener("click", () => {
        const code = promoInput.value.trim().toUpperCase();
        if (!code) return;

        if (VALID_PROMOS[code]) {
            activeDiscountPercent = VALID_PROMOS[code];
            promoMsg.style.display = "block";
            promoMsg.className = "promo-msg success";
            promoMsg.textContent = `🎉 تم تفعيل خصم ${activeDiscountPercent}% بنجاح!`;
            showToast(`تم تطبيق كود الخصم (${activeDiscountPercent}%) ✓`);
            updateCartWithDiscount();
        } else {
            activeDiscountPercent = 0;
            promoMsg.style.display = "block";
            promoMsg.className = "promo-msg error";
            promoMsg.textContent = "❌ كود الخصم غير صحيح أو منتهي الصلاحية";
            updateCartWithDiscount();
        }
    });
}

function updateCartWithDiscount() {
    const rawTotal = cart.reduce((sum, item) => {
        const p = products.find(prod => prod.id === item.id);
        return sum + (p ? p.price * item.quantity : 0);
    }, 0);

    if (cartTotal) {
        if (activeDiscountPercent > 0 && rawTotal > 0) {
            const finalTotal = rawTotal * (1 - activeDiscountPercent / 100);
            cartTotal.innerHTML = `<span style="text-decoration:line-through;color:#9CA3AF;font-size:13px;margin-left:6px;">${rawTotal.toFixed(2)}</span> ${finalTotal.toFixed(2)} ر.س`;
        } else {
            cartTotal.textContent = formatPrice(rawTotal);
        }
    }
}

const baseUpdateCart = updateCart;
updateCart = function() {
    baseUpdateCart();
    updateCartWithDiscount();
};
// مزامنة لحظية للمنتجات المضافة من لوحة التحكم (Firebase Firestore)
function cloudProductId(firebaseId) {
    let hash = 0;
    for (const ch of firebaseId) hash = (hash * 31 + ch.charCodeAt(0)) >>> 0;
    return CLOUD_PRODUCT_ID_OFFSET + (hash % 1000000000);
}

function applyCloudProducts(items) {
    for (let i = products.length - 1; i >= 0; i--) {
        if (products[i].firebaseId) products.splice(i, 1);
    }

    const cloudProducts = items
        .filter(item => item.name && Number.isFinite(Number(item.price)))
        .filter(item => !products.some(p => p.name === item.name))
        .map(item => ({
            id: cloudProductId(item.firebaseId),
            firebaseId: item.firebaseId,
            name: String(item.name),
            category: item.category || "dates",
            categoryName: item.categoryName || "منتجات مميزة",
            price: Number(item.price),
            image: item.image || "assets/Al%20Rayed%20Store%20Organic%20Emblem.png"
        }));

    products.unshift(...cloudProducts);

    const cartBefore = cart.length;
    cart = cart.filter(item => item.id === 99 || products.some(p => p.id === item.id));
    if (cart.length !== cartBefore) showToast("تم تحديث السلة بعد تغيير المنتجات");

    displayProducts();
    updateCart();
}

function startCloudProductsSync() {
    if (window.AlRayedDB && typeof window.AlRayedDB.subscribeToProducts === "function") {
        window.AlRayedDB.subscribeToProducts(applyCloudProducts);
    }
}

if (window.AlRayedDB) {
    startCloudProductsSync();
} else {
    window.addEventListener("alrayed-db-ready", startCloudProductsSync, { once: true });
}
