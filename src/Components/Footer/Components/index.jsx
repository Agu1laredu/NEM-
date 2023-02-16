import { BsTwitter, BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

function Footer() {
  return (
    <div style={{ display: "flex", height: "50px" }}>
      <p style={{ position: "relative", top: "5px" }}>@NEM TECHNOLOGIES 2023</p>
      <BsTwitter
        style={{
          position: "relative",
          left: "520px",
          top: "10px",
          fontSize: "25",
          cursor: "pointer",
        }}
      />
      <BsFacebook
        style={{
          position: "relative",
          left: "585px",
          top: "10px",
          fontSize: "25",
          cursor: "pointer",
        }}
      />
      <AiFillInstagram
        style={{
          position: "relative",
          left: "650px",
          top: "10px",
          fontSize: "25",
          cursor: "pointer",
        }}
      />
    </div>
  );
}

export default Footer;
