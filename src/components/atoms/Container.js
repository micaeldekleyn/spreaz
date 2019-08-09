// @flow

import React from "react";
import styled from "styled-components";
import { theming } from "../../utils/theming";
import { Colors } from "../../themes";

const LeftMenuContainer = styled.nav`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  padding: 16px 0;
  background-color: ${({ theme }) =>
    theming({
      theme: theme,
      path: "Colors.NeutralLight",
      defaultValue: Colors.NeutralLight
    })};
  box-shadow: inset -10px 0 16px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
`;

const LeftMenuHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 16px;
`;

const LeftMenuContentContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
`;

const LeftMenuLeftContent = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 0;
  width: 78px;
  padding: 0 16px;
  box-sizing: border-box;
  border-right-width: 1px;
  border-right-style: solid;
  border-image: linear-gradient(
      to bottom,
      ${({ theme }) =>
        theming({
          theme: theme,
          path: "Colors.Primary",
          defaultValue: Colors.Primary
        })},
      ${({ theme }) =>
        theming({
          theme: theme,
          path: "Colors.Secondary",
          defaultValue: Colors.Secondary
        })}
    )
    1 100%;
`;

const LeftMenuRightContent = styled.div`
  flex: 1;
  z-index: 0;
  padding: 0 16px;
`;

export {
  LeftMenuContainer,
  LeftMenuHeaderContainer,
  LeftMenuContentContainer,
  LeftMenuLeftContent,
  LeftMenuRightContent
};
