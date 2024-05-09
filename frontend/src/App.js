import './App.css';
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';


function App() {
  const LoginWithGoogle = () => {
    firebase.auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((userCredentials) => {
        console.log(userCredentials)
      })
  };

  return (
    <div className="App"> 
        <button onClick={LoginWithGoogle}>Login with Google</button>
    </div>
  );
}

export default App;
