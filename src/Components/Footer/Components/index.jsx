import { BsTwitter, BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

function Footer() {
  return (
    <div style={{ display: "flex", height: "50px" }}>
      <p style={{ position: "relative", top: "5px",left: "60px", }}>@NEM TECHNOLOGIES 2023</p>
      <BsTwitter
        style={{
          position: "relative",
          left: "950px",
          top: "10px",
          fontSize: "25",
          cursor: "pointer",
        }}
      />
      <BsFacebook
        style={{
          position: "relative",
          left: "1000px",
          top: "10px",
          fontSize: "25",
          cursor: "pointer",
        }}
      />
      <AiFillInstagram
        style={{
          position: "relative",
          left: "1050px",
          top: "10px",
          fontSize: "25",
          cursor: "pointer",
        }}
      />
    </div>
  );
}

export default Footer;
