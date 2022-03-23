import React from "react";
import styled from "styled-components";
import Image1 from "../../Images/Image1.png";
import Footer1 from "../../Images/our-design1.png";
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
        <div className="flex flex-col items-start">
          <Slogan>Our designers</Slogan>

          <div className="max-w-[616px]">
            <p className=" text-white leading-8 text-2xl opacity-60 mt-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit
              mauris etiam faucibus laoreet vestibulum
            </p>
            <p className="text-white leading-8 text-2xl opacity-60 mt-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit
              mauris etiam faucibus laoreet vestibulum nam. Gravida aenean orci,
              facilisis senectus.
            </p>
            <Desc className="text-[#F8F3ED] leading-8 text-2xl mt-6 underline cursor-pointer">
              See All Designers
            </Desc>
          </div>
        </div>
        <div>
          <Image1Div src={Footer1} alt="" />
        </div>
      </Footer>
    </StyledFooter>
  );
};

export default Footer;
