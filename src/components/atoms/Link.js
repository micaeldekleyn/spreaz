// @flow

import styled, { css } from "styled-components";
import { Colors, FontFamilies, FontSizes, LineHeights } from "../../themes";
import { theming } from "../../utils/theming";

const Link = styled.a`
  font-family: ${({ theme }) =>
    theming({
      theme: theme,
      path: "FontFamilies.Secondary",
      defaultValue: FontFamilies.Secondary
    })};
  font-size: ${({ theme }) =>
    theming({
      theme: theme,
      path: "FontSizes.link",
      defaultValue: FontSizes.link
    })};
  line-height: ${({ theme }) =>
    theming({
      theme: theme,
      path: "LineHeights.link",
      defaultValue: LineHeights.link
    })};
  color: ${({ theme }) =>
    theming({
      theme: theme,
      path: "Colors.Primary",
      defaultValue: Colors.Primary
    })};
  text-decoration: underline;

  ${({ cancel }) =>
    cancel &&
    css`
      color: ${({ theme }) =>
        theming({
          theme: theme,
          path: "Colors.Neutral",
          defaultValue: Colors.Neutral
        })};
    `}

  &:hover {
    color: ${({ theme }) =>
      theming({
        theme: theme,
        path: "Colors.Secondary",
        defaultValue: Colors.Secondary
      })};
  }

  &:active {
    color: ${({ theme }) =>
      theming({
        theme: theme,
        path: "Colors.Secondary",
        defaultValue: Colors.Secondary
      })};
    text-decoration: none;
  }
`;

export { Link };
