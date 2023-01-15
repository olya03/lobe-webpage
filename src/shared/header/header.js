import "./header.css";
import Logo from "../icons/logo";
export default function Header() {
  return (
    <header className="Header">
      <div className="logo">
        <Logo />
      </div>
      <ol>
        <li>
          <a href="#viev">Overviev</a>
        </li>
        <li>
          <a href="#viev">Examples</a>
        </li>
        <li>
          <a href="#viev">Tour</a>
        </li>
        <li>
          <a href="#viev">Blog</a>
        </li>
        <li>
          <a href="#viev">Help</a>
        </li>
      </ol>
      <button>Download</button>
    </header>
  );
}
