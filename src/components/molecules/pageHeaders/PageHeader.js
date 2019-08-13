// @flow

import React from "react";
import styled from "styled-components";
import { PageHeaderContainer } from "../../atoms/Container";
import { Title } from "../../atoms/Title";

type Props = {
  title: string,
  buttons: Object[]
};

const StyledPageHeader = styled.header`
  display: flex;
  flex: 1;
  flex-direction: row;
  padding: 24px 0;

  .PageHeader {
    &__LeftContent {
      display: flex;
      flex: 1;
      flex-direction: column;
    }

    &__RightContent {
      display: flex;
      flex: 1;
      flex-direction: row;
      justify-content: flex-end;

      & > * {
        margin-left: 16px;
      }
    }
  }
`;

const PageHeader = ({ title, buttons, ...props }: Props) => (
  <StyledPageHeader {...props} as={PageHeaderContainer}>
    <div className="PageHeader__LeftContent">
      <Title level="h3" as="h1">
        {title}
      </Title>
    </div>
    <div className="PageHeader__RightContent">{buttons}</div>
  </StyledPageHeader>
);

export default PageHeader;
