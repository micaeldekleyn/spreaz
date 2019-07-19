// @flow

import React from "react";

import { storiesOf, addDecorator } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { withA11y } from "@storybook/addon-a11y";

addDecorator(withA11y);
