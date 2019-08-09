// @flow

import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from "@storybook/react";
import { Input } from "../src/components/atoms/Input";

storiesOf("Input", module).add("All", () => (
  <div>
    <Input
      type="text"
      id="test-text"
      label="Test label"
      className="TestClass"
    />
    <Input type="text" id="test-text-2" label="Test label 2" round />
    <Input type="password" id="test-password" label="Test password" round />
    <Input
      type="text"
      id="input-with-error"
      label="Input with error"
      error="Input with error is required"
      round
    />
  </div>
));
