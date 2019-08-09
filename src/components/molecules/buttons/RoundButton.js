// @flow

import React, { useState, type Element } from "react";
import { StyledRoundButton } from "../../atoms/Button";

type Props = {
  active?: boolean,
  text?: string,
  icon?: Element<"img">,
  iconHover?: Element<"img">,
  iconActive?: Element<"img">
};

const RoundButton = ({
  active,
  text,
  icon,
  iconHover,
  iconActive,
  ...props
}: Props) => {
  const [currentIcon, setCurrentIcon] = useState(active ? iconActive : icon);

  const handleMouseEnter = () => {
    // console.log(currentIcon);
    setCurrentIcon(iconHover);
  };

  const handleMouseLeave = () => {
    setCurrentIcon(icon);
  };

  return (
    <StyledRoundButton
      {...props}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {text ? text : currentIcon}
    </StyledRoundButton>
  );
};

RoundButton.defaultProps = {
  text: undefined,
  icon: undefined,
  iconHover: undefined,
  iconActive: undefined,
  active: false
};

export default RoundButton;
