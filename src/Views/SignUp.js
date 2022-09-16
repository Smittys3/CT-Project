import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../index";
import Nav from "../Components/Nav";


import React from "react";
import "./css/SignUp.css"
// import { Image } from 'react-bootstrap';

export default function SignUp() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

//   const boardPicture = new URL("./images/board.jpg",import.meta.url)

  return (
    <div>
        <Nav />
        <div className="board-picture">
        {/* <img src="https://images.unsplash.com/photo-1579794661617-b65ceb096d2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1089&q=80" alt=""/> */}
        {/* <Image className="board" src={require("./images/board.jpg")} /> */}
            <div className="App">
                <div>
                    <h3> Register User </h3>
                    <input
                    placeholder="Email..."
                    onChange={(event) => {
                        setRegisterEmail(event.target.value);
                    }}
                    />
                    <input
                    placeholder="Password..."
                    onChange={(event) => {
                        setRegisterPassword(event.target.value);
                    }}
                    />

                    <button onClick={register}> Create User</button>
                </div>

                <div>
                    <h3> Login </h3>
                    <input
                    placeholder="Email..."
                    onChange={(event) => {
                        setLoginEmail(event.target.value);
                    }}
                    />
                    <input
                    placeholder="Password..."
                    onChange={(event) => {
                        setLoginPassword(event.target.value);
                    }}
                    />

                    <button onClick={login}> Login</button>
                </div>

                <h4> User Logged In: </h4>
                {user?.email}

                <button onClick={logout}> Sign Out </button>
            </div>
        </div>
    </div>
  );
}
