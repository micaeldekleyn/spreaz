// @flow

import React from "react";
import { storiesOf } from "@storybook/react";

import { Title } from "../src/components/atoms/Title";
import { Text, TextError } from "../src/components/atoms/Text";

storiesOf("Typography", module).add("All", () => (
  <div>
    <Title>32 Title</Title>
    <Title level="h2">24 Title</Title>
    <Title level="h3">20 Title</Title>
    <Title level="h4">18 Title</Title>
    <Title level="h5">16 Title</Title>
    <Title level="h6">14 Title</Title>
    <Text>16 Text Normal</Text>
    <Text bold>16 Text Bold</Text>
    <Text level="medium">14 Text Normal</Text>
    <Text level="medium" bold>
      14 Text Bold
    </Text>
    <Text level="small">12 Text Normal</Text>
    <Text level="small" bold>
      12 Text Bold
    </Text>
    <TextError>12 Text Error</TextError>
  </div>
));
