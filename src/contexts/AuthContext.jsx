import React, { createContext, useEffect, useReducer } from "react";
import { ACTIONS } from "../helpers/consts";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase";

export const authContext = createContext();

const init = {
  user: null,
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.GET_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
}

function AuthContext({ children }) {
  const [state, dispatch] = useReducer(reducer, init);

  async function register({ email, password }) {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error);
    }
  }

  async function login({ email, password }) {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error);
    }
  }

  async function logout() {
    try {
      signOut(auth);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      dispatch({
        type: ACTIONS.GET_USER,
        payload: user,
      });
    });
  }, []);

  const value = {
    user: state.user,
    register,
    login,
    logout,
  };
  return <authContext.Provider value={value}>{children}</authContext.Provider>;
}

export default AuthContext;
