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
    padding: 108px 57px 105px;
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
  const DescV2 = styled.li`
    font-family: "DM Sans", serif;
    color: #f8f3ed;
    font-size: 30px;
    line-height: 34px;
  `;

  return (
    <StyledFooter>
      <Footer>
        <div className="ml-[149px] flex flex-col items-start gap-14">
          <Desc className="">Stay in touch with us</Desc>

          <ul>
            <DescV2>
              <span className="block mb-20px">DM us on:</span>
              <p className="opacity-60">hello@healing.com</p>
            </DescV2>
            <DescV2>
              <span className="block mb-20px">Call us on:</span>
              <p className="opacity-60">+2(930) 859-464</p>
            </DescV2>
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
