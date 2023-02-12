import { AiFillPhone } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { BsFillPinFill } from "react-icons/bs";

function Footer() {
  return (
    <div
      className="Footer"
      style={{ display: "flex", height: "300px", backgroundColor: "#343740" }}
    >
      <div style={{ width: "200px", margin: "auto" }}>
        <AiFillPhone style={{ color: "#0096d5" }} />
        <b
          style={{
            position: "relative",
            top: "50px",
            left: "-60px",
            color: "#ede1df",
          }}
        >
          342-566-7376
        </b>
      </div>
      <div style={{ width: "200px", margin: "auto" }}>
        <MdEmail style={{ color: "#0096d5" }} />
        <b
          style={{
            position: "relative",
            top: "35px",
            left: "-20px",
            color: "#ede1df",
          }}
        >
          nemsoftware@hotmail.com
        </b>
      </div>
      <div
        style={{
          width: "200px",
          margin: "auto",
          position: "relative",
          top: "20px",
        }}
      >
        <BsFillPinFill style={{ color: "#0096d5" }} />
        <b
          style={{
            position: "relative",
            top: "35px",
            left: "-35px",
            color: "#ede1df",
          }}
        >
          Santa Fe
        </b>
        <br />
        <b
          style={{
            position: "relative",
            top: "35px",
            left: "-35px",
            color: "#ede1df",
          }}
        >
          Av. Casa de mami
        </b>
      </div>
    </div>
  );
}

export default Footer;
