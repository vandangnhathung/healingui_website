import React from "react";
import styled from "styled-components";
import article1 from "../../Images/article1.png";
import article2 from "../../Images/article2.png";
import articleLine from "../../Images/article-line.png";
import { media } from "../Responsive";
const LastestArticle = () => {
  const StyledLastestArticle = styled.div`
    @import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap");
    font-family: "DM Sans", sans-serif;
    @import url("https://fonts.googleapis.com/css2?family=Prata&display=swap");
  `;

  const StyledContent = styled.div`
    background-color: #f8f3ed;
    padding: 258px 57px 150px;
    ${media.mobile} {
      padding: 108px 16px 0;
    }
  `;

  const TitleContent = styled.h2`
    font-family: "Prata", serif;
    max-width: 594px;
    font-size: 70px;
    line-height: 76px;
    margin: auto;
    ${media.mobile} {
      text-align: center;
      margin-bottom: 30px;
    }
  `;

  const DescriptionContent = styled.p`
    font-family: "Prata", sans-serif;
    color: #222120;
  `;

  const TextDmSan = styled.p`
    font-family: "DM Sans", sans-serif;
  `;
  const ListArticle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
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
          <div className="flex flex-col mx-auto	mb-[130px]">
            <TitleContent>Our latest articles</TitleContent>

            <DescriptionContent className="text-[#F8F3ED] leading-8 text-2xl mt-6 underline cursor-pointer mx-auto">
              See All Designers
            </DescriptionContent>
          </div>

          <ListArticle className="">
            <ItemArticle>
              <img src={article1} alt="" />
              <DescriptionContent className="text-3xl leading-none my-[35px] ">
                Why your client needs interior design
              </DescriptionContent>
              <img src={articleLine} alt="" />
              <div className="flex pr-20  mt-[23px] justify-between w-full text-center ">
                <DescriptionContent className="underline text-lg">
                  Read More
                </DescriptionContent>
                <p className="opacity-50">April 30, 2020</p>
              </div>
            </ItemArticle>
            <ItemArticle>
              <img src={article2} alt="" />
              <DescriptionContent className="text-3xl leading-none my-[35px] ">
                How to decore your home
              </DescriptionContent>
              <img src={articleLine} alt="" />
              <div className="flex pr-20  mt-[23px] justify-between w-full text-center ">
                <DescriptionContent className="underline text-lg">
                  Read More
                </DescriptionContent>
                <p className="opacity-50">April 30, 2020</p>
              </div>
            </ItemArticle>
          </ListArticle>
        </div>
      </StyledContent>
    </StyledLastestArticle>
  );
};

export default LastestArticle;
