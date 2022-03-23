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
  const Slogan = styled.h2`
    letter-spacing: -0.02em;
    font-size: 80px;
    line-height: 1;
    color: #faf5ef;
    max-width: 725px;
    font-weight: 400;
  `;
  const Image1Div = styled.img`
    width: auto;
    height: auto;
  `;

  const Desc = styled.p`
    font-family: "Prata", serif;
  `;

  return (
    <StyledFooter>
      <Footer>
        <div>
          <h4>Stay in touch with us</h4>

          <ul>
            <li>
              <span>DM us on</span>
              <p>hello@healing.com</p>
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
