import React from "react";
import { Link } from "react-router-dom";
import { Translation } from "react-i18next";
import "./welcome.css";

const Welcome = () => {

  return (
    <Translation>
      {(t) => (
        <div className="section-body welcome">
          <h1 className="h2">{t("welcome_page_a")}</h1>
          <p>{t("welcome_page_b")}</p>
          <p>{t("welcome_page_c")}</p>
          <p>{t("welcome_page_d")}</p>
          <p>
            {t("welcome_page_e")}{" "}
            {/* <Link to="/data-extracts.html">{t("welcome_page_f")}</Link>{" "} */}
            {t("welcome_page_f")}{" "}
            {t("welcome_page_g")}{" "}
            <a href="https://github.com/colouring-cities/colouring-Athens">
              {t("welcome_page_h")}
            </a>{" "}
            {t("welcome_page_i")}
          </p>
          <Link
            to="/view/categories"
            className="btn btn-outline-dark btn-lg btn-block"
          >
            {t("welcome_page_j")}
          </Link>
          <div className="image-row">
            <img
              className="cl-logo"
              src="images/logo-cc.jpg"
              alt="Colouring Cities Research Programme"
            ></img>
            <img
              className="turing-logo"
              src="images/logo-turing.jpg"
              alt="Alan Turing Institute"
            ></img>
          </div>
          <div className="image-row">
            {/* <img src="images/supporter-logos.png" alt="Colouring London collaborating organisations: The Bartlett UCL, Ordnance Survey, Historic England, Greater London Authority" /> */}
            <img
              className="kcl-logo"
              src="images/kcl-logo.png"
              alt="King's College London"
            ></img>
            <img
              className="itb-logo"
              src="images/logo_itb_1024_bw.png"
              alt="Institut Teknologi Bandung logo"
            ></img>
          </div>
        </div>
      )}
    </Translation>
  );
};
export default Welcome;
