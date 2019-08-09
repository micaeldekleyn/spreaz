// @flow

import React from "react";
import styled from "styled-components";
import {
  LeftMenuContainer,
  LeftMenuHeaderContainer,
  LeftMenuContentContainer,
  LeftMenuLeftContent,
  LeftMenuRightContent
} from "../../atoms/Container";
import RoundButton from "../buttons/RoundButton";
import { Title } from "../../atoms/Title";
import { MenuLink } from "../../atoms/Link";
import { Colors } from "../../../themes";
import { theming } from "../../../utils/theming";
import { type LeftLink } from "../../../types/menu/LeftLink";

type Props = {
  appName: string,
  leftLinks: LeftLink[],
  rightContentTitle: string,
  rightLinks: Object[]
};

const StyledLeftMenu = styled.nav`
  .LeftMenu {
    &__HeaderContainer {
      margin-bottom: 24px;
    }

    &__AppNameLink {
      text-decoration: none;
      color: ${({ theme }) =>
        theming({
          theme: theme,
          path: "Colors.Primary",
          defaultValue: Colors.Primary
        })};

      &:hover {
        color: ${({ theme }) =>
          theming({
            theme: theme,
            path: "Colors.Secondary",
            defaultValue: Colors.Secondary
          })};
      }
    }

    &__LeftLink,
    &__RightLink {
      margin-bottom: 8px;
    }
  }
`;

const LeftMenu = ({
  appName,
  leftLinks,
  rightContentTitle,
  rightLinks
}: Props) => (
  <StyledLeftMenu as={LeftMenuContainer}>
    <LeftMenuHeaderContainer className="LeftMenu__HeaderContainer">
      <Title level="h2" as="h1">
        <a href="/" className="LeftMenu__AppNameLink">
          {appName}
        </a>
      </Title>
    </LeftMenuHeaderContainer>
    <LeftMenuContentContainer>
      <LeftMenuLeftContent>
        {leftLinks.map(link => (
          <RoundButton
            key={link.href}
            href={link.href}
            text={link.text}
            icon={link.icon}
            iconHover={link.iconHover}
            iconActive={link.iconActive}
            className="LeftMenu__LeftLink"
          />
        ))}
      </LeftMenuLeftContent>
      <LeftMenuRightContent>
        <Title level="h4" as="h2">
          {rightContentTitle}
        </Title>
        {rightLinks.map(link => (
          <MenuLink
            key={link.text}
            href={link.href}
            className="LeftMenu__RightLink"
          >
            {link.text}
          </MenuLink>
        ))}
      </LeftMenuRightContent>
    </LeftMenuContentContainer>
  </StyledLeftMenu>
);

export default LeftMenu;