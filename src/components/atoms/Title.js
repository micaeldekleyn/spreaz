// @flow

import React from "react";
import styled from "styled-components";
import { Colors, FontFamilies, FontSizes, LineHeights } from "../../themes";

const StyledTitle = styled.h1`
  font-family: ${FontFamilies.Primary};
  font-weight: 800;
  font-size: ${({ level }) => FontSizes[level]};
  line-height: ${({ level }) => LineHeights[level]};
  color: ${Colors.NeutralDark};
  text-align: ${({ centered, align = "left" }) =>
    centered ? "center" : align};
`;

type Props = {
  level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6",
  centered?: boolean
};

const Title = (props: Props) => {
  const { level } = props;
  return <StyledTitle as={level} {...props} />;
};

Title.defaultProps = {
  level: "h1",
  centered: false
};

export { Title };
