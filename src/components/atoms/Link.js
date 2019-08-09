// @flow

import styled, { css } from "styled-components";
import { Colors, FontFamilies, FontSizes, LineHeights } from "../../themes";
import { theming } from "../../utils/theming";

import DisclosureIcon from "../../images/icons/icon-disclosure.png";

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

const MenuLink = styled.a`
  display: block;
  padding: 18px 0 18px 8px;
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
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
  color: ${({ theme }) =>
    theming({
      theme: theme,
      path: "Colors.Primary",
      defaultValue: Colors.Primary
    })};
  border-radius: 7px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) =>
      theming({
        theme: theme,
        path: "Colors.Primary",
        defaultValue: Colors.Primary
      })}15;
  }
  
  &.active {
    color: ${({ theme }) =>
      theming({
        theme: theme,
        path: "Colors.NeutralLight",
        defaultValue: Colors.NeutralLight
      })};
    background: url(${DisclosureIcon}), ${({ theme }) =>
  theming({
    theme: theme,
    path: "Colors.Primary",
    defaultValue: Colors.Primary
  })};
    background: url(${DisclosureIcon}), -moz-linear-gradient(90deg, ${({
  theme
}) =>
  theming({
    theme: theme,
    path: "Colors.Primary",
    defaultValue: Colors.Primary
  })} 0%, ${({ theme }) =>
  theming({
    theme: theme,
    path: "Colors.Secondary",
    defaultValue: Colors.Secondary
  })} 100%);
  background: url(${DisclosureIcon}), -webkit-linear-gradient(90deg, ${({
  theme
}) =>
  theming({
    theme: theme,
    path: "Colors.Primary",
    defaultValue: Colors.Primary
  })} 0%, ${({ theme }) =>
  theming({
    theme: theme,
    path: "Colors.Secondary",
    defaultValue: Colors.Secondary
  })} 100%);
  background: url(${DisclosureIcon}), linear-gradient(90deg, ${({ theme }) =>
  theming({
    theme: theme,
    path: "Colors.Primary",
    defaultValue: Colors.Primary
  })} 0%, ${({ theme }) =>
  theming({
    theme: theme,
    path: "Colors.Secondary",
    defaultValue: Colors.Secondary
  })} 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="${({
      theme
    }) =>
      theming({
        theme: theme,
        path: "Colors.Primary",
        defaultValue: Colors.Primary
      })}",endColorstr="${({ theme }) =>
  theming({
    theme: theme,
    path: "Colors.Secondary",
    defaultValue: Colors.Secondary
  })}",GradientType=1);
  background-size: 10px 16px, auto auto;
  background-position: 98.5% center;
  background-repeat: no-repeat;
  }
`;

export { Link, MenuLink };
