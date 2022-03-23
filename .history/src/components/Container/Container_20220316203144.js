import React from "react";
import styled from "styled-components";
import Image1 from "../../Images/Image1.png";
import Image2 from "../../Images/Image2.png";
import Image3 from "../../Images/Image3.png";
import Image4 from "../../Images/Image4.png";
import containerLine from "../../Images/container-line.png";
import containerLine2 from "../../Images/container-line2.png";

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

  const TitleContent = styled.div`
      font-family: "Prata", serif;
max-width: 388px;
  `
  return (
    <StyledContainer>
      <Container>
        <div>
          <Slogan>
            We make <span className="opacity-0"></span>
            <div className="ml-[8.35rem]">every room</div>
            <div className="ml-[8.35rem]">a unique shape</div>
          </Slogan>

          <div className="flex flex-col  mr-[70px] mt-[68px]">
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
        <div>
          <Image1Div src={Image1} alt="" />
        </div>
        <Image2Div src={Image2} alt="" />
      </Container>
      <StyledContent>
        <div className="flex flex-col">
          <div className="flex ">
            <TitleContent>Our remember-able stories</TitleConte>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit
              mauris etiam faucibus laoreet vestibulum pretium tellus nam.
              Gravida aenean orci, facilisis senectus.
            </p>
          </div>

          <div className="flex">
            <img src={Image3} alt="" />
            <div className="">
              <img src={Image4} alt="" />
              <img src={containerLine2} alt="" />
              <h3>We don’t renovate space, we transform them</h3>
            </div>
          </div>
        </div>
      </StyledContent>
    </StyledContainer>
  );
};

export default Container;
