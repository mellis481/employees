import * as React from "react";
import * as ReactDOM from "react-dom";
import { mfeWebComponent } from "./mf-demo-employees";

const datePickerPopover: React.SFC = ({ children }) => {
  const root = mfeWebComponent?.current?.shadowRoot?.querySelector(
    ".mf-demo-employees"
  );
  if (root) {
    return ReactDOM.createPortal(<>{children}</>, root);
  }
  return null;
};

export { datePickerPopover as DatePickerPopover };
