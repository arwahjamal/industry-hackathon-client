import "./NotNowModal.scss";
import buddy from "../../assets/Icons/Buddy.png";
import { Link } from "react-router-dom";

const NotNowModal = ({ setOpenModal3 }) => {
  return (
    <div className="NotNowModal" id="overlay">
      <div className="NotNowModal__container">
        <h1 className="NotNowModal__title">No Worries!</h1>
        <img className="NotNowModal__buddy" src={buddy} alt="Buddy" />
        <p className="NotNowModal__text">
          If you change your mind, you can change your settings at any time by
           clicking or tapping me!
        </p>
        <div className="NotNowModal__button-div">
          <Link to="/dashboard">
            <button className="NotNowModal__button">Continue</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotNowModal;
