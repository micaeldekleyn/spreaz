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
  logo?: string,
  logoHeight?: number,
  appName?: string,
  leftLinks: LeftLink[],
  rightContentTitle: string,
  rightLinks: Object[],
  headerButtons?: React.Element[]
};

const StyledLeftMenu = styled.nav`
  .LeftMenu {
    &__HeaderContainer {
      margin-bottom: 24px;
    }

    &__AppNameLink {
      display: flex;
      justify-content: flex-start;
      align-items: center;
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

    &__AppLogo {
      width: auto;
      height: ${({ logoHeight }) => (logoHeight ? logoHeight : 28)}px;
      margin-right: 8px;
    }

    &__HeaderButtonsContainer {
      justify-self: flex-end;
    }

    &__LeftLink,
    &__RightLink {
      margin-bottom: 8px;
    }
  }
`;

const LeftMenu = ({
  logo,
  appName,
  leftLinks,
  rightContentTitle,
  rightLinks,
  headerButtons,
  ...props
}: Props) => (
  <StyledLeftMenu {...props} as={LeftMenuContainer}>
    <LeftMenuHeaderContainer className="LeftMenu__HeaderContainer">
      <Title level="h2" as="h1">
        <a href="/" className="LeftMenu__AppNameLink">
          {logo && (
            <img src={logo} alt={appName} className="LeftMenu__AppLogo" />
          )}
          {appName && <span>{appName}</span>}
        </a>
      </Title>
      {headerButtons && (
        <div className="LeftMenu__HeaderButtonsContainer">
          {headerButtons.map(button => button)}
        </div>
      )}
    </LeftMenuHeaderContainer>
    <LeftMenuContentContainer>
      <LeftMenuLeftContent>
        {leftLinks.map(({ component, ...link }) =>
          component ? (
            component
          ) : (
            <RoundButton
              key={link.href}
              href={link.href}
              text={link.text}
              icon={link.icon}
              iconHover={link.iconHover}
              iconActive={link.iconActive}
              className="LeftMenu__LeftLink"
              active={link.active}
            />
          )
        )}
      </LeftMenuLeftContent>
      <LeftMenuRightContent>
        <Title level="h4" as="h2">
          {rightContentTitle}
        </Title>
        {rightLinks.map(({ component, ...link }) =>
          component ? (
            component
          ) : (
            <MenuLink
              key={link.text}
              href={link.href}
              active={link.active}
              className="LeftMenu__RightLink"
            >
              {link.text}
            </MenuLink>
          )
        )}
      </LeftMenuRightContent>
    </LeftMenuContentContainer>
  </StyledLeftMenu>
);

LeftMenu.defaultProps = {
  logo: undefined,
  logoHeight: undefined,
  appName: undefined,
  headerButtons: undefined
};

export default LeftMenu;
