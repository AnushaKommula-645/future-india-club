import logo from "../assets/logo.png";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <img src={logo} alt="Club Logo" className="logo" />
      <h1>The Hindu Future India Club</h1>
      <h3>Shri Vishnu Engineering College for Women</h3>
      <p>Faculty Coordinator: Arun Sir</p>
    </div>
  );
}
