import React, { useState } from "react";
import "./App.css";
import { auth, googleProvider, fbProvider, githubProvider } from "./firebase";

const App = () => {
  const [user, setUser] = useState(null);

  const googleLogin = async () => {
    try {
      await auth.signInWithPopup(googleProvider);
      setUser(await auth.currentUser);
    } catch (error) {
      console.log(error);
    }
  };

  const fbLogin = async () => {
    try {
      await auth.signInWithPopup(fbProvider);
      setUser(await auth.currentUser);
    } catch (error) {
      console.log(error);
    }
  };

  const githubLogin = async () => {
    try {
      await auth.signInWithPopup(githubProvider);
      setUser(await auth.currentUser);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(user);
  return (
    <div>
      <section>
        <div>
          <div className="btn__container ">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/300px-Google_%22G%22_Logo.svg.png"
              alt=""
              className="btn__google"
            />
            <button onClick={googleLogin}>Google Login</button>
          </div>
          <div className="btn__container">
            <img
              src="https://outandaboutnow.com/wp-content/uploads/2021/01/f_logo_RGB-Hex-Blue_512.png"
              alt=""
            />
            <button onClick={fbLogin}>Facebook Login</button>
          </div>
          <div className="btn__container">
            <img
              src="https://image.flaticon.com/icons/png/512/25/25231.png"
              alt=""
              className="btn__github"
            />
            <button onClick={githubLogin}>Github Login</button>
          </div>
          <br />
          <div className="result">
            <h4>{user?.displayName}</h4>
            <h5>{user?.email}</h5>

            <img src={user?.photoURL} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
