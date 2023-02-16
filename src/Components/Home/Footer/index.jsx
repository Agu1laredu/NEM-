import { AiFillPhone } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { BsFillPinFill } from "react-icons/bs";
import Footer2 from "./Components/index.jsx";
import "./footer.css"

function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="footer__Phone">
          <AiFillPhone
            style={{ color: "#0096d5"}}
          />
          <b> 342-566-7376 </b>
        </div>

        <div className="footer__Email">
          <MdEmail
            style={{ color: "#0096d5"}}
          />
          <b> nemsoftware@hotmail.com </b>
        </div>

        <div className="footer__PinFill">
          <BsFillPinFill
            style={{ color: "#0096d5"}}
          />
          <b> Santa Fe </b>
        </div>
      </div>
      <Footer2 />
    </div>
  );
}

export default Footer;
