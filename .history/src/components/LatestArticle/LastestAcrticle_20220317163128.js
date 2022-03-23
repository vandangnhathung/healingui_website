import React from "react";
import styled from "styled-components";
import article1 from "../../Images/article1.png";
import article2 from "../../Images/article2.png";

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
    max-width: 594px;
    font-size: 70px;
    line-height: 76px;
    margin: auto;
  `;

  const DescriptionContent = styled.p`
    font-family: "Prata", sans-serif;
    color: #222120;
  `;

  const ItemArticle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  `;

  return (
    <StyledLastestArticle>
      <StyledContent>
        <div className="flex flex-col">
          <div className="flex flex-col mx-auto	mb-[150px]">
            <TitleContent>Our latest articles</TitleContent>

            <DescriptionContent className="text-[#F8F3ED] leading-8 text-2xl mt-6 underline cursor-pointer mx-auto">
              See All Designers
            </DescriptionContent>
          </div>

          <div className="flex justify-between items-end gap-8">
            <ItemArticle>
              <img src={article1} alt="" />
              <p>Why your client needs interior design</p>
            </ItemArticle>
            <div>
              <img src={article2} alt="" />
            </div>
          </div>
        </div>
      </StyledContent>
    </StyledLastestArticle>
  );
};

export default LastestArticle;
