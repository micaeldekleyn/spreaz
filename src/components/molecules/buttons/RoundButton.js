// @flow

import React, { useState, type Element } from "react";
import { StyledRoundButton } from "../../atoms/Button";

type Props = {
  href: string,
  active: boolean,
  text?: string,
  icon?: Element<"img">,
  iconHover?: Element<"img">,
  iconActive?: Element<"img">
};

const RoundButton = ({
  href,
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
    if (active) {
      setCurrentIcon(iconActive);
    } else {
      setCurrentIcon(icon);
    }
  };

  return (
    <StyledRoundButton
      {...props}
      active={active}
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
  iconActive: undefined
};

export default RoundButton;
