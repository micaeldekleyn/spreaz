// @flow

import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from "@storybook/react";
import PageHeader from "../src/components/molecules/pageHeaders/PageHeader";
import { Button } from "../src/components/atoms/Button";

storiesOf("Page Header", module).add("Page Header", () => (
  <PageHeader
    title="Events"
    buttons={[
      <Button key={1}>Link button</Button>,
      <Button key={2}>Link button</Button>
    ]}
  />
));
