import React from "react";
import styled from "styled-components";

const Slider = () => {
  const StyledSlider = styled.div`
    background-color: #f8f3ed;
    padding: 0 57px;
  `;
  const TitleSilder = styled.div``;
  const SliderDiv = styled.div``;
  return (
    <StyledSlider>
      <TitleSilder></TitleSilder>

      <SliderDiv></SliderDiv>
    </StyledSlider>
  );
};

export default Slider;
