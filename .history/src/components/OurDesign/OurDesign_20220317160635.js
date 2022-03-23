import React from "react";
import styled from "styled-components";
import Image1 from "../../Images/Image1.png";
import Image2 from "../../Images/Image2.png";
import Image3 from "../../Images/Image3.png";
import Image4 from "../../Images/Image4.png";
import OurDesignLine from "../../Images/OurDesign-line.png";
import OurDesignLine2 from "../../Images/OurDesign-line2.png";
import bottomOurDesignLine from "../../Images/bottom-OurDesign-line.png";

const OurDesign = () => {
  const StyledOurDesign = styled.div`
    @import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap");
    font-family: "DM Sans", sans-serif;
    @import url("https://fonts.googleapis.com/css2?family=Prata&display=swap");
  `;
  const OurDesign = styled.div`
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
    font-family: "Prata", serif;
    color: #faf5ef;
    max-width: 725px;
    font-weight: 400;
  `;
  const Image1Div = styled.img`
    width: auto;
    height: auto;
  `;
  const Image2Div = styled.img`
    width: auto;
    height: auto;
    position: absolute;
    bottom: 0;
    transform: translateY(50%);
    left: 57px;
  `;

  const StyledContent = styled.div`
    background-color: #f8f3ed;
    padding: 258px 57px 150px;
  `;

  const TitleContent = styled.h2`
    font-family: "Prata", serif;
    max-width: 388px;
    font-size: 70px;
    line-height: 76px;
  `;

  const DescriptionContent = styled.p`
    max-width: 638px;
    font-size: 24px;
    line-height: 34px;
    opacity: 0.7;
    font-family: "DM Sans", sans-serif;
  `;

  const TitleContent2 = styled.h2`
    font-family: "Prata", serif;
    max-width: 513px;
    font-size: 52px;
    line-height: 61px;
  `;
  return (
    <StyledOurDesign>
      <OurDesign>
        <div>
          <Slogan>
            We make <span className="opacity-0"></span>
            <div className="ml-[8.35rem]">every room</div>
            <div className="ml-[8.35rem]">a unique shape</div>
          </Slogan>

          <div className="flex flex-col  mr-[70px] mt-[68px]">
            <img
              src={OurDesignLine}
              alt=""
              className="max-w-[407px] self-end	"
            />
            <p className="max-w-[407px] self-end text-white leading-7 text-xl opacity-60 mt-12">
              Lorem ipsum onsectetur adipiscing elit. Blandit mauris etiam
              faucibus laoreet tellus nam. Gravida solor aenean orci, facilisis
              senectus.
            </p>
          </div>
        </div>
        <div>
          <Image1Div src={Image1} alt="" />
        </div>
        <Image2Div src={Image2} alt="" />
      </OurDesign>
    </StyledOurDesign>
  );
};

export default OurDesign;
