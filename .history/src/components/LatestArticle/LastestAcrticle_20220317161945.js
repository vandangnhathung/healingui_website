import React from "react";
import styled from "styled-components";
import Image1 from "../../Images/Image1.png";
import Image2 from "../../Images/Image2.png";
import Image3 from "../../Images/Image3.png";
import Image4 from "../../Images/Image4.png";

const LastestArticle = () => {
  const StyledLastestArticle = styled.div`
    @import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap");
    font-family: "DM Sans", sans-serif;
    @import url("https://fonts.googleapis.com/css2?family=Prata&display=swap");
  `;
  const LastestArticle = styled.div`
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
    <StyledLastestArticle>
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
              <img src={LastestArticleLine2} alt="" className="my-10" />
              <TitleContent2>
                We don’t renovate space, we transform them
              </TitleContent2>
            </div>
          </div>
        </div>
      </StyledContent>
      <div className="bg-[#f8f3ed] px-[26.5px] pb-[120px]">
        <img src={bottomLastestArticleLine} alt="" />
      </div>
    </StyledLastestArticle>
  );
};

export default LastestArticle;
