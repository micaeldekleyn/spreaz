// @flow
import * as _ from "lodash";

type Props = {
  theme: Object,
  path: string,
  defaultValue: any
};

const theming = ({ theme, path, defaultValue }: Props) => {
  if (_.get(theme, path)) {
    return _.get(theme, path);
  } else {
    return defaultValue;
  }
};

export { theming };
