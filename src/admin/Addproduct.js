import React, { useState } from "react";
import { storage, db } from "../config/firebase";
import firebase from "firebase";
import { useHistory } from "react-router-dom";

function Addblog() {
  const [desc, setDesc] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);
  const history = useHistory();
  function handleChange(e) {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  }

  const handleUpload = (e) => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // progress bar function
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        console.log(error);
        alert(error.message);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            db.collection("blogs").add({
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              desc: desc,
              imageUrl: url,
              imagename: image.name,
            });
          })
          .then(() => {
            console.log("posted suucess fully");
            history.push("/");
          });
      }
    );
  };
  return (
    <div className="row">
      <div className="col-lg-6 col-md-12 mx-auto">
        <h3 className="my-2 text-center">Create Blog </h3>
        <div className="card">
          <div className="m-3">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Title
              </label>
              <input
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">
                Description
              </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                name="desc"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
              ></textarea>
            </div>
            <div class="mb-3">
              <label for="formFile" class="form-label">
                Upload Image
              </label>
              <input class="form-control" type="file" onChange={handleChange} />
            </div>
            <button
              type="button"
              className="btn btn-secondary btn-full"
              onClick={handleUpload}
            >
              Publish Blog
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Addblog;
