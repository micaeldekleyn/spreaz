import babel from "rollup-plugin-babel";
import { uglify } from "rollup-plugin-uglify";
import visualizer from "rollup-plugin-visualizer";
import image from "@timdp/rollup-plugin-image";
import resolve from "rollup-plugin-node-resolve";

const globals = {
  react: "React",
  "styled-components": "styled",
  "prop-types": "PropTypes",
  "lodash.get": "_.get"
};
const name = "spreaz";

const plugins = [image(), babel(), resolve()];

const base = {
  input: "src/index.js",
  external: ["react", "styled-components", "prop-types", "lodash.get"],
  plugins
};

export default [
  Object.assign({}, base, {
    output: [
      {
        file: "dist/spreaz.js",
        format: "umd",
        exports: "named",
        name,
        globals
      },
      {
        file: "dist/spreaz.es.js",
        format: "es",
        exports: "named",
        name,
        globals
      }
    ]
  }),
  Object.assign({}, base, {
    output: [
      {
        file: "dist/spreaz.min.js",
        format: "umd",
        exports: "named",
        name,
        globals
      }
    ],
    plugins: base.plugins.concat([
      uglify(),
      visualizer({ filename: "./bundle-stats.html" })
    ])
  })
];
