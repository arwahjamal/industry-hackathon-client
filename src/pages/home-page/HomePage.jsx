import { Link } from "react-router-dom";
import "./home-page.scss";

import buddy from "../../assets/Icons/Buddy.png"; 

export default function HomePage ({setOpenModal1, setOpenModal3}) {
  return (
    <main className="homepage">
      <div className="hompage__logo-container">
        <img className="homepage__logo" alt="logo" src={buddy} />
      </div>
      <div className="homepage__header-container">
        {/* Should only have 1 h1 per page */}
        <h1 className="homepage__header-top">Meet Buddy,</h1>
        <h1 className="homepage__header-bottom">Your AI Health Companion</h1>
      </div>
      <div className="homepage__bottom-container">
        <p className="homepage__description">
          Allow Buddy to help you better track your activity goals{" "}
        </p>
        <div className="homepage__link-container">
          <button
            className="homepage__link-button"
            onClick={() => setOpenModal1(true)}
          >
            <p className="homepage__link-yes">Allow Access</p>
          </button>
          <button
            className="homepage__link-button homepage__link-button-no"
            onClick={() => setOpenModal3(true)}
          >
            <p className="homepage__link-no">Not Now</p>
          </button>
        </div>
      </div>
      <div className="hompage__privacy">
        <p className="homepage__privacy-content">
          Your use of Google Fit is governed by
          <p className="homepage__privacy-term-bottom">
            <Link to="/" className="homepage__privacy-terms">
              {" "}
              Google Fit Terms of Service.
            </Link>
          </p>
          Note: The{" "}
          <Link to="/" className="homepage__privacy-terms">
            Privacy Policy
          </Link>{" "}
          describes how data is handled in this service.
        </p>
      </div>
    </main>
  );
};


