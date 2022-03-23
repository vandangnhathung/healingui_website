import React from "react";
import styled from "styled-components";

const Slider = () => {
  const StyledSlider = styled.div`
    background-color: #f8f3ed;
  `;
  const TopSlider = styled.div`
    padding: 0 57px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 60px;
  `;
  const TitleSilder = styled.h2`
    font-family: "Prata", serif;
    font-size: 70px;
    line-height: 76px;
  `;
  const UnderlineText = styled.span`
    display: block;
    font-family: "Prata", serif;
    font-size: 24px;
    line-height: 30px;
    text-decoration: underline;
  `;
  const SliderDiv = styled.div`
    width: 100%;
    position: relative;
  `;
  const SliderItem = styled.div`
    width: 100%;
    height: 712px;
  `;
  const SliderImageDiv = styled.div`
    height: 100%;
  `;
  const SliderImage = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
  `;
  const SliderInfo = styled.div`
    position: absolute;
    left: 57px;
    bottom: 65px;
  `;
  const SliderName = styled.div``;
  return (
    <StyledSlider>
      <TopSlider>
        <TitleSilder>Our latest projects</TitleSilder>
        <UnderlineText>All Projects</UnderlineText>
      </TopSlider>
      <SliderDiv>
        <SliderItem>
          <SliderImageDiv>
            <SliderImage src="https://source.unsplash.com/random" alt="" />
          </SliderImageDiv>
          <SliderInfo>
            <SliderName>Dining Room</SliderName>
            <UnderlineText>View Details</UnderlineText>
          </SliderInfo>
        </SliderItem>
      </SliderDiv>
    </StyledSlider>
  );
};

export default Slider;
