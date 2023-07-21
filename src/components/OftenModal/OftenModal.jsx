import "./OftenModal.scss";
import React from "react";
import buddy from "../../assets/Icons/Buddy.png";

export default function OftenModal() {
  return (
    <div className="OftenModal" id="overlay">
      <div className="OftenModal__container">
        <h1 className="OftenModal__title">Interactive Settings</h1>
        <h3 className="OftenModal__subtitle">
          Your settings have now been saved to buddy!
        </h3>
        <h5 className="OftenModal__subtitle">
          How Often Would You Like Buddy to Interact with you?
        </h5>
        <img className="buddy2" src={buddy} alt="" />
        <form className="form">
          <div>
            <label className="OftenModal__info">
              Every Hour
              <input type="radio" name="frequency" value="hourly" />
            </label>
          </div>
          <div>
            <label className="OftenModal__info">
              Every 3 Hours
              <input type="radio" name="frequency" value="3hours" />
            </label>
          </div>
          <div>
            <label className="OftenModal__info">
              Every 6 Hours
              <input type="radio" name="frequency" value="6hours" />
            </label>
          </div>
          <div>
            <label className="OftenModal__info">
              Once a Day
              <input type="radio" name="frequency" value="daily" />
            </label>
          </div>
        </form>
        <div className="button__div">
          <Link to="/dashboard">
            <button className="OftenModal__button">
              Finish
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
