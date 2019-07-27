// @flow

import React from "react";
import styled, { css } from "styled-components";
import { Colors, FontFamilies, FontSizes, LineHeights } from "../../themes";
import { TextError } from "./Text";
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

  ${({ error }) =>
    error &&
    css`
      border-color: ${Colors.Error};
    `}

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
  className?: string,
  label: string,
  error?: string
};

const Input = ({ id, label, className, error, ...props }: Props) => {
  console.log(error);
  return (
    <Label htmlFor={id} className={className}>
      {label}
      <TextError style={{ marginLeft: "4px" }}>{error}</TextError>
      <StyledInput
        name={id}
        id={id}
        {...props}
        error={error !== undefined ? true : false}
      />
    </Label>
  );
};

Input.defaultProps = {
  className: undefined,
  error: undefined
};

export { Input };
