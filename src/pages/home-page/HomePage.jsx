    import { Link } from "react-router-dom";
    import "./home-page.scss";
    
    const HomePage = () => {
      return (
        <div className="homepage">
          <main className="homepage__main">
            <img className="homepage__logo" alt="logo" src="/" />
            <h1 className="homepage__header">Meet, Buddy</h1>
            <p className="homepage__description">Description of Buddy</p>
            <div className="hompage__link-container">
              <Link to="/">
                <p className="homepage__link-no">Not Now</p>
              </Link>
              <Link to="/">
                <p className="homepage__link-yes">Connect</p>
              </Link>
            </div>
    
            <div className="hompage__privacy">
              <p className="homepage__privacy-content">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta
                adipisci voluptas minima aliquam totam ratione laboriosam, a ad
                neque aspernatur voluptatem ipsum nulla quas, labore non corporis
                distinctio, excepturi tenetur. 
              </p>
            </div>
          </main>
        </div>
      );
    };
    
    export default HomePage;
