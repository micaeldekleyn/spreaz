// @flow

import React from "react";
import styled, { css } from "styled-components";
import { Colors, FontFamilies, FontSizes, LineHeights } from "../../themes";
import { theming } from "../../utils/theming";

const StyledButton = styled.button`
  display: block;
  width: 100%;
  padding: 12px 0;
  font-family: ${({ theme }) =>
    theming({
      theme: theme,
      path: "FontFamilies.Primary",
      defaultValue: FontFamilies.Primary
    })};
  font-size: ${({ theme }) =>
    theming({
      theme: theme,
      path: "FontSizes.button",
      defaultValue: FontSizes.button
    })};
  font-weight: bold;
  line-height: ${({ theme }) =>
    theming({
      theme: theme,
      path: "LineHeights.button",
      defaultValue: LineHeights.button
    })};
  color: ${({ theme }) =>
    theming({
      theme: theme,
      path: "Colors.NeutralLight",
      defaultValue: Colors.NeutralLight
    })};
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  background: ${({ theme }) =>
    theming({
      theme: theme,
      path: "Colors.Primary",
      defaultValue: Colors.Primary
    })};
  background: -moz-linear-gradient(90deg, ${({ theme }) =>
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
  background: -webkit-linear-gradient(90deg, ${({ theme }) =>
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
  background: linear-gradient(90deg, ${({ theme }) =>
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
  cursor: pointer;
  outline: none;
  border: 0;
  box-sizing: border-box;

  ${({ border }) =>
    border &&
    css`
      position: relative;
      width: calc(100% - 2px);
      color: ${({ theme }) =>
        theming({
          theme: theme,
          path: "Colors.Primary",
          defaultValue: Colors.Primary
        })};
      background: ${({ theme }) =>
        theming({
          theme: theme,
          path: "Colors.NeutralLight",
          defaultValue: Colors.NeutralLight
        })};
      margin: 1px;
      /* border: 1px solid ${Colors.Primary}; */

      :before {
        content: '';
        position: absolute;
        top: 0; right: 0; bottom: 0; left: 0;
        z-index: -1;
        margin: -1px;
        border-radius: inherit;
        background: linear-gradient(90deg, ${({ theme }) =>
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
      }
    `}

  ${({ round }) =>
    round &&
    css`
      border-radius: 24px;
    `}

  :hover {
    color: ${({ theme }) =>
      theming({
        theme: theme,
        path: "Colors.NeutralLight",
        defaultValue: Colors.NeutralLight
      })};
    background: ${({ theme }) =>
      theming({
        theme: theme,
        path: "Colors.Primary",
        defaultValue: Colors.Primary
      })};
    :before {
      background: linear-gradient(
        90deg,
        ${({ theme }) =>
          theming({
            theme: theme,
            path: "Colors.Primary",
            defaultValue: Colors.Primary
          })} 0%,
      ${({ theme }) =>
        theming({
          theme: theme,
          path: "Colors.Primary",
          defaultValue: Colors.Primary
        })} 100%
      );
    }
  }

  :active {
    color: ${({ theme }) =>
      theming({
        theme: theme,
        path: "Colors.NeutralLight",
        defaultValue: Colors.NeutralLight
      })};
    background: ${({ theme }) =>
      theming({
        theme: theme,
        path: "Colors.Secondary",
        defaultValue: Colors.Secondary
      })};
    :before {
      background: linear-gradient(
        90deg,
        ${({ theme }) =>
          theming({
            theme: theme,
            path: "Colors.Secondary",
            defaultValue: Colors.Secondary
          })} 0%,
      ${({ theme }) =>
        theming({
          theme: theme,
          path: "Colors.Secondary",
          defaultValue: Colors.Secondary
        })} 100%
      );
    }
  }
`;

export const SubmitButton = (props: Object) => {
  return <StyledButton type="submit" {...props} />;
};

export const Button = (props: Object) => {
  return <StyledButton as="a" {...props} />;
};

export const StyledRoundButton = styled.a`
  position: relative;
  display: block;
  width: 44px;
  height: 44px;
  border-radius: 22px;
  color: ${({ theme }) =>
    theming({
      theme: theme,
      path: "Colors.Primary",
      defaultValue: Colors.Primary
    })};
  background: ${({ theme }) =>
    theming({
      theme: theme,
      path: "Colors.NeutralLight",
      defaultValue: Colors.NeutralLight
    })};
  margin: 1px;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  font-family: ${({ theme }) =>
    theming({
      theme: theme,
      path: "FontFamilies.Primary",
      defaultValue: FontFamilies.Primary
    })};
  font-size: ${({ theme }) =>
    theming({
      theme: theme,
      path: "FontSizes.button",
      defaultValue: FontSizes.button
    })};
  font-weight: bold;
  line-height: 42px;
  cursor: pointer;

  :before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    margin: -1px;
    border-radius: inherit;
    background: linear-gradient(
      180deg,
      ${({ theme }) =>
          theming({
            theme: theme,
            path: "Colors.Primary",
            defaultValue: Colors.Primary
          })}
        0%,
      ${({ theme }) =>
          theming({
            theme: theme,
            path: "Colors.Secondary",
            defaultValue: Colors.Secondary
          })}
        100%
    );
  }

  :hover {
    color: ${({ theme }) =>
      theming({
        theme: theme,
        path: "Colors.NeutralLight",
        defaultValue: Colors.NeutralLight
      })};
    background: ${({ theme }) =>
      theming({
        theme: theme,
        path: "Colors.Primary",
        defaultValue: Colors.Primary
      })};
    :before {
      background: linear-gradient(
        90deg,
        ${({ theme }) =>
            theming({
              theme: theme,
              path: "Colors.Primary",
              defaultValue: Colors.Primary
            })}
          0%,
        ${({ theme }) =>
            theming({
              theme: theme,
              path: "Colors.Primary",
              defaultValue: Colors.Primary
            })}
          100%
      );
    }
  }

  :active {
    color: ${({ theme }) =>
      theming({
        theme: theme,
        path: "Colors.NeutralLight",
        defaultValue: Colors.NeutralLight
      })};
    background: ${({ theme }) =>
      theming({
        theme: theme,
        path: "Colors.Secondary",
        defaultValue: Colors.Secondary
      })};
    :before {
      background: linear-gradient(
        90deg,
        ${({ theme }) =>
            theming({
              theme: theme,
              path: "Colors.Secondary",
              defaultValue: Colors.Secondary
            })}
          0%,
        ${({ theme }) =>
            theming({
              theme: theme,
              path: "Colors.Secondary",
              defaultValue: Colors.Secondary
            })}
          100%
      );
    }
  }

  img {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
`;
