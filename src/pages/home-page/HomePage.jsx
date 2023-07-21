import { Link } from "react-router-dom";
import "./home-page.scss";

const HomePage = () => {
  return (
    <main className="homepage">
      <div className="hompage__logo-container">
        <img className="homepage__logo" alt="logo" src="/" />
      </div>
      <div className="homepage__header-container">
        <h1 className="homepage__header-top">Your secure AI Health</h1>
        <h1 className="homepage__header-bottom">Buddy is here</h1>
      </div>
      <div className="homepage__bottom-container">
        <p className="homepage__description">
          Allow Health Buddy to help you better track your activity goals{" "}
        </p>
        <div className="hompage__link-container">
          <Link to="/" className="homepage__link">
            <p className="homepage__link-no">Not Now</p>
          </Link>
          <Link to="/" className="homepage__link">
            <p className="homepage__link-yes">Allow Access</p>
          </Link>
        </div>
      </div>
      <div className="hompage__privacy">
        <p className="homepage__privacy-content">
          Your use of Google Fit is governed by
          <p className="homepage__privacy-term-bottom"><Link to="/" className="homepage__privacy-terms">
            {" "}
            Google Fit Terms of Service.
          </Link></p>
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

export default HomePage;
