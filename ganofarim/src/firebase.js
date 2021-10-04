import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAEdFx77sdb94qPJlQLY3gcZEdnpfpmACM",
  authDomain: "ganofarim-6d394.firebaseapp.com",
  projectId: "ganofarim-6d394",
  storageBucket: "ganofarim-6d394.appspot.com",
  messagingSenderId: "85720252491",
  appId: "1:85720252491:web:fb89909553dff0bb500dce",
  measurementId: "G-VCDTNMYLP4",
};

let instance;

export default function getFirebase() {
  if (typeof window !== "undefined") {
    if (instance) return instance;
    instance = firebase.initializeApp(firebaseConfig);
    return instance;
  }

  return null;
}
