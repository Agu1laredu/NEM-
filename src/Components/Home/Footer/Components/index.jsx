import { BsTwitter, BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

function Footer() {
  return (
    <div style={{ display: "flex", height: "30px" }}>
      <p style={{ position: "relative", top: "20px" }}>@universal estudio</p>
      <BsTwitter
        style={{
          position: "relative",
          left: "400px",
          top: "20px",
          fontSize: "25",
          cursor: 'pointer',
        }}
      />
      <BsFacebook
        style={{
          position: "relative",
          left: "450px",
          top: "20px",
          fontSize: "25",
          cursor: 'pointer',
        }}
      />
      <AiFillInstagram
        style={{
          position: "relative",
          left: "500px",
          top: "20px",
          fontSize: "25",
          cursor: 'pointer',
        }}
      />
    </div>
  );
}

export default Footer;
