const firebaseConfig = {
    apiKey: "AIzaSyD9HYugj4J__u_nILLwHXj91WPxsZipsVo",
    authDomain: "test-app-fc997.firebaseapp.com",
    databaseURL: "https://test-app-fc997-default-rtdb.firebaseio.com",
    projectId: "test-app-fc997",
    storageBucket: "test-app-fc997.firebasestorage.app",
    messagingSenderId: "913295044562",
    appId: "1:913295044562:web:7b46d7223a6e109d79220b",
    measurementId: "G-3GX4JBEQ2Z"
};
firebaseConfig.initializeApp(firebaseConfig);
const auth = firebaseConfig.auth();
const db = firebaseConfig.firestore();
const products = [
    { id: 1, name: "Product A", price: 10 },
    { id: 2, name: "Product B", price: 20 },
    { id: 3, name: "Product C", price: 30 }
];

let cart = [];

window.onload = function () {
    const productContainer = document.getElementById("products");
    products.forEach(product => {
        const btn = document.createElement("button");
        btn.innerText = `Àdd ${product.name} - $${product.price}`;
        btn.onclick = () => addToCart(product);
        productContainer.appendChild(btn);
    });
};

function addToCart(product) {
    cart.push(product);
    const cartList = document.getElementById("cartList");
    const item = document.createElement("li");
    item.innerText = `${product.name} - $${product.price}`;
    cartList.appendChild(item);
}

function purchase() {
    const user = firebase.auth().currentUser;
    if (!user) {
        alert("You must be Logged in!");
        return;
    }

    const order = {
        uid: user.uid,
        email: user.email,
        items: cart,
        timestamp: new Date()
    };

    db.collection("orders").add(order)
        .then(() => {
            alert("Purchase successful!");
            cart = [];
            document.getElementById("cartList").innerHTML = "";
        })
        .catch(error => alert("Error saving order: " + error.message))
}