import React from "react";
import RelativeBlogs from "./RelativeBlogs";

function Blogs() {
  return (
    <div>
      <div class="container">
        {" "}
        <div class="row">
          <div class="col-lg-8">
            <div class="card mb-4">
              <a href="#!">
                <img
                  class="card-img-top"
                  style={{ height: "30rem" }}
                  src="https://images.unsplash.com/photo-1590923179469-72c3d1959680?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDV8UzRNS0xBc0JCNzR8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  alt="..."
                />
              </a>
              <div class="card-body">
                <div class="small text-muted">January 1, 2021</div>
                <h2 class="card-title">Featured Post Title</h2>
                <p class="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a
                  laboriosam. Dicta expedita corporis animi vero voluptate
                  voluptatibus possimus, veniam magni quis!
                </p>
                <a class="btn btn-primary" href="#!">
                  Read more →
                </a>
              </div>
            </div>
            <RelativeBlogs />
          </div>
          <div class="col-lg-4">
            {/* Search widget */}
            <div class="card mb-4">
              <div class="card-header">Search</div>
              <div class="card-body">
                <div class="input-group">
                  <input
                    class="form-control"
                    type="text"
                    placeholder="Enter search term..."
                    aria-label="Enter search term..."
                    aria-describedby="button-search"
                  />
                  <button
                    class="btn btn-primary"
                    id="button-search"
                    type="button"
                  >
                    Go!
                  </button>
                </div>
              </div>
            </div>
            {/** <!-- Categories widget--> */}

            <div class="card mb-4">
              <div class="card-header">Categories</div>
              <div class="card-body">
                <div class="row">
                  <div class="col-sm-6">
                    <ul class="list-unstyled mb-0">
                      <li>
                        <a href="#!">Web Design</a>
                      </li>
                      <li>
                        <a href="#!">HTML</a>
                      </li>
                      <li>
                        <a href="#!">Freebies</a>
                      </li>
                    </ul>
                  </div>
                  <div class="col-sm-6">
                    <ul class="list-unstyled mb-0">
                      <li>
                        <a href="#!">JavaScript</a>
                      </li>
                      <li>
                        <a href="#!">CSS</a>
                      </li>
                      <li>
                        <a href="#!">Tutorials</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
