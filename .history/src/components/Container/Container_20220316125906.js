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
  `;
  const Slogan = styled.h2`
    letter-spacing: -2%;
    font-size: 82px;
    line-height: 1;
  `;
  const Image1Div = styled.img`
    width: 705px;
    height: 508px;
  `;
  return (
    <StyledContainer>
      <Container>
        <div>
          <Slogan>We make every room a unique shape</Slogan>
        </div>
        <div>
          <Image1Div src={Image1} alt="" />
        </div>
      </Container>
    </StyledContainer>
  );
};

export default Container;
