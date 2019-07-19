import { configure } from "@storybook/react";
import "../src/css/reset.css";
import "../src/css/global.css";

// automatically import all files ending in *.stories.js
const req = require.context("../stories", true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
