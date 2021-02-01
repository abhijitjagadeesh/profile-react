import logo from "./logo.svg";
import profileImage from "./img/profile.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <img src={profileImage} alt="profile-image" />
      <h1>Abhijit Jagadeesh</h1>
      <h2>Senior Software Engineer</h2>
      <h3>Southampton, UK</h3>
    </div>
  );
}

export default App;
