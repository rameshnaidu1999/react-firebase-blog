import React, { useEffect, useState } from "react";
import Blogs from "../components/Blogs";
import Header from "../components/Header";

function Home() {
  return (
    <div>
      <Header />
      {/* blog posts */}

      <Blogs />
    </div>
  );
}

export default Home;
