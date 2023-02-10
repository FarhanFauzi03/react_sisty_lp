import React from "react";
import "./footer.css";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
        <div className="footer-inner">
          <p>&copy; Sisty Busana - {year}</p>
          {/* <p><a href="/">Dibuat oleh Tim Hans</a></p> */}
        </div>
    </footer>
  );
};


export default Footer;