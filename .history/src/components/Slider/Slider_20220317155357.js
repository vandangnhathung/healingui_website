import React from "react";
import styled from "styled-components";

const Slider = () => {
  const StyledSlider = styled.div`
    background-color: #f8f3ed;
  `;
  const TitleSilder = styled.h2`
    padding: 0 57px;
    font-family: "Prata", serif;
    max-width: 513px;
    font-size: 52px;
    line-height: 61px;
  `;
  const SliderDiv = styled.div``;
  return (
    <StyledSlider>
      <TitleSilder></TitleSilder>

      <SliderDiv></SliderDiv>
    </StyledSlider>
  );
};

export default Slider;
