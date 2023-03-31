import { BsTwitter, BsLinkedin } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import styled from "styled-components";

function Footer2() {
  const Footer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 8vh;
    align-items: center;
    & p {
      width: 33vw;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    @media (max-width: 1000px) {
      & p {
        width: 50%;
      }
    }
  `;
  const FontIcon = styled.div`
    font-size: x-large;
    display: flex;
    justify-content: space-around;
    width: 33vw;
  `;
  return (
    <Footer>
      <p>@NEM TECHNOLOGIES 2023</p>

      <FontIcon>
        <BsTwitter style={{ cursor: "pointer" }} />
        <BsLinkedin style={{ cursor: "pointer" }} />
        <AiFillInstagram style={{ cursor: "pointer" }} />
      </FontIcon>
    </Footer>
  );
}

export default Footer2;
