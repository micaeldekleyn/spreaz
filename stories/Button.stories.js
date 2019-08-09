// @flow

import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { Row, Col } from "../src/components/atoms/Layout";
import { Button, SubmitButton } from "../src/components/atoms/Button";
import RoundButton from "../src/components/molecules/buttons/RoundButton";

storiesOf("Buttons", module).add("All", () => (
  <div>
    <Row style={{ marginTop: "16px" }}>
      <Col span={8}>
        <Button>Link button</Button>
      </Col>
      <Col span={8}>
        <SubmitButton>Form submit button</SubmitButton>
      </Col>
    </Row>
    <ThemeProvider
      theme={{ Colors: { Primary: "lightBlue", Secondary: "pink" } }}
    >
      <Row style={{ marginTop: "16px" }}>
        <Col span={8}>
          <Button round>Link button rounded</Button>
        </Col>
        <Col span={8}>
          <SubmitButton round>Form submit button rounded</SubmitButton>
        </Col>
      </Row>
    </ThemeProvider>
    <Row style={{ marginTop: "16px" }}>
      <Col span={8}>
        <Button round border>
          Link button bordered
        </Button>
      </Col>
      <Col span={8}>
        <SubmitButton border>Form submit button rounded</SubmitButton>
      </Col>
    </Row>
    <Row style={{ marginTop: "16px" }}>
      <RoundButton href="/" text="TT" />
    </Row>
  </div>
));
