import React from "react";

import Sukses from "../assets/images/success.svg";
import Footer from "../components/Footer";

export default function Success() {
  return (
    <>
      <div class="page-content page-success">
        <div class="section-success" data-aos="zoom-in">
          <div class="container">
            <div class="row align-items-center row-login justify-content-center">
              <div class="col-lg-6 text-center">
                <img src={Sukses} alt="" class="mb-4" />
                <h2>PQR12EX</h2>
                <p>Token Pengambillan</p>
                <div>
                  <a class="btn btn-success w-50 mt-4" href="/dashboard">
                    My Dashboard
                  </a>
                </div>
                <div>
                  <a
                    class="btn btn-signup w-50 mt-2"
                    href="http://wa.me/+6287826468665"
                  >
                    Chat Toko
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
