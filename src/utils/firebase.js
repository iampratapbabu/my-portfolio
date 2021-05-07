import firebase from 'firebase/app';
import 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCpE08Ytzk3L9IwUIvRFW3NjfDaMDIoLnw",
  authDomain: "contactbookxx.firebaseapp.com",
  projectId: "contactbookxx",
  storageBucket: "contactbookxx.appspot.com",
  messagingSenderId: "694579187461",
  appId: "1:694579187461:web:bd87e1552647132ceaf16c"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
