import React from "react";
import styled from "styled-components";
import Image1 from "../../Images/Image1.png";
const Container = () => {
  const StyledContainer = styled.div`
    background-color: #222120;
    @import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap");
    font-family: "DM Sans", sans-serif;
    @import url("https://fonts.googleapis.com/css2?family=Prata&display=swap");
  `;
  const Container = styled.div`
    padding: 108px 168px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0 32px;
  `;
  const Slogan = styled.h2`
    letter-spacing: -0.02em;
    font-size: 82px;
    line-height: 1;
    font-family: "Prata", serif;
    color: #faf5ef;
    max-width: 724px;
    font-weight: 400;
  `;
  const Image1Div = styled.img`
    width: auto;
    height: auto;
  `;
  return (
    <StyledContainer>
      <Container>
        <div>
          <Slogan>
            We make <span className="opacity-0">We</span>every room{" "}
            <span className="opacity-0">We </span> a unique shape
          </Slogan>
        </div>
        <div>
          <Image1Div src={Image1} alt="" />
        </div>
      </Container>
    </StyledContainer>
  );
};

export default Container;
