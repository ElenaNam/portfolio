import React from "react";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import { S } from "../Quote_Styles"

type QuoteBoxType = {
  text: string;
  author: string;
};

export const QuoteBox: React.FC<QuoteBoxType> = (props) => {
  return (
    <S.QuoteBox>
      <FlexWrapper direction="column">
        <S.QuoteTitle>{props.text}</S.QuoteTitle>
        <S.QuoteAuthor>- {props.author}</S.QuoteAuthor>
      </FlexWrapper>
    </S.QuoteBox>
  );
};