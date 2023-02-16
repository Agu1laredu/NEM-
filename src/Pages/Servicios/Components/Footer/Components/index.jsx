import { BsTwitter, BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import "./footerRedes.css"

function Footer() {
  return (
    <div className="footerRedes">
      <p className="footerRedes__Copy">@NEM.Corporation</p>
      <div className="footerRedes__Icon">
        <BsTwitter
          style={{
            fontSize: "25",
            cursor: 'pointer',
          }}
        />
        <BsFacebook
          style={{
            fontSize: "25",
            cursor: 'pointer',
          }}
        />
        <AiFillInstagram
          style={{
            fontSize: "25",
            cursor: 'pointer',
          }}
        />
      </div>
    </div>
  );
}

export default Footer;
