

import {getAuth,signOut,GoogleAuthProvider,signInWithPopup,} from "firebase/auth";
import Login from "./Screens/Login";
import app from "./Firebase";
import { useState } from "react";
// import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import Home from "./Screens/Home";
import Form from "./Components/Form";

function App() {
  const [user, setUser] = useState(false);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  // const db = getFirestore(app);

  // async function checklogin() {
  //   const docRef = doc(db, "users", user?.uid);
  //   const docSnap = await getDoc(docRef);

  //   if (!docSnap.exists()) {
  //     await setDoc(doc(db, "users", user?.uid), user);
  //   }
  // }
  async function signUp() {
    await signInWithPopup(auth, provider)
      .then((result) => {
        
        setUser({});
        // console.log(user)
        // console.log(setUser())
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async function Signout() {
    await signOut(auth)
      .then(() => {
        setUser(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // useEffect(() => {
  //   if (!user) {
  //     return;
  //   }
  //   checklogin();
  // }, [user]);

  return (
    <div className="App">
      {/* {user ? <Home logout={Signout} /> : <Login login={signUp} />} */}
      <Form />
    </div>
  );
}

export default App;