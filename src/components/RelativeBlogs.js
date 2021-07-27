import React from "react";

function RelativeBlogs({ postId, imageUrl, desc, title }) {
  return (
    <div>
      <div class="card mb-4">
        <a>
          <img
            class="card-img-top"
            src={imageUrl}
            alt="..."
            style={{ height: "250px", width: "100%" }}
          />
        </a>
        <div class="card-body">
          <div class="small text-muted"></div>
          <h2 class="card-title h4">{title}</h2>
          <p class="card-text">{desc}</p>
          <a class="btn btn-primary" href="#!">
            Read more →
          </a>
        </div>
      </div>
    </div>
  );
}

export default RelativeBlogs;
