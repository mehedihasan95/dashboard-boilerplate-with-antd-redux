import React from "react";
import { Divider } from "antd";
import CustomizeTheme from "./components/CustomizeTheme";
import CustomizePrimaryColor from "./components/CustomizePrimaryColor";
import CustomizeFontSizeAndFontFamily from "./components/CustomizeFontSizeAndFontFamily";

const Settings: React.FC = () => {
  return (
    <React.Fragment>
      <CustomizeTheme />
      <Divider />
      <CustomizePrimaryColor />
      <Divider />
      <CustomizeFontSizeAndFontFamily />
    </React.Fragment>
  );
};

export default Settings;
