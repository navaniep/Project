import "./App.css";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { useEffect, useState } from "react";
import CgpaCalculator from "./components/CgpaCalculator.js";

function App() {
  const [auth, setAuth] = useState(
    false || window.localStorage.getItem("auth") === "true"
  );
  const [token, setToken] = useState("");

  useEffect(() => {
    firebase.auth().onAuthStateChanged((userCredentials) => {
      if (userCredentials) {
        setAuth(true);
        window.localStorage.setItem("auth", "true");
        userCredentials.getIdToken().then((token) => {
          setToken(token);
        });
      }
    });
  });

  const LoginWithGoogle = () => {
    firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((userCredentials) => {
        if (userCredentials) {
          setAuth(true);
          window.localStorage.setItem("auth", "true");
        }
      });
  };

  return (
    <div className="App">
      {auth ? (
        <CgpaCalculator token={token} />
      ) : (
        <button onClick={LoginWithGoogle}>Login with Google</button>
      )}
    </div>
  );
}

export default App;
