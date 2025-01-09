import React from "react";
const year = new Date();
function Footer() {
  return (
    <div className="foot">
      <p style={{ fontSize: 16, margin: 0 }}>
        &copy; Copyrights {year.getFullYear()}{" "}
      </p>
    </div>
  );
}

export default Footer;
