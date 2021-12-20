import React from "react";

import "./Footer.css";

function Footer() {
  return (
    <section className="footer">
      <div className="link">
        <a href="#">Cooking-daires</a>
        <p>
          MyRecipes.com is part of the Allrecipes Food Group. © Copyright 2021
          Cooking-daires Corporation. MyRecipes is a registered trademark of
          Cooking-daires Corporation All Rights Reserved. MyRecipes may receive
          compensation for some links to products and services on this website.
          Offers may be subject to change without notice.
        </p>
      </div>

      <div className="links">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms and Service</a>
        <a href="#">Add Choices</a>
        <a href="#">Web accesibility</a>
      </div>
      <hr className="footer-seperator" />
    </section>
  );
}
export default Footer;
