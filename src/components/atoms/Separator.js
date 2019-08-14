// @flow

// import React from "react";
import styled from "styled-components";
import { Colors } from "../../themes";
import { Title } from "./Title";

type Props = {
  level: string
};

const ContentSeparator = styled(Title).attrs(({ level }: Props) => ({
  level: level || "h4"
}))`
  width: 100%;
  padding-bottom: 8px;
  border-bottom: 1px solid ${Colors.Neutral};
`;

export { ContentSeparator };
