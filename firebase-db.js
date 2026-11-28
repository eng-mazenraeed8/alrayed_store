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
    onAuthStateChanged
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

window.AlRayedDB = {
    // 1. حفظ طلب جديد في قاعدة البيانات
    async saveOrderToCloud(orderData) {
        try {
            const docRef = await addDoc(collection(db, "orders"), {
                ...orderData,
                status: "جاري التجهيز 📦",
                createdAt: serverTimestamp(),
                createdAtClient: Date.now()
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
            snapshot.forEach((d) => {
                cloudItems.push({ firebaseId: d.id, ...d.data() });
            });
            return cloudItems;
        } catch (err) {
            console.error("Firebase Load Products Error:", err);
            return [];
        }
    },

    // 3. دوال تسجيل الدخول والخروج للأدمن
    auth,
    async loginAdmin(email, password) {
        return await signInWithEmailAndPassword(auth, email, password);
    },
    async logoutAdmin() {
        return await signOut(auth);
    },
    onAuthStateChanged,

    // 4. دوال لوحة التحكم (Admin)
    db,
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

window.dispatchEvent(new Event("alrayed-db-ready"));
