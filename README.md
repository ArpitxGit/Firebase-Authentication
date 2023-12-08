# Google-Firebase-Authentication

## Firebase:-A Saas Cloud Platfrom

Google Firebase is a Google-backed application development software that enables developers to develop iOS, Android and Web apps. Firebase provides tools for tracking analytics, reporting and fixing app crashes, creating marketing and product experiment.

## Firebase Authentication:-

Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.

### Specs:-

Option screen to choose Sign In or Sign Up,Ability to Sign In and Sign Up using Google Firebase Authentication (any 1 login method supported by Firebase), we used email-id in this along with extra datas(name, age, birth place) with the help oh Cloud-Firestore-Database by generating an UserUniqueID.

# Firebase Guide:

npm install firebase

Then, initialise Firebase and begin using the SDKs for the products that you'd like to use.

```
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyDJyI0gOOEQpbCeD6CL6zhxc5d4u_kD-EI",
authDomain: "near8-407316.firebaseapp.com",
projectId: "near8-407316",
storageBucket: "near8-407316.appspot.com",
messagingSenderId: "1026037560046",
appId: "1:1026037560046:web:8c8db415ef2a9647b579ff",
measurementId: "G-85M9KCBGGD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
```

Note: This option uses the modular JavaScript SDK, which provides a reduced SDK size.

Learn more about Firebase for web: Get started, Web SDK API Reference, Samples

npm install -g firebase-tools

#### You can deploy now or later. To deploy now, open a terminal window, then navigate to or create a root directory for your web app.

Sign in to Google

firebase login

firebase init

firebase deploy

After deploying, view your app at near8-407316.web.app
