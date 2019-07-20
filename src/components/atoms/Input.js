// @flow

import React from "react";
import styled, { css } from "styled-components";
import { Colors, FontFamilies, FontSizes, LineHeights } from "../../themes";
import { theming } from "../../utils/theming";

const Label = styled.label`
  display: block;
  font-family: ${({ theme }) =>
    theming({
      theme: theme,
      path: "FontFamilies.Secondary",
      defaultValue: FontFamilies.Secondary
    })};
  font-size: ${({ theme }) =>
    theming({
      theme: theme,
      path: "FontSizes.label",
      defaultValue: FontSizes.label
    })};
  font-weight: bold;
  line-height: ${({ theme }) =>
    theming({
      theme: theme,
      path: "LineHeights.label",
      defaultValue: LineHeights.label
    })};
  text-transform: uppercase;
  cursor: pointer;
`;

const StyledInput = styled.input`
  display: block;
  width: 100%;
  padding: 12px;
  font-family: ${FontFamilies.Secondary};
  font-size: ${FontSizes.input};
  border: 1px solid ${Colors.Neutral};
  outline: none;
  box-sizing: border-box;

  ${({ round }) =>
    round &&
    css`
      border-radius: 24px;
    `}

  :focus {
    border-color: ${({ theme }) =>
      theming({
        theme: theme,
        path: "Colors.Primary",
        defaultValue: Colors.Primary
      })};
  }
`;

type Props = {
  id: string,
  label: string
};

const Input = ({ id, label, ...props }: Props) => {
  return (
    <Label htmlFor={id}>
      {label}
      <StyledInput name={id} id={id} {...props} />
    </Label>
  );
};

export { Input };
