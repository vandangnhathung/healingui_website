import React from "react";
import styled from "styled-components";
import Image1 from "../../Images/Image1.png";
import Image2 from "../../Images/Image2.png";
import Image3 from "../../Images/Image3.png";
import Image4 from "../../Images/Image4.png";
import containerLine from "../../Images/container-line.png";
import containerLineR from "../../Images/container-line-responsive.png";
import containerLine2 from "../../Images/container-line2.png";
import bottomContainerLine from "../../Images/bottom-container-line.png";
import { media } from "../Responsive";

const Container = () => {
  const StyledContainer = styled.div`
    @import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap");
    font-family: "DM Sans", sans-serif;
    @import url("https://fonts.googleapis.com/css2?family=Prata&display=swap");
  `;
  const Container = styled.div`
    position: relative;
    background-color: #222120;
    padding: 108px 57px 0;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;
    gap: 32px;
    ${media.screen} {
      display: flex;
      flex-direction: column;
    }
    ${media.mobile} {
      padding: 108px 20px 0 18px;
    }
  `;
  const Slogan = styled.h2`
    letter-spacing: -0.02em;
    font-size: 80px;
    line-height: 1;
    font-family: "Prata", serif;
    color: #faf5ef;
    font-weight: 400;
    ${media.mobile} {
      margin-top: 80px;
      font-size: 46px;
      line-height: 56px;
      padding-left: 18px;
    }
  `;
  const Image1Div = styled.img`
    max-width: 508px;
    ${media.mobile} {
      max-width: 330px;
      width: 100%;
      margin-right: 40px;
    }
  `;
  const Image2Div = styled.img`
    width: auto;
    height: auto;
    position: absolute;
    bottom: 0;
    transform: translateY(50%);
    left: 57px;
    ${media.mobile} {
      display: none;
    }
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
  const ImageMobileDiv = styled.div`
    ${media.mobile} {
      position: relative;
      padding-right: 50px;
    }
  `;
  const Image2DivMoblie = styled.img`
    display: none;
    ${media.mobile} {
      display: block;
      position: absolute;
      left: 100%;
      top: 70%;
      transform: translate(-50%, -50%);
    }
  `;

  const TextDefault = styled.div`
    ${media.mobile} {
    }
  `;
  return (
    <StyledContainer>
      <Container>
        <ImageMobileDiv>
          <Image1Div src={Image1} alt="" />
          <Image2DivMoblie>
            <img src={Image2} />
          </Image2DivMoblie>
        </ImageMobileDiv>
        <div>
          <Slogan>
            We make <TextDefault className="opacity-0"></TextDefault>
            <TextDefault className="ml-[8.35rem]">every room</TextDefault>
            <TextDefault className="ml-[8.35rem]">a unique shape</TextDefault>
          </Slogan>

          <div className="flex flex-col  mr-[70px] mt-[68px] w-full">
            <img
              src={containerLine}
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
        <Image2Div src={Image2} alt="" />
      </Container>
      <StyledContent>
        <div className="flex flex-col">
          <div className="flex justify-between items-center	mb-[110px]">
            <TitleContent>Our remember-able stories</TitleContent>

            <DescriptionContent>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit
              mauris etiam faucibus laoreet vestibulum pretium tellus nam.
              Gravida aenean orci, facilisis senectus.
            </DescriptionContent>
          </div>

          <div className="flex justify-between items-end">
            <img src={Image3} alt="" />

            <div className="flex flex-col items-center">
              <img src={Image4} alt="" />
              <img src={containerLine2} alt="" className="my-10" />
              <TitleContent2>
                We don’t renovate space, we transform them
              </TitleContent2>
            </div>
          </div>
        </div>
      </StyledContent>
      <div className="bg-[#f8f3ed] px-[26.5px] pb-[120px]">
        <img src={bottomContainerLine} alt="" />
      </div>
    </StyledContainer>
  );
};

export default Container;
