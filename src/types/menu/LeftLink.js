// @flow

import * as React from "react";

export type LeftLink = {
  href: string,
  active: boolean,
  text?: string,
  icon?: React.Element<"img">,
  iconHover?: React.Element<"img">,
  iconActive?: React.Element<"img">
};
