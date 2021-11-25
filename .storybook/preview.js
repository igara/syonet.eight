import * as nextImage from "next/image";
import { StyleRegistry } from "styled-jsx";

export const decorators = [
  (Story) => (
    <StyleRegistry>
      <Story />
    </StyleRegistry>
  ),
];

Object.defineProperty(nextImage, "default", {
  configurable: true,
  value: (props) => <img {...props} />,
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
