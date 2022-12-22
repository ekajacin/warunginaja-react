import React from "react";

import NavbarComponent from "../components/NavbarComponent";
import Footer from "../components/Footer";
import DetailPage from "../components/DetailPage";

export default function Detail() {
  return (
    <>
      <NavbarComponent />
      <div className="page-content page-details">
            <DetailPage/>
      </div>
      <Footer />
    </>
  );
}
