import React from "react";
import { QuoteBox } from "./quoteBox/QuoteBox";
import { Container } from "../../../components/Container";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { S } from "./Quote_Styles"

export const Quote: React.FC = () => {
  return (
    <S.Quote>
      <Container>
        <FlexWrapper justify="center">
          <QuoteBox
            text="With great power comes great electricity bill"
            author="Dr. Who"
          />
        </FlexWrapper>
      </Container>
    </S.Quote>
  );
};