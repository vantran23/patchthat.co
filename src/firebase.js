import app from 'firebase/app';
import 'firebase/auth';

var config = {
    apiKey: "AIzaSyAjzQWwqBnIpnQXxIcpcU5KY05mrLGH5ls",
    authDomain: "patch-that.firebaseapp.com",
    databaseURL: "https://patch-that.firebaseio.com",
    projectId: "patch-that",
    storageBucket: "patch-that.appspot.com",
    messagingSenderId: "989133513256"
  };
  app.initializeApp(config);

  export default app;