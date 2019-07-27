// @flow

import React from "react";
import styled from "styled-components";
import { Colors, FontFamilies, FontSizes, LineHeights } from "../../themes";
import { theming } from "../../utils/theming";

const StyledText = styled.p`
  font-family: ${FontFamilies.Secondary};
  font-size: ${({ level }) => FontSizes.p[level]};
  line-height: ${({ level }) => LineHeights.p[level]};
  color: ${Colors.NeutralDark};
  text-align: ${({ centered, align = "left" }) =>
    centered ? "center" : align};
  font-weight: ${({ bold }) => (bold ? "bold" : "normal")};
`;

type TextProps = {
  level?: "normal" | "medium" | "small",
  centered?: boolean,
  bold?: boolean
};

const Text = (props: TextProps) => {
  return <StyledText {...props} />;
};

Text.defaultProps = {
  level: "normal",
  centered: false,
  bold: false
};

const TextError = styled.span`
  font-family: ${({ theme }) =>
    theming({
      theme: theme,
      path: "FontFamilies.Secondary",
      defaultValue: FontFamilies.Secondary
    })};
  font-size: ${({ theme }) =>
    theming({
      theme: theme,
      path: "FontSizes.textError",
      defaultValue: FontSizes.textError
    })};
  font-weight: normal;
  text-transform: none;
  color: ${({ theme }) =>
    theming({
      theme: theme,
      path: "Colors.Error",
      defaultValue: Colors.Error
    })};
`;

export { Text, TextError };
