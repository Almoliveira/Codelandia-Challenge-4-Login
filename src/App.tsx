import "./App.css";
import SVG from "./assets/image/image.svg";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <div className="imageDivContainer">
        <img
          src={SVG}
          alt="LoginBanner"
          className="imageContainer"
          draggable="false"
        />
      </div>
      <div className="container">
        <div className="loginContainer">
          <Login />
        </div>
      </div>
    </div>
  );
}

export default App;
