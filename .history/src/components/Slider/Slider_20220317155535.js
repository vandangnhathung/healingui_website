import React from "react";
import styled from "styled-components";

const Slider = () => {
  const StyledSlider = styled.div`
    background-color: #f8f3ed;
  `;
  const TitleSilder = styled.h2`
    padding: 0 57px;
    font-family: "Prata", serif;
    font-size: 70px;
    line-height: 76px;
  `;
  const AllProjectSpan = styled.span`
    display: block;
  `;
  const SliderDiv = styled.div`
    font-family: "Prata", serif;
    font-size: 24px;
    line-height: 30px;
  `;
  return (
    <StyledSlider>
      <TitleSilder>Our latest projects</TitleSilder>
      <AllProjectSpan></AllProjectSpan>
      <SliderDiv></SliderDiv>
    </StyledSlider>
  );
};

export default Slider;
