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
  return (
    <StyledContainer>
      <div>
        <div></div>
        <div>
          <img src={Image1} alt="" />
        </div>
      </div>
    </StyledContainer>
  );
};

export default Container;
