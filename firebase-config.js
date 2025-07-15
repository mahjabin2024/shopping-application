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