// @flow

import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from "@storybook/react";
import { ContentSeparator } from "../src/components/atoms/Separator";

storiesOf("Content", module).add("Separators", () => (
  <ContentSeparator>Title</ContentSeparator>
));
