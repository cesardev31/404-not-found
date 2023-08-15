import "./App.css";
import Scarecrow from "./assets/Scarecrow.png";
export function App() {
  return (
    <article>
      <div>
        <div className="NotFound">
          <span className="">404 NOT FOUND</span>
        </div>
        <div className="container">
          <div className="imgContainer">
            <img className="img" src={Scarecrow} alt="" />
          </div>
          <div className="text-container">
            <h1 className="title-text">I have bad news for you</h1>
            <p className="parrafo-text">
              The page you are looking for might be removed or is temporarily
              unavailable
            </p>
            <a href="#" className="button">
              Back to homepage
            </a>
          </div>
        </div>
        <div className="ppg-container">
          <p className="ppg-text">
            created by <span className="ppg-username">Cesar Andres Pereira Bernal</span> -
            devChallenges.io
          </p>
        </div>
      </div>
    </article>
  );
}
