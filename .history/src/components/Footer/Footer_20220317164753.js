import React from "react";
import styled from "styled-components";
import Image1 from "../../Images/Image1.png";
import footer1 from "../../Images/footer1.png";
const Footer = () => {
  const StyledFooter = styled.div`
    @import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap");
    font-family: "DM Sans", sans-serif;
    @import url("https://fonts.googleapis.com/css2?family=Prata&display=swap");
  `;
  const Footer = styled.div`
    position: relative;
    background-color: #222120;
    padding: 108px 57px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 32px;
  `;

  const Image1Div = styled.img`
    width: auto;
    height: auto;
  `;

  const Desc = styled.p`
    font-family: "Prata", serif;
    color: #f8f3ed;
  `;

  return (
    <StyledFooter>
      <Footer>
        <div>
          <Desc className="">Stay in touch with us</Desc>

          <ul>
            <li>
              <span>DM us on</span>
              <p>hello@healing.com</p>
            </li>
            <li>
              <span>Call us on</span>
              <p>+2(930) 859-464</p>
            </li>
          </ul>
        </div>
        <div>
          <Image1Div src={footer1} alt="" />
        </div>
      </Footer>
    </StyledFooter>
  );
};

export default Footer;
