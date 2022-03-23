import React from "react";
import styled from "styled-components";
import Image1 from "../../Images/Image1.png";

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
            <img src="" alt="" className="max-w-[407px] self-end	" />
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
      </OurDesign>
    </StyledOurDesign>
  );
};

export default OurDesign;
