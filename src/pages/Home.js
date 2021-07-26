import React from "react";
import Blogs from "../components/Blogs";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <Blogs />

      <Footer />
    </div>
  );
}

export default Home;
