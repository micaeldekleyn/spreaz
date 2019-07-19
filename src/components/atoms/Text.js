// @flow

import React from "react";
import styled from "styled-components";
import { Colors, FontFamilies, FontSizes, LineHeights } from "../../themes";

const StyledText = styled.p`
  font-family: ${FontFamilies.Secondary};
  font-size: ${({ level }) => FontSizes.p[level]};
  line-height: ${({ level }) => LineHeights.p[level]};
  color: ${Colors.NeutralDark};
  text-align: ${({ centered, align = "left" }) =>
    centered ? "center" : align};
  font-weight: ${({ bold }) => (bold ? "bold" : "normal")};
`;

type Props = {
  level?: "normal" | "medium" | "small",
  centered?: boolean,
  bold?: boolean
};

const Text = (props: Props) => {
  return <StyledText {...props} />;
};

Text.defaultProps = {
  level: "normal",
  centered: false,
  bold: false
};

export { Text };
