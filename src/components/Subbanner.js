import React, { useState } from 'react';
import '../css/Subbanner.css';

function Subbanner() {
  const [bannerText, setBannerText] = useState("CSS Clinic Hub happening on Saturday, 21st January. Click her for more");

  function handleClick() {
    setBannerText("New banner text");
  }

  return (
    <div className="banner">
      <p className="banner__text">{bannerText}</p>
     </div>
  );
}
export default Subbanner;