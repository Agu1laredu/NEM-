import { AiFillPhone } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { BsFillPinFill } from "react-icons/bs";
import Footer2 from "./Components/index.jsx";

function Footer() {
  return (
    <div>
      <div
        className="Footer"
        style={{ display: "flex", height: "200px", backgroundColor: "#343740" }}
      >
        <div style={{ width: "200px", margin: "auto" }}>
          <AiFillPhone
            style={{ color: "#0096d5", position: "relative", left: "10px" }}
          />
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
          <MdEmail
            style={{ color: "#0096d5", position: "relative", left: "115px" }}
          />
          <b
            style={{
              position: "relative",
              top: "35px",
              left: "20px",
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
            top: "-2px",
          }}
        >
          <BsFillPinFill
            style={{ color: "#0096d5", position: "relative", left: "140px" }}
          />
          <b
            style={{
              position: "relative",
              top: "50px",
              left: "100px",
              color: "#ede1df",
            }}
          >
            Santa Fe
          </b>
        </div>
      </div>
      <Footer2 />
    </div>
  );
}

export default Footer;
