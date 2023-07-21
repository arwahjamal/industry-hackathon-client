import "./Dashboard.scss";
import heart from "../../assets/Icons/Heart_Icon.png";
import shoe from "../../assets/Icons/Shoe_Icon.png";
import monitor from "../../assets/Icons/Dashboard circles.png";
import close from "../../assets/Icons/X_icon.png";
import info from "../../assets/Icons/info_icon.png";
import arrow from "../../assets/Icons/Arrow_Icon.png";
import logo from "../../assets/Icons/Google__G__Logo.svg.png";
import data from "../../assets/data/user-data.json";

const Dashboard = () => {
  return (
    <main className="dashboard">
      <div className="dashboard__settings">
        <img
          className="dashboard__settings-info"
          src={info}
          alt="Info Icon"
        ></img>
        <img
          className="dashboard__settings-avatar"
          src={logo}
          alt="Google Logo"
        ></img>
      </div>
      <header className="dashboard__header">
        <img
          className="dashboard__header-monitor"
          src={monitor}
          alt="Dashboard Monitor"
        ></img>
        <div className="dashboard__header-container">
          <img
            className="dashboard__header-container-img"
            src={heart}
            alt="Heart Icon"
          ></img>
          <p className="dashboard__header-container-text">Heart Pts</p>
          <img
            className="dashboard__header-container-img"
            src={shoe}
            alt="Shoe Icon"
          ></img>
          <p className="dashboard__header-container-text">Steps</p>
        </div>
        <div className="dashboard__header-container dashboard__header-container-stats">
          <div className="dashboard__header-container-totals">
            <p className="dashboard__header-container-totals-number">{data.users[0].calories}</p>
            <p className="dashboard__header-container-totals-text">cal</p>
          </div>
          <div className="dashboard__header-container-totals">
            <p className="dashboard__header-container-totals-number">{data.users[0].distance}</p>
            <p className="dashboard__header-container-totals-text">mi</p>
          </div>
          <div className="dashboard__header-container-totals-move">
            <p className="dashboard__header-container-totals-number dashboard__header-container-totals-number-move">
              {data.users[0].activity_time}
            </p>
            <p className="dashboard__header-container-totals-text dashboard__header-container-totals-text-move">
              Move Min
            </p>
          </div>
        </div>
      </header>
      <body className="dashboard__todo">
        <article className="dashboard__todo-card">
          <div className="dashboard__todo-container">
            <h2 className="dashboard__todo-title">
              Buddy isn't tracking any data
            </h2>
            <img
              className="dashboard__todo-close"
              src={close}
              alt="Close Icon"
            ></img>
          </div>
          <div>
            <div className="dashboard__todo-settings">
              <img
                className="dashboard__todo-info"
                src={info}
                alt="Details Icon"
              ></img>
              <p className="dashboard__todo-text-hyperlink">
                Review your settings
              </p>
            </div>
            <p className="dashboard__todo-text">
              Turn on access to Buddy's tracking to add your workouts, steps, and distance
              automatically
            </p>
            <p className="dashboard__todo-text-hyperlink dashboard__todo-text-hyperlink--bold">
              Turn on
            </p>
          </div>
        </article>
        <article className="dashboard__todo-card">
          <div className="dashboard__todo-container">
            <h2 className="dashboard__todo-title">Your daily goals</h2>
            <img
              className="dashboard__todo-chevron"
              src={arrow}
              alt="Right Arrow"
            ></img>
          </div>
          <p className="dashboard__todo-text">Last 7 days</p>
          <div className="dashboard__todo-goals">
            {/* In a real product, this would be created using .map */}
            <div className="dashboard__todo-goals-days">
              <div className="dashboard__todo-goals-days-container">
                <p className="dashboard__todo-goals-days-text">0/7</p>
                <p className="dashboard__todo-text-hyperlink">Achieved</p>
              </div>
              {/* In a real product, this would be created using .map */}
              <div className="dashboard__todo-goals-days-container--flex">
                <div className="dashboard__todo-goals-days-container-date">
                  <img
                    className="dashboard__todo-goals-monitor"
                    src={monitor}
                    alt="x"
                  ></img>
                  <p className="dashboard__todo-text dashboard__todo-text-goals">
                    F
                  </p>
                </div>
                <div className="dashboard__todo-goals-days-container-date">
                  <img
                    className="dashboard__todo-goals-monitor"
                    src={monitor}
                    alt="x"
                  ></img>
                  <p className="dashboard__todo-text dashboard__todo-text-goals">
                    S
                  </p>
                </div>
                <div className="dashboard__todo-goals-days-container-date">
                  <img
                    className="dashboard__todo-goals-monitor"
                    src={monitor}
                    alt="x"
                  ></img>
                  <p className="dashboard__todo-text dashboard__todo-text-goals">
                    S
                  </p>
                </div>
                <div className="dashboard__todo-goals-days-container-date">
                  <img
                    className="dashboard__todo-goals-monitor"
                    src={monitor}
                    alt="x"
                  ></img>
                  <p className="dashboard__todo-text dashboard__todo-text-goals">
                    M
                  </p>
                </div>
                <div className="dashboard__todo-goals-days-container-date">
                  <img
                    className="dashboard__todo-goals-monitor"
                    src={monitor}
                    alt="x"
                  ></img>
                  <p className="dashboard__todo-text dashboard__todo-text-goals">
                    T
                  </p>
                </div>
                <div className="dashboard__todo-goals-days-container-date">
                  <img
                    className="dashboard__todo-goals-monitor"
                    src={monitor}
                    alt="x"
                  ></img>
                  <p className="dashboard__todo-text dashboard__todo-text-goals">
                    W
                  </p>
                </div>
                <div className="dashboard__todo-goals-days-container-date">
                  <img
                    className="dashboard__todo-goals-monitor"
                    src={monitor}
                    alt="x"
                  ></img>
                  <p className="dashboard__todo-text dashboard__todo-text-goals">
                    T
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>
        <article className="dashboard__todo-card">
          <div className="dashboard__todo-target">
            <h2 className="dashboard__todo-title">Your weekly target</h2>
            <p className="dashboard__todo-target-date">Jul 16-22</p>
          </div>
        </article>
      </body>
    </main>
  );
};

export default Dashboard;
