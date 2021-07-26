import React from "react";
import { auth, provider } from "../config/firebase";
import { actionTypes } from "../reducer";
import { useStateValue } from "../StateProvider";

function SignIn() {
  const [{}, dispatch] = useStateValue();
  const login = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <div className="row">
      <div className="col-5 mx-auto">
        <div className="card m-5">
          <div className="m-5">
            <h3>Welcome to Bloggy</h3>
            <button className="my-3 btn btn-danger btn-lg " onClick={login}>
              SIgn In with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
