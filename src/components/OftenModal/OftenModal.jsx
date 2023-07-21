import "./OftenModal.scss";
import React from "react";
import buddy from '../../assets/Icons/Buddy.png';

export default function OftenModal({ setOpenModal2 }) {
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
        <img  className='buddy2' src={buddy} alt="" />
        <form className="form">
          <div>
            <label className="OftenModal__info">Every Hour</label>
            <input type="radio" />
          </div>
          <div>
            <label className="OftenModal__info">Every 3 Hours</label>
            <input type="radio" />
          </div>
          <div>
            <label className="OftenModal__info">Every 6 Hours</label>
            <input type="radio" />
          </div>
          <div>
            <label className="OftenModal__info">Once a Day</label>
            <input type="radio" />
          </div>
        </form>
        <div className="button__div">
          <button
            className="OftenModal__button"
            onClick={() => setOpenModal2(false)}
          >
            Finish
          </button>
        </div>
      </div>
    </div>
  );
}
