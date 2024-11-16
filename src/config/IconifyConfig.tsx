import React from "react";
import { Icon, IconProps, disableCache } from "@iconify/react";

interface IconifyConfigurationProps extends Omit<IconProps, "icon"> {
  icon: string;
  width?: number;
  color?: string;
}

const Iconify: React.FC<IconifyConfigurationProps> = ({
  icon,
  color,
  width,
  style,
  ...props
}) => {
  disableCache("all");
  return (
    <Icon
      icon={icon}
      width={width}
      color={color}
      inline={true}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        ...style,
      }}
      {...props}
    />
  );
};

export default Iconify;
