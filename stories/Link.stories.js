// @flow

import React from "react";
import { storiesOf } from "@storybook/react";
import { Link } from "../src/components/atoms/Link";

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
  </div>
));
