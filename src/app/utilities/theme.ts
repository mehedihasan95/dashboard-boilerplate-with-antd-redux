import { ThemeStateType } from "../slice/themeSlice";

export const themePresets: ThemeStateType[] = [
  {
    mode: "light",
    name: "Default",
    siderBg: "#FFFFFF",
    headerBg: "#F5F5F5",
    itemBg: "#FFFFFF",
    colorPrimary: "#664DC9",
  },
  {
    mode: "dark",
    name: "Dark",
    siderBg: "#1F1F1F",
    headerBg: "#000000",
    itemBg: "#1F1F1F",
  },
  {
    mode: "light",
    name: "Blossom",
    siderBg: "#FDE4DF",
    headerBg: "#F5F5F5",
    itemBg: "#FDE4DF",
    colorPrimary: "#f14927",
  },
  {
    mode: "light",
    name: "Forest",
    siderBg: "#C4F4E6",
    headerBg: "#F5F5F5",
    itemBg: "#C4F4E6",
    colorPrimary: "#3ddbac",
  },
  {
    mode: "light",
    name: "Sky",
    siderBg: "#D1F0F9",
    headerBg: "#F5F5F5",
    itemBg: "#D1F0F9",
    colorPrimary: "#34bee5",
  },
  {
    mode: "light",
    name: "Ocean",
    siderBg: "#CCDBFA",
    headerBg: "#F5F5F5",
    itemBg: "#CCDBFA",
    colorPrimary: "#2e6dea",
  },
  {
    mode: "light",
    name: "Hot Purple",
    siderBg: "#FEDFF8",
    headerBg: "#F5F5F5",
    itemBg: "#FEDFF8",
    colorPrimary: "#f820cd",
  },
  {
    mode: "light",
    name: "Soft Yellow",
    siderBg: "#FBE2AA",
    headerBg: "#F5F5F5",
    itemBg: "#FBE2AA",
    colorPrimary: "#f5b324",
  },
];

export const primaryColors: { label: string; value: string }[] = [
  { label: "Turquoise", value: "#1abc9c" },
  { label: "Emerald", value: "#2ecc71" },
  { label: "Peter River", value: "#3498db" },
  { label: "Amethyst", value: "#9b59b6" },
  { label: "Alizarin", value: "#e74c3c" },
  { label: "Orange", value: "#f39c12" },
  { label: "Pumpkin", value: "#d35400" },
  { label: "Pomegranate", value: "#c0392b" },
  { label: "Asbestos", value: "#7f8c8d" },
  { label: "Silver", value: "#bdc3c7" },
  { label: "Wet Asphalt", value: "#34495e" },
  { label: "Green Sea", value: "#16a085" },
  { label: "Nephritis", value: "#27ae60" },
  { label: "Belize Hole", value: "#2980b9" },
  { label: "Wisteria", value: "#8e44ad" },
  { label: "Carrot", value: "#e67e22" },
  { label: "Sunflower", value: "#f1c40f" },
  { label: "Concrete", value: "#95a5a6" },
  { label: "Midnight Blue", value: "#2c3e50" },
  { label: "Watermelon", value: "#ff6b81" },
  { label: "Radical Red", value: "#e84393" },
  { label: "Pink Glamour", value: "#fd79a8" },
  { label: "Robin's Egg Blue", value: "#00cec9" },
  { label: "Bright Blue", value: "#0984e3" },
  { label: "Vibrant Yellow", value: "#fdcb6e" },
  { label: "Exuberant Blue", value: "#6c5ce7" },
  { label: "Mint Leaf", value: "#00b894" },
  { label: "Burnt Red", value: "#d63031" },
  { label: "Peach", value: "#fab1a0" },
  { label: "Pastel Orange", value: "#e17055" },
  { label: "Light Blue", value: "#74b9ff" },
  { label: "Light Green", value: "#55efc4" },
  { label: "Light Violet", value: "#a29bfe" },
  { label: "Light Red", value: "#ff7675" },
  { label: "Pale Yellow", value: "#ffeaa7" },
  { label: "Soft Cyan", value: "#81ecec" },
  { label: "Dark Gray", value: "#636e72" },
  { label: "Soft Silver", value: "#b2bec3" },
  { label: "Light Gray", value: "#dfe6e9" },
  { label: "Dark Blue", value: "#130f40" },
];

export const fontSizes: { label: string; value: number }[] = Array.from(
  { length: 6 },
  (_, i) => {
    const size = 13 + i;
    return {
      label: `${size}${size === 14 ? " (Default)" : ""}`,
      value: size,
    };
  }
);

export const fontFamilies: { label: string; value: string }[] = [
  {
    label: "Roboto (Default)",
    value: "Roboto, sans-serif",
  },
  {
    label: "Poppins",
    value: "Poppins, sans-serif",
  },
  {
    label: "Roboto Slab",
    value: "Roboto Slab, serif",
  },
];
