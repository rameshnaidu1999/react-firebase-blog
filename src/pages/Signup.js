import React, { useState } from "react";
import { auth } from "../config/firebase";

var actionCodeSettings = {
  // URL you want to redirect back to. The domain (www.example.com) for this
  // URL must be in the authorized domains list in the Firebase Console.
  url: "react-bootstrap-blog-129bf.firebaseapp.com",
  // This must be true.
  handleCodeInApp: true,
  iOS: {
    bundleId: "com.example.ios",
  },
  android: {
    packageName: "com.example.android",
    installApp: true,
    minimumVersion: "12",
  },
  dynamicLinkDomain: "react-bootstrap-blog-129bf.firebaseapp.com.page.signup",
};

function Signup() {
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // localStorage.setItem("react-firebase-blog", email);
    auth
      .sendSignInLinkToEmail(email, actionCodeSettings)
      .then(() => {
        // The link was successfully sent. Inform the user.
        // Save the email locally so you don't need to ask the user for it again
        // if they open the link on the same device.
        window.localStorage.setItem("emailForSignIn", email);
        alert("link sent you email", email);
        // ...
      })
      .catch((error) => {
        alert(error.message);
        //var errorCode = error.code;
        // var errorMessage = error.message;
        // ...
      });
  };
  return (
    <div className="row">
      <div className="col-4 mx-auto my-4">
        <div class="card mb-4">
          <div class="card-header">Sign Up</div>
          <div class="card-body">
            <div class="input-group">
              <input
                class="form-control"
                type="text"
                name="email"
                required
                placeholder="Enter yor email..."
                aria-describedby="button-search"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                class="btn btn-primary"
                id="button-search"
                type="button"
                onClick={handleSubmit}
              >
                Create Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
