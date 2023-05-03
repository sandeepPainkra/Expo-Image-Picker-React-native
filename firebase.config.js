import { getApp, getApps, initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBrXU0xUI6GhmAd-jd3CsIvSPyWtqATXi0",
  authDomain: "major-project-2023-8b6a8.firebaseapp.com",
  projectId: "major-project-2023-8b6a8",
  storageBucket: "major-project-2023-8b6a8.appspot.com",
  messagingSenderId: "747714598869",
  appId: "1:747714598869:web:0faf1427cb36abb9958f5c",
  measurementId: "G-C5NXR9QMWZ",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const storage = getStorage(app);

export { app, storage };
