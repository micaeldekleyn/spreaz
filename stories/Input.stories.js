// @flow

import React from "react";
import { storiesOf } from "@storybook/react";
import { Input } from "../src/components/atoms/Input";

storiesOf("Input", module).add("All", () => (
  <div>
    <Input type="text" id="test-text" label="Test label" />
    <Input type="text" id="test-text-2" label="Test label 2" round />
    <Input type="password" id="test-password" label="Test password" round />
  </div>
));
