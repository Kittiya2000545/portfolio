import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Navbar2 from "../components/Navbar2";

function Home() {
  return (
    <>
      <Navbar2 />
      <div className="ms-5 mt-5">
        <div className="">
          <div>
            <h1 className="ms-5">test</h1>
          </div>
          <div>
            <h1 className="ms-0">test</h1>
          </div>
        </div>
      </div>
     
      
      <Footer />
    </>
  );
}

export default Home;
