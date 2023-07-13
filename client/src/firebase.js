import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  initializeAppCheck,
  ReCaptchaV3Provider,
  getToken,
} from "firebase/app-check";

const firebaseConfig = {
  apiKey: "AIzaSyCtXpM_zsJr83AiH3PfEutR8oE97P-UQug",
  authDomain: "workshop-appcheck-9df0e.firebaseapp.com",
  projectId: "workshop-appcheck-9df0e",
  storageBucket: "workshop-appcheck-9df0e.appspot.com",
  messagingSenderId: "226666847186",
  appId: "1:226666847186:web:efeca8791ea1db1778c60b",
  measurementId: "G-XRVG8GK65L",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider("6LfDDxAnAAAAAK95RrozH6lc9RTIqSqlX1Wv0Wqf"),

  // Optional argument. If true, the SDK automatically refreshes App Check
  // tokens as needed.
  isTokenAutoRefreshEnabled: true,
});

export { appCheck, getToken };
