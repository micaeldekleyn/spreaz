// @flow

import React from "react";
import { storiesOf } from "@storybook/react";
import { Row, Col } from "../src/components/atoms/Layout";

// const { Unit: Col } = Grid;

storiesOf("Layout", module).add("All", () => (
  <div style={{ overflowX: "hidden" }}>
    <Row outterMargin style={{ backgroundColor: "#F7F7F7" }}>
      <Col span={8} style={{ backgroundColor: "#21D4FD" }}>
        <p style={{ padding: "8px" }}>Column 8</p>
      </Col>
      <Col span={8} style={{ backgroundColor: "#B4DEFF" }}>
        <p style={{ padding: "8px" }}>Column 8</p>
      </Col>
      <Col span={8} style={{ backgroundColor: "#21D4FD" }}>
        <p style={{ padding: "8px" }}>Column 8</p>
      </Col>
      <Col span={4} style={{ backgroundColor: "#B4DEFF" }}>
        <p style={{ padding: "8px" }}>Column 4</p>
      </Col>
      <Col span={4} style={{ backgroundColor: "#21D4FD" }}>
        <p style={{ padding: "8px" }}>Column 4</p>
      </Col>
      <Col span={4} style={{ backgroundColor: "#B4DEFF" }}>
        <p style={{ padding: "8px" }}>Column 4</p>
      </Col>
      <Col span={8} style={{ backgroundColor: "#21D4FD" }}>
        <p style={{ padding: "8px" }}>Column 8</p>
      </Col>
      <Col span={4} style={{ backgroundColor: "#B4DEFF" }}>
        <p style={{ padding: "8px" }}>Column 4</p>
      </Col>
    </Row>
    <Row style={{ backgroundColor: "#F7F7F7", marginTop: "16px" }}>
      <Col span={4} style={{ backgroundColor: "#21D4FD" }}>
        <p style={{ padding: "8px" }}>Column 4</p>
      </Col>
      <Col span={4} style={{ backgroundColor: "#B4DEFF" }}>
        <p style={{ padding: "8px" }}>Column 4</p>
      </Col>
      <Col span={8} style={{ backgroundColor: "#B4DEFF" }}>
        <p style={{ padding: "8px" }}>Column 8</p>
      </Col>
    </Row>
    <Row style={{ backgroundColor: "#F7F7F7", marginTop: "16px" }}>
      <Col span={5} style={{ backgroundColor: "#B4DEFF" }}>
        <p style={{ padding: "8px" }}>Column 5</p>
      </Col>
      <Col span={11} style={{ backgroundColor: "#21D4FD" }}>
        <p style={{ padding: "8px" }}>Column 11</p>
      </Col>
    </Row>
  </div>
));
