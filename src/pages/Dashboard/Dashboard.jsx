import "./Dashboard.scss";

const Dashboard = () => {
  return (
    <main className="dashboard">
      {/* Information/details button & display pic */}
      <div className="dashboard__settings"></div>
      <header className="dashboard__header">
        {/* Heart pts and steps monitoring */}
        <img className="dashboard__header-monitor"></img>
        {/* Heart pts and steps (will need 2 images and they don't need to be BG) */}
        <div className="dashboard__header-container">
          <img
            className="dashboard__header-container-img"
            src=""
            alt="Heart Pts Icon"
          ></img>
          <p className="dashboard__header-container-text">Heart Pts</p>
          <img
            className="dashboard__header-container-img"
            src=""
            alt="Steps Icon"
          ></img>
          <p className="dashboard__header-container-text">Steps</p>
        </div>
      </header>
      <body className="dashboard__todo">
        <article className="dashboard__todo-card">
          <div className="dashboard__todo-container">
            <h2 className="dashboard__todo-title">
              Fit isn't connected to Apple Health
            </h2>
            <img className="dashboard__todo-close" src="" alt="x"></img>
          </div>
          <div>
            <div className="dashboard__todo-settings">
              <img
                className="dashboard__todo-info"
                src=""
                alt="Details Icon"
              ></img>
              <p className="dashboard__todo-text-hyperlink">
                Review your settings
              </p>
            </div>
            <p className="dashboard__todo-text">
              Turn on access to Health to add your workouts, steps, and distance
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
              src=""
              alt="Right Arrow"
            ></img>
          </div>
          <p className="dashboard__todo-text">Last 7 days</p>
          <div className="dashboard__todo-goals">
            <div className="dashboard__todo-goals-days">
              <p className="dashboard__todo-goals-days-text">0/7</p>
              {/* In a real product, this would be created using .map */}
              <div className="dashboard__todo-goals-dates">
                <img src="" alt="x"></img>
                <img src="" alt="x"></img>
                <img src="" alt="x"></img>
                <img src="" alt="x"></img>
                <img src="" alt="x"></img>
                <img src="" alt="x"></img>
                <img src="" alt="x"></img>
              </div>
            </div>
            <div className="dashboard__todo-goals-days">
              <p className="dashboard__todo-text-hyperlink">Achieved</p>
              {/* In a real product, this would be created using .map */}
              <div className="dashboard__todo-goals-dates">
                <span className="dashboard__todo-text dashboard__todo-text--goals">
                  F
                </span>
                <span className="dashboard__todo-text dashboard__todo-text--goals">
                  S
                </span>
                <span className="dashboard__todo-text dashboard__todo-text--goals">
                  S
                </span>
                <span className="dashboard__todo-text dashboard__todo-text--goals">
                  M
                </span>
                <span className="dashboard__todo-text dashboard__todo-text--goals">
                  T
                </span>
                <span className="dashboard__todo-text dashboard__todo-text--goals">
                  W
                </span>
                <span className="dashboard__todo-text dashboard__todo-text--goals">
                  T
                </span>
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
