import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
    updateDoc,
    deleteDoc,
    doc,
    query,
    orderBy,
    serverTimestamp,
    onSnapshot
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import {
    getAuth,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged as firebaseOnAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";


const firebaseConfig = {
    apiKey: "AIzaSyBYYrMNXCR-pZRgp_RqoAahqqpsugRRZbA",
    authDomain: "al-rayed-store.firebaseapp.com",
    databaseURL: "https://al-rayed-store-default-rtdb.firebaseio.com",
    projectId: "al-rayed-store",
    storageBucket: "al-rayed-store.firebasestorage.app",
    messagingSenderId: "821440658785",
    appId: "1:821440658785:web:3b28996a710e2529dc9920"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// إتاحة دوال قاعدة البيانات للمتجر ولوحة التحكم
window.AlRayedDB = {
    // 1. حفظ طلب جديد في قاعدة البيانات
    async saveOrderToCloud(orderData) {
        try {
            const docRef = await addDoc(collection(db, "orders"), {
                ...orderData,
                status: "جاري التجهيز 📦",
                createdAt: serverTimestamp()
            });
            return docRef.id;
        } catch (err) {
            console.error("Firebase Save Order Error:", err);
            return null;
        }
    },

    // 2. جلب المنتجات المضافة من لوحة التحكم ودمجها في المتجر
    async loadCloudProducts() {
        try {
            const snapshot = await getDocs(collection(db, "products"));
            const cloudItems = [];
            snapshot.forEach(d => {
                cloudItems.push({ firebaseId: d.id, ...d.data() });
            });
            return cloudItems;
        } catch (err) {
            console.error("Firebase Load Products Error:", err);
            return [];
        }
    },

    // الاشتراك اللحظي في مجموعة المنتجات (يعيد دالة لإلغاء الاشتراك)
    subscribeToProducts(callback) {
        return onSnapshot(
            collection(db, "products"),
            (snapshot) => {
                const items = [];
                snapshot.forEach(d => items.push({ firebaseId: d.id, ...d.data() }));
                callback(items);
            },
            (err) => console.error("Firebase Products Snapshot Error:", err)
        );
    },

    // تسجيل دخول/خروج المسؤول عبر Firebase Authentication
    loginAdmin(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    },
    logoutAdmin() {
        return signOut(auth);
    },
    onAuthStateChanged(callback) {
        return firebaseOnAuthStateChanged(auth, callback);
    },
    get currentUser() {
        return auth.currentUser;
    },

    // 3. دوال لوحة التحكم (Admin)
    db,
    auth,
    collection,
    addDoc,
    getDocs,
    updateDoc,
    deleteDoc,
    doc,
    query,
    orderBy,
    serverTimestamp,
    onSnapshot
};

// script.js is a classic script that runs before this module, so it waits for this event.
window.dispatchEvent(new Event("alrayed-db-ready"));
