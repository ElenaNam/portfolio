import React from "react";
import styled from "styled-components";
import { QuoteBox } from "./quoteBox/QuoteBox";
import { Container } from "../../../components/Container";
import { FlexWrapper } from "../../../components/FlexWrapper";

export const Quote = () => {
  return (
    <StyledQuote>
      <Container>
        <FlexWrapper justify="center">
          <QuoteBox
            text="With great power comes great electricity bill"
            author="Dr. Who"
          />
        </FlexWrapper>
      </Container>
    </StyledQuote>
  );
};

const StyledQuote = styled.section`
  padding-bottom: 18px;

  background: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODIiIGhlaWdodD0iOTEiIHZpZXdCb3g9IjAgMCA4MiA5MSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMC41IiB5PSIwLjUiIHdpZHRoPSI5MCIgaGVpZ2h0PSI5MCIgc3Ryb2tlPSIjQUJCMkJGIi8+Cjwvc3ZnPgo=")
    no-repeat right center;
`;
