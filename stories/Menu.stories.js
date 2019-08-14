// @flow

import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from "@storybook/react";
import LeftMenu from "../src/components/molecules/menus/LeftMenu";
import HomeIcon from "./images/icon-home.png";
import HomeIconActive from "./images/icon-home-active.png";
import { type LeftLink } from "../src/types/menu/LeftLink";

const leftLinks: LeftLink[] = [
  {
    icon: <img src={HomeIcon} alt="Home" width="24" height="19" />,
    iconHover: <img src={HomeIconActive} alt="Home" width="24" height="19" />,
    iconActive: <img src={HomeIconActive} alt="Home" width="24" height="19" />,
    href: "/",
    active: true
  },
  {
    text: "RB",
    href: "/groups/1",
    active: false
  },
  {
    text: "MT",
    href: "/groups/2",
    active: false
  }
];

const rightLinks = [
  {
    text: "Menu Link",
    href: "/content/1",
    active: true
  },
  {
    text: "Menu Link",
    href: "/content/2",
    active: false
  }
];

storiesOf("Menu", module).add("Left Menu", () => (
  <LeftMenu
    appName="Spreaz"
    leftLinks={leftLinks}
    rightContentTitle="Home"
    rightLinks={rightLinks}
  />
));
