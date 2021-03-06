// @flow

import React from "react";
import styled, { css } from "styled-components";
import { Layout } from "../../themes";

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  flex: 1;

  ${({ outterMargin }) =>
    !outterMargin &&
    css`
      margin-left: -${Layout.Gutters / 2}px;
      margin-right: -${Layout.Gutters / 2}px;
    `}

  ${({ fullHeight }) =>
    fullHeight &&
    css`
      height: 100vh;
    `}
`;

const StyledCol = styled.div`
  flex-basis: calc(
    ${({ span }) => (100 / Layout.Columns) * span + "%"} - ${Layout.Gutters}px
  );
  max-width: calc(
    ${({ span }) => (100 / Layout.Columns) * span + "%"} - ${Layout.Gutters}px
  );
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-clip: content-box;
`;

type Props = {
  span?: number
};

const Col = (props: Props) => {
  return <StyledCol {...props} />;
};

Col.defaultProps = {
  span: 16
};

export { Row, Col };
