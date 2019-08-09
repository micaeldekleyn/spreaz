// @flow

import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from "@storybook/react";
import { Link, MenuLink } from "../src/components/atoms/Link";

storiesOf("Links", module).add("All", () => (
  <div>
    <div>
      <Link href="/?path=/story/links--all">Link style</Link>
    </div>
    <div>
      <Link href="/?path=/story/links--all" cancel>
        Cancel style
      </Link>
    </div>
    <div>
      <MenuLink>Menu Link</MenuLink>
      <MenuLink className="active">Menu Link Active</MenuLink>
    </div>
  </div>
));
