import React from "react";
import styled from "styled-components";

const Slider = () => {
  const StyledSlider = styled.div`
    background-color: #f8f3ed;
  `;
  const TopSlider = styled.div`
    padding: 0 57px;
  `;
  const TitleSilder = styled.h2`
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
      <TopSlider>
        <TitleSilder>Our latest projects</TitleSilder>
        <AllProjectSpan>All Projects</AllProjectSpan>
      </TopSlider>
      <SliderDiv></SliderDiv>
    </StyledSlider>
  );
};

export default Slider;
