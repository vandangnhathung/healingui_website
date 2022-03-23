import React from "react";
import styled from "styled-components";
import article1 from "../../Images/article1.png";

const LastestArticle = () => {
  const StyledLastestArticle = styled.div`
    @import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap");
    font-family: "DM Sans", sans-serif;
    @import url("https://fonts.googleapis.com/css2?family=Prata&display=swap");
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
          <div className="flex flex-col mx-auto	mb-[110px]">
            <TitleContent>Our remember-able stories</TitleContent>

            <DescriptionContent>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit
              mauris etiam faucibus laoreet vestibulum pretium tellus nam.
              Gravida aenean orci, facilisis senectus.
            </DescriptionContent>
          </div>

          <div className="flex justify-between items-end">
            <img src={article1} alt="" />
            <div className="flex flex-col items-center">
              <img src={article1} alt="" />
              <img src={article1} alt="" className="my-10" />
              <TitleContent2>
                We don’t renovate space, we transform them
              </TitleContent2>
            </div>
          </div>
        </div>
      </StyledContent>
      <div className="bg-[#f8f3ed] px-[26.5px] pb-[120px]">
        <img src={article1} alt="" />
      </div>
    </StyledLastestArticle>
  );
};

export default LastestArticle;
