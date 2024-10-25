import "./Footer.css";

function Footer({ title1, title2, title3, title4 }) {
  return (
    <div className="footer-bar">
      <ul className={`footer-links`}>
        <li>
          <a href="#impressum">{title1}</a>
        </li>
        <li>
          <a href="#about">{title2}</a>
        </li>
        <li>
          <a href="#services">{title3}</a>
        </li>
        <li>
          <a href="#contact">{title4}</a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
